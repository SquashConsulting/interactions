import joi from "joi";

import { User } from "../models";
import { IRequest } from "../interfaces";

export default function hello(router: Foxx.Router): Foxx.Router {
  router
    .get("/", (req: IRequest, res: Foxx.Response) => {
      const result: User = req.currentUser;

      res.send({ result });
    })
    .response(
      joi
        .object({
          result: joi.object().required()
        })
        .required(),
      "result"
    )
    .summary("Returns hello world")
    .description("Example route that sends hello world message");

  return router;
}
