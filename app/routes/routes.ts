import { default as web_RWelcome } from "./web/welcome.routes";
import { default as api_RWelcome } from "./api/welcome.routes";

const web:Object =  {
    category: 'web',
    data: <any> [
        new web_RWelcome()
    ]
}

const api:Object =  {
    category: 'api',
    data: <any> [
        new api_RWelcome()
    ]
}

export { web, api }