import { IEdge } from "./IEdge";

export class Graph {
  private edges: IEdge[];

  constructor (edges: IEdge[]) {
    this.edges = edges;
  }
}