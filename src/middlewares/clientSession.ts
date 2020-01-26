import { db } from "@arangodb";

import { IRequest } from "../interfaces";

export default function(
  req: IRequest,
  _res: Foxx.Response,
  next: Foxx.NextFunction
) {
  const sid: string = req._raw.cookies.sid;
  const session: ArangoDB.Document = db
    ._collection("auth_sessions")
    .firstExample({ _key: sid });

  if (session) {
    const sessionUser: ArangoDB.Document = db
      ._collection("auth_users")
      .firstExample({ _key: session.uid });

    req.currentUser = sessionUser;
  }

  next();
}
