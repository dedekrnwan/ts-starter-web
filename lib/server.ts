import App from "./app";
import cServer from "./../app/config/server.config";

const app = new App()

app.run(cServer.port)
