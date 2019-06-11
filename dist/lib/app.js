"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const server_config_1 = require("./../app/config/server.config");
const routes_1 = require("./../app/routes/routes");
const database_service_1 = require("./../app/services/database.service");
const response_helper_1 = require("./../app/helper/response.helper");
const response_middleware_1 = require("./../app/middleware/response.middleware");
const cors = require("cors");
const path = require("path");
const hbs = require("express-handlebars");
class App {
    constructor() {
        this.app = express();
        this.middlewares();
        this.view();
        this.routes(routes_1.web);
        this.routes(routes_1.api);
        this.error_handler();
        this.database();
    }
    middlewares() {
        this.app.use(cors());
        this.app.use('/public', express.static(path.join(__dirname, './../public/')));
    }
    routes(routes) {
        routes.data.forEach((route) => {
            this.app.use(routes.uses, route.router);
        });
    }
    error_handler() {
        //404 handler
        this.app.use((req, res, next) => {
            next(new response_helper_1.default().notFound(`Not Found`, {}));
        });
        //error handler
        this.app.use(response_middleware_1.default);
    }
    database() {
        const db = new database_service_1.default();
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
