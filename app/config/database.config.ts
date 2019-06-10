import { default as MongooseInterface } from "../interfaces/mongoose.interface";
import "dotenv/config"

const fractal:MongooseInterface = <MongooseInterface> {
    url: `${process.env.FRACTAL_DEFAULT_URL}:${process.env.FRACTAL_DEFAULT_PORT}/${process.env.FRACTAL_DEFAULT_SCHEMA}`,
    port: parseInt(process.env.FRACTAL_DEFAULT_PORT || '27017'),
    schema: process.env.FRACTAL_DEFAULT_SCHEMA,
}

export {
    fractal
}