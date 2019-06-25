import * as Auth from "./auth.middleware";
import { Response } from "./response.middleware";
import * as express from "express"
import * as cors from "cors";
import * as path from "path";

const before = (app:express.Application) => {
    let middlewares:Array<Function> | Array<any>
    //declaring used middleware
    middlewares = [
        cors(),
    ];
    middlewares.forEach((middleware:any):void => {
        app.use(middleware)
    })
    return app;
}
const after = (app:express.Application) => {
    let middlewares:Array<Function> | Array<any>
    //declaring used middleware
    middlewares = [
        Response
    ];
    middlewares.forEach((middleware:any):void => {
        app.use(middleware)
    })
    return app;
}
const error = (app:express.Application) => {
    let middlewares:Array<Function> | Array<any>
    //declaring used middleware
    middlewares = [];
    middlewares.forEach((middleware:any):void => {
        app.use(middleware)
    })
    return app;
}

export {
    before,
    after,
    error,
    Response,
    Auth
}
