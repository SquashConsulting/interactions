import { db } from "@arangodb";

import { ICollection } from "../interfaces";

const {
  COLLECTIONS: { interactions }
} = module.context.dependencies.shared;

const edges: ICollection = interactions.edges;
const documents: ICollection = interactions.documents;

Object.values(documents).forEach(collection => {
  if (!db._collection(collection)) {
    db._createDocumentCollection(collection);
  } else if (module.context.isProduction) {
    console.debug(
      `collection ${collection} already exists. Leaving it untouched.`
    );
  }
});

Object.values(edges).forEach(edge => {
  if (!db._collection(edge)) {
    db._createEdgeCollection(edge);
  } else if (module.context.isProduction) {
    console.debug(
      `edge collection ${edge} already exists. Leaving it untouched`
    );
  }
});
