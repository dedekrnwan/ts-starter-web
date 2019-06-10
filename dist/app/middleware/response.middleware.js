"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (retur, request, response, next) => {
    // response.status(retur.meta.status || 500).json(<IResponse> retur);
    let error = {
        meta: {
            response: false,
            status: retur.code || 500,
            message: retur.message,
        },
        data: {
            error: retur
        }
    };
    // console.log( { layout: 'error' , error })
    response.render('vendor/error', { layout: 'error', error });
};
