import Controller from "./../../../vendor/controller";
import * as express from "express";
import hException from "./../../helper/exception.helper";
import HResponse from "./../../helper/response.helper";

class WelcomeController extends Controller {
    constructor(){
        super()
    }
    public async index(request:express.Request, response:express.Response, next:express.NextFunction):Promise<any>{
        try {
            next(new HResponse().ok(`Mantab`,{}))
        } catch (error) {
            next(new hException(error))
        }
    }
}

export default WelcomeController