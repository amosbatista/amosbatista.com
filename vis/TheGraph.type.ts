import type { IVisEdge, IVisNode } from "./IVis";

export interface TheGraphType {
  name: string;
  data: {
    edges: IVisEdge[];
    nodes: IVisNode[];
  }
}