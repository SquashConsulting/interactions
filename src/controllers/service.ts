import { db } from "@arangodb";

import { Service } from "../models";

const ServiceCollection: ArangoDB.Collection = db.services;

const listAll = (): Service[number] => ServiceCollection.all().toArray();

const findOne = (_key: string): Service =>
  ServiceCollection.firstExample({ _key });

export default {
  listAll,
  findOne
};
