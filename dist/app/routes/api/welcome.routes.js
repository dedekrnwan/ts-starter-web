"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const welcome_controller_1 = require("./../../controller/api/welcome.controller");
const auth_middleware_1 = require("./../../middleware/auth.middleware");
class Routes {
    constructor() {
        this.router = express.Router();
        this.path = '/';
        this.MJwt = new auth_middleware_1.Jwt();
        this.controller = new welcome_controller_1.default();
        this.run();
    }
    run() {
        this.router.route(this.path)
            .get(this.MJwt.authenticated, this.controller.index);
    }
}
exports.default = Routes;
