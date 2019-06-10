import * as mongoose from "mongoose";
import { fractal } from "./../config/database.config";

class Database {
    constructor(){

    }
    
    public fractal:any = () => {
        mongoose.connect(
            fractal.url, 
            {useNewUrlParser: true}
        );
        mongoose.connection.on('connected', () => {
            console.log(`Mongoose ${fractal.schema} connection is open to ${fractal.url}`);
        });
        mongoose.connection.on('error', (error) => {
            console.log(`Mongoose ${fractal.schema} connection at ${ fractal.url} has occured ${error} error`);
        });
        mongoose.connection.on('disconnected', () => {
            console.log(`Mongoose ${fractal.schema} connection at ${ fractal.url} is disconnected`);
        });
        // process.on('SIGINT', function(){
        //     mongoose.connection.close(function(){
        //         console.log(`Mongoose ${fractal.schema} connection is disconnected due to application termination`);
        //         process.exit(0)
        //     });
        // });
    }
}

export default Database