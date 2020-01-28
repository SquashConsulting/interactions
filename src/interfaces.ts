export interface IRequest extends Foxx.Request {
  _raw: {
    cookies: {
      sid: string;
    };
  };
  currentUser: ArangoDB.Document;
}

export interface ICollection {
  [key: string]: string;
}
