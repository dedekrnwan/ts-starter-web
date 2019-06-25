import * as express from "express";
import * as path from "path";
import * as hbs from "express-handlebars";

import * as Config from "./../app/config";

import { Database } from "./../app/services";
import { Error } from "./../app/interfaces";


import { RouteMiddleware, Attach, IRoutes, IMiddlewares } from "@dedekrnwan/decorators-express";
import { WelcomeController } from "./../app/controller";
import * as Middlewares from "./../app/middleware";

class App {
    public app:express.Application
    constructor(){
        this.app = express()
        
        // this.routes(web)
        // this.routes(api)
        this.app = Middlewares.before(this.app);
        this.app = Attach.Controller(this.app, [
            //all your controller`
            WelcomeController
        ], '/api');
        this.app = Middlewares.after(this.app);
        this.app = Middlewares.error(this.app);

        this.static()
        this.view()
        this.database()
    }
    private static(){
        this.app.use('/public',express.static(path.join(__dirname, './../public/')))
        this.app.use('/vendor',express.static(path.join(__dirname, './../vendor/')))
    }
    private routes(routes:any){
        routes.data.forEach((route:any) => {
            this.app.use(routes.uses, route.router);
        });
    }
    private database(){
        const db = new Database();
        db.fractal();
    }
    private view(){
        this.app.engine('hbs', hbs(
            {
                extname: '.hbs',
                defaultLayout: 'app',
                layoutsDir: path.join(__dirname, "./../app/views/layouts/"),
                partialsDir: path.join(__dirname, "./../app/views/includes/"),
                helpers: {
                    asset: (value:any):string => {
                        return `./../public/assets/${value}`;
                    },
                    public: (value:any):string => {
                        return `./../public/${value}`;
                    }
                }
            }
        ));
        this.app.set('views',path.join(__dirname, "./../app/views/pages/"))
        this.app.set('view engine','hbs')
      
    }
    public run(port:number){
        this.app.listen(port, () => {
            console.log(`${Config.Server.name} listening on the port ${port}`)
        }).on('error' , (err:Error) => {
            let another_port = [8080, 80, 3000, 4000, 5000]; 
            let next = another_port[Math.floor(Math.random() * another_port.length)];
            if(err.code == 'EADDRINUSE')
                console.error(`${Config.Server.name} failed listening on the port ${err['port']}`)
                console.log(`${Config.Server.name} try listening on the port ${next}`)
                this.run(next)

        })
    }
}

export default App