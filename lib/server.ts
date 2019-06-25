import App from "./app";
import * as Config from "./../app/config";

const app = new App()

app.run(Config.Server.port)
