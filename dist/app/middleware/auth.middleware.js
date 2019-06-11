"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const exception_helper_1 = require("./../helper/exception.helper");
const response_helper_1 = require("./../helper/response.helper");
const jwt_helper_1 = require("./../helper/jwt.helper");
class Jwt {
    constructor() {
    }
    authenticated(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                //get the token from the header if present
                let token = req.headers["authorization"];
                //if no token found, return response (without going to the next middelware)
                if (!token) {
                    next(new response_helper_1.default().unAuthorized('Access denied. No token provided.', req.body));
                }
                else {
                    //if can verify the token, set req.user and pass to next middleware
                    token = token.replace('Bearer ', '');
                    let Jwt_Helper = new jwt_helper_1.default(token);
                    const decoded = yield Jwt_Helper.verify();
                    next();
                }
            }
            catch (error) {
                console.log(error);
                next(yield new exception_helper_1.default(error));
            }
        });
    }
    authorized(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
            }
            catch (error) {
                next(yield new exception_helper_1.default(error));
            }
        });
    }
}
exports.Jwt = Jwt;
