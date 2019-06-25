export interface IMeta {
    response:boolean,
    status:number,
    message:string,
    timestamp:Date
}
export interface IResponse {
    meta:IMeta,
    data:any
}