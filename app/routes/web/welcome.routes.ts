import * as express from "express";
import Controller from "./../../../vendor/controller";
import WelcomeController from "./../../controller/welcome.controller";

import { Jwt as MJwt } from "./../../middleware/auth.middleware";

class Routes {
    private router:express.Router = express.Router()
    private path:string = '/'
    private controller:WelcomeController
    private MJwt = new MJwt()
    constructor() {
        this.controller = new WelcomeController();
        this.run()
    }
    
    public run(){
        this.router.route(this.path)
            .get(
                this.controller.index.bind(this.controller)
            );
    }
}

export default Routes