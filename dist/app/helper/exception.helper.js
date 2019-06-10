"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Exception extends Error {
    constructor(error) {
        super(error.message);
        this.meta = {
            response: false,
            status: error.status || 500,
            message: error.message,
            timestamp: new Date()
        };
        this.data = {
            error: error
        };
    }
}
exports.default = Exception;
