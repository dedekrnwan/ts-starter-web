import Controller from "./../../vendor/controller";
import * as express from "express";
import hException from "./../helper/exception.helper";

class WelcomeController extends Controller {
    constructor(){
        super()
    }
    public async index(request:express.Request, response:express.Response, next:express.NextFunction):Promise<any>{
        try {
            let template =  'welcome/index';
            //next to viewer
            response.render(template);
        } catch (error) {
            next(new hException(error))
        }
    }
}

export default WelcomeController