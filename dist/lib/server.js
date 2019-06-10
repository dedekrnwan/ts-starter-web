"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("./app");
const server_config_1 = require("./../app/config/server.config");
const app = new app_1.default();
app.run(server_config_1.default.port);
