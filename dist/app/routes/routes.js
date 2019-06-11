"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const welcome_routes_1 = require("./web/welcome.routes");
const welcome_routes_2 = require("./api/welcome.routes");
const web = {
    uses: '/',
    category: 'web',
    data: [
        new welcome_routes_1.default()
    ]
};
exports.web = web;
const api = {
    uses: '/api',
    category: 'api',
    data: [
        new welcome_routes_2.default()
    ]
};
exports.api = api;
