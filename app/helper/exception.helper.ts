import { IMeta } from "./../interfaces/response.interface";
import { Error } from "./../interfaces";

export class Exception extends Error {
    public meta:IMeta
    public data:any
    constructor(error: Error) {
      super(error.message);
      this.meta = <IMeta> {
        response: false,
        status: error.status || 500,
        message: error.message,
        timestamp: new Date()
      }
      this.data = {
        error : error
      }
    }
}