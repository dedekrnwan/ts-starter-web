"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const welcome_controller_1 = require("./../../controller/welcome.controller");
class Routes {
    constructor() {
        this.router = express.Router();
        this.path = '/';
        this.controller = new welcome_controller_1.default();
        this.run();
    }
    run() {
        this.router.route(this.path)
            .get(this.controller.index);
    }
}
exports.default = Routes;
