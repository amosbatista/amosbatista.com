import type { TheGraphType } from "~/vis/TheGraph.type";

export const theGraph = () => {
  return useState<TheGraphType>('theGraph', () => ({
    name: '',
    data: {
        nodes: [{
        id: 1,
        label: '',
        description: '',
        "x": 1,
        "y": 2
      }],
      edges: []
    }
  }))
};
