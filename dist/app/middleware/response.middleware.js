"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (retur, request, response, next) => {
    if (request.originalUrl.split('/')[1] == 'api') {
        response.status(retur.meta.status || 500).json(retur);
    }
    else {
        console.log(retur);
        response.render('vendor/error', { layout: 'error', error: retur });
    }
};
