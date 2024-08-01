import type { IVisEdge, IVisNode } from "~/vis/IVis";

interface TheGraphType {
  name: string;
  data: {
    edges: IVisEdge[];
    nodes: IVisNode[];
  }
}
export const theGraph = () => {
  return useState<TheGraphType>('theGraph', () => ({
    name: 'grafi',
    data: {
        nodes: [{
        id: 1,
        label: '',
        "x": 1,
        "y": 2
      }],
      edges: []
    }
  }))
};
