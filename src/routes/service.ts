import joi from "joi";

import { IRequest } from "../interfaces";
import { ServiceController } from "../controllers";
import { Service, serviceSchema } from "../models";

export default function service(router: Foxx.Router): Foxx.Router {
  router
    .get("/services", (_req: IRequest, res: Foxx.Response) => {
      const data: Service[number] = ServiceController.listAll();

      res.send({ data });
    })
    .response(joi.object({ data: serviceSchema }).required(), "Services")
    .summary("Returns all services")
    .description("Returns all services");

  router
    .get("/services/:id", (req: IRequest, res: Foxx.Response) => {
      const _key: string = req.pathParams.id;
      const data: Service[number] = ServiceController.findOne(_key);

      if (!data) res.throw("not found");

      res.send({ data });
    })
    .response(joi.object({ data: serviceSchema }).required(), "Services")
    .summary("Returns all services")
    .description("Returns all services");

  return router;
}
