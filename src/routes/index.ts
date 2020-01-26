import createRouter from "@arangodb/foxx/router";

import hello from "./hello";
import service from "./service";

const router: Foxx.Router = createRouter();

hello(router);
service(router);

export default router;
