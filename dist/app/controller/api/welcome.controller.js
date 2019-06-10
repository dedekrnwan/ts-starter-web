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
const controller_1 = require("./../../../vendor/controller");
const exception_helper_1 = require("./../../helper/exception.helper");
const response_helper_1 = require("./../../helper/response.helper");
class WelcomeController extends controller_1.default {
    constructor() {
        super();
    }
    index(request, response, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                next(new response_helper_1.default().ok(`Mantab`, {}));
            }
            catch (error) {
                next(new exception_helper_1.default(error));
            }
        });
    }
}
exports.default = WelcomeController;
