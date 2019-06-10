"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const database_config_1 = require("./../config/database.config");
class Database {
    constructor() {
        this.fractal = () => {
            mongoose.connect(database_config_1.fractal.url, { useNewUrlParser: true });
            mongoose.connection.on('connected', () => {
                console.log(`Mongoose ${database_config_1.fractal.schema} connection is open to ${database_config_1.fractal.url}`);
            });
            mongoose.connection.on('error', (error) => {
                console.log(`Mongoose ${database_config_1.fractal.schema} connection at ${database_config_1.fractal.url} has occured ${error} error`);
            });
            mongoose.connection.on('disconnected', () => {
                console.log(`Mongoose ${database_config_1.fractal.schema} connection at ${database_config_1.fractal.url} is disconnected`);
            });
            // process.on('SIGINT', function(){
            //     mongoose.connection.close(function(){
            //         console.log(`Mongoose ${fractal.schema} connection is disconnected due to application termination`);
            //         process.exit(0)
            //     });
            // });
        };
    }
}
exports.default = Database;
