"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const path = require("path");
const hbs = require("express-handlebars");
const server_config_1 = require("./../app/config/server.config");
const services_1 = require("./../app/services");
const decorators_express_1 = require("@dedekrnwan/decorators-express");
const controller_1 = require("./../app/controller");
const Middlewares = require("./../app/middleware");
class App {
    constructor() {
        this.app = express();
        // this.routes(web)
        // this.routes(api)
        this.app = Middlewares.before(this.app);
        this.app = decorators_express_1.Attach.Controller(this.app, [
            //all your controller
            controller_1.WelcomeController
        ], '/api');
        this.app = Middlewares.after(this.app);
        this.app = Middlewares.error(this.app);
        this.static();
        this.view();
        this.database();
    }
    static() {
        this.app.use('/public', express.static(path.join(__dirname, './../public/')));
        this.app.use('/vendor', express.static(path.join(__dirname, './../vendor/')));
    }
    routes(routes) {
        routes.data.forEach((route) => {
            this.app.use(routes.uses, route.router);
        });
    }
    database() {
        const db = new services_1.Database();
        db.fractal();
    }
    view() {
        this.app.engine('hbs', hbs({
            extname: '.hbs',
            defaultLayout: 'app',
            layoutsDir: path.join(__dirname, "./../app/views/layouts/"),
            partialsDir: path.join(__dirname, "./../app/views/includes/"),
            helpers: {
                asset: (value) => {
                    return `./../public/assets/${value}`;
                },
                public: (value) => {
                    return `./../public/${value}`;
                }
            }
        }));
        this.app.set('views', path.join(__dirname, "./../app/views/pages/"));
        this.app.set('view engine', 'hbs');
    }
    run(port) {
        this.app.listen(port, () => {
            console.log(`${server_config_1.default.name} listening on the port ${port}`);
        }).on('error', (err) => {
            let another_port = [8080, 80, 3000, 4000, 5000];
            let next = another_port[Math.floor(Math.random() * another_port.length)];
            if (err.code == 'EADDRINUSE')
                console.error(`${server_config_1.default.name} failed listening on the port ${err['port']}`);
            console.log(`${server_config_1.default.name} try listening on the port ${next}`);
            this.run(next);
        });
    }
}
exports.default = App;
