"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
class Jwt {
    constructor() {
        this.config = {
            secret: 'NpYBWYa2I3sS7',
            options: {
                issuer: 'Typescript',
                subject: 'noreply@ts.com',
                audience: 'http://localhost/',
                expiresIn: "12h",
                algorithm: "RS256" // RSASSA [ "RS256", "RS384", "RS512" ]
            }
        };
    }
}
exports.default = new Jwt().config;
