import * as express from "express";
import cServer from "./../app/config/server.config";
import Error from "./../app/interfaces/error.interface";
import { web, api } from "./../app/routes/routes";
import Database from "./../app/services/database.service";
import HResponse from "./../app/helper/response.helper";
import MResponse from "./../app/middleware/response.middleware";
import * as cors from "cors";
import * as path from "path";
import * as hbs from "express-handlebars";

class App {
    public app:express.Application
    constructor(){
        this.app = express()
        this.middlewares()
        
        this.view()
        this.routes(web)
        this.routes(api)
        this.error_handler()
        this.database()
    }
    private middlewares(){
        this.app.use(cors())
        this.app.use('/public',express.static(path.join(__dirname, './../public/')))
    }
    private routes(routes:any){
        routes.data.forEach((route:any) => {
            this.app.use(routes.uses, route.router);
        });
    }
    private error_handler(){
        //404 handler
        this.app.use((req, res, next) => {
            next(new HResponse().notFound(`Not Found`,{}));
        })
        //error handler
        this.app.use(MResponse)
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
            console.log(`${cServer.name} listening on the port ${port}`)
        }).on('error' , (err:Error) => {
            let another_port = [8080, 80, 3000, 4000, 5000]; 
            let next = another_port[Math.floor(Math.random() * another_port.length)];
            if(err.code == 'EADDRINUSE')
                console.error(`${cServer.name} failed listening on the port ${err['port']}`)
                console.log(`${cServer.name} try listening on the port ${next}`)
                this.run(next)

        })
    }
}

export default App