export default interface InteractedWith extends ArangoDB.Edge {
  through: string;
  rating: number;
}
