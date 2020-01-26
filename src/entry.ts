import router from "./routes";
import clientSession from "./middlewares/clientSession";

module.context.use(clientSession);

module.context.use(router);
