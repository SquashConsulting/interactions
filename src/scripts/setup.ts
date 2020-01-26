import { db } from "@arangodb";

const collections = ["services"];
const edges = ["interacted_with"];

for (const collection of collections) {
  if (!db._collection(collection)) {
    db._createDocumentCollection(collection);
  } else if (module.context.isProduction) {
    console.debug(
      `collection ${collection} already exists. Leaving it untouched.`
    );
  }
}

for (const edge of edges) {
  if (!db._collection(edge)) {
    db._createEdgeCollection(edge);
  } else if (module.context.isProduction) {
    console.debug(
      `edge collection ${edge} already exists. Leaving it untouched`
    );
  }
}
