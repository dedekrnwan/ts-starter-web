"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const welcome_routes_1 = require("./web/welcome.routes");
const web = {
    category: 'web',
    data: [
        new welcome_routes_1.default()
    ]
};
exports.web = web;
const api = {
    category: 'web',
    data: [
        new welcome_routes_1.default()
    ]
};
exports.api = api;
