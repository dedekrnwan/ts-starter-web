"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
exports.default = (app, controllers, uses = '') => {
    controllers.forEach((controller) => {
        let metakey = {
            routes: `${controller.name}:routes`,
            prefix: `${controller.name}:prefix`,
            middlewares: `${controller.name}:middlewares`,
        };
        const instance = new controller();
        const prefix = Reflect.getMetadata(metakey.prefix, controller);
        const routes = Reflect.getMetadata(metakey.routes, controller);
        const router = express.Router();
        routes.forEach((route) => {
            // //metadata class middleware
            // let middlewares_class:IMiddlewares = Reflect.getMetadata(metakey.middlewares, controller);
            //metadata method middleware
            let middlewares = Reflect.getMetadata(metakey.middlewares, controller, route.function);
            //metadata route of method
            let handler = instance[route.function];
            // router.route(`${route.path}`)[route.method]([...middlewares_class.before,...middlewares.before, handler, ...middlewares.after, ...middlewares_class.after,...middlewares.error, ...middlewares_class.error]) 
            router.route(`${route.path}`)[route.method]([...middlewares.before, handler, ...middlewares.after, ...middlewares.error]);
            app.use(`${uses}${prefix}`, router);
        });
    });
    return app;
};
