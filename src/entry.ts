import router from "./routes";

const { MIDDLEWARES } = module.context.dependencies.shared;

module.context.use(MIDDLEWARES.clientSession);

module.context.use(router);
