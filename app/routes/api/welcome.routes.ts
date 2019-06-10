import * as express from "express";
import Controller from "./../../../vendor/controller";
import WelcomeController from "./../../controller/api/welcome.controller";

class Routes {
    private router:express.Router = express.Router()
    private path:string = '/'
    private controller:WelcomeController
    constructor() {
        this.controller = new WelcomeController();
        this.run()
    }
    
    public run(){
        this.router.route(this.path)
            .get(
                this.controller.index
            );
    }
}

export default Routes