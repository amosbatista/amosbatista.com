import { Graph } from "./graph";
import type { IVisEdge, IVisNode, IVisNodesPosition } from "./IVis"; 

describe ('graphs', () => {

  it('deve retornar um grafo', () => {
    const edge1: IVisEdge = {
      from: 1,
      to: 2
    }

    const edge2: IVisEdge = {
      from: 3,
      to: 2
    }

    const node1: IVisNode = { 
      id: 1,
      label: 'node1',
      y: 5,
      x: 0
    };

    const node2: IVisNode = { 
      id: 2,
      label: 'node2',
      y: 3,
      x: 10
    }

    const node3: IVisNode = { 
      id: 3,
      label: 'node3',
      y: 30,
      x: 67
    }


    const graph = new Graph(
      [edge1, edge2],
      [node1, node2, node3]
    )

    expect(graph.getEdges()).toEqual([edge1, edge2],)
    expect(graph.getNodes()).toEqual([node1, node2, node3],)
  });



  it('deve receber uma lista de posições do vis e atualizar seus nós, de acordo com o id do elemento', () => {
    const edge1: IVisEdge = {
      from: 1,
      to: 2
    }

    const edge2: IVisEdge = {
      from: 3,
      to: 2
    }

    const node1: IVisNode = { 
      id: 1,
      label: 'node1',
      y: 5,
      x: 0
    };

    const node2: IVisNode = { 
      id: 2,
      label: 'node2',
      y: 3,
      x: 10
    }

    const node3: IVisNode = { 
      id: 3,
      label: 'node3',
      y: 30,
      x: 67
    }


    const graph = new Graph(
      [edge1, edge2],
      [node1, node2, node3]
    )


    const newPosition: IVisNodesPosition = {
      nodes: {
        1: {
          x: 222,
          y: 333
        },
        3: {
          x: 895,
          y: 122
        }
      }
    }

    graph.updatedCoordinatesFromVis(newPosition);

    expect(graph.getNodes()).toEqual([{ 
      id: 1,
      label: 'node1',
      y: 333,
      x: 222
    }, { 
      id: 2,
      label: 'node2',
      y: 3,
      x: 10
    }, { 
      id: 3,
      label: 'node3',
      y: 122,
      x: 895
    }])
  });
});