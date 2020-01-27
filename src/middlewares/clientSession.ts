import { db } from "@arangodb";

import { IRequest } from "../interfaces";

export default function(
  req: IRequest,
  res: Foxx.Response,
  next: Foxx.NextFunction
) {
  const sid: string = req._raw.cookies.sid;

  if (!sid) res.throw("unauthorized");

  const session: ArangoDB.Document = db
    ._collection("auth_sessions")
    .firstExample({ _key: sid });

  if (session) {
    const sessionUser: ArangoDB.Document = db
      ._collection("auth_users")
      .firstExample({ _key: session.uid });

    req.currentUser = sessionUser;
  } else {
    res.throw("unauthorized");
  }

  next();
}
