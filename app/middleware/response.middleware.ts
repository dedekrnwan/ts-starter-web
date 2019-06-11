import * as express from "express";
import { IResponse } from "./../interfaces/response.interface";
import Error from "./../interfaces/error.interface";

export default (retur: any, request: express.Request, response: express.Response, next: express.NextFunction) => {
    if(request.originalUrl.split('/')[1] == 'api'){
        response.status(retur.meta.status || 500).json(<IResponse> retur);
    }else{
        response.render('vendor/error', { layout: 'error' , error:retur } );
    }
   
}