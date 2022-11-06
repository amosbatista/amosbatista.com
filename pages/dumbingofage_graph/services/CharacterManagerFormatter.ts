import { Nodes, Edges } from './CharacterManagerClass';

interface Processed {
  nodes:  Array<Nodes>,
  edges:  Array<Edges>
}
class CharacterManagerFormatter {
  constructor (
    private nodes = new Array<Nodes>(),
    private edges = new Array<Edges>(),
  )  {
    this.nodes = this.removeLabelIfHaveImage(
      this.setPhysicsNodes(this.nodes)
    );
  }
  
  filterByMininalValue(minimal: number): Processed {
    const filteredEdges = this.edges.filter( edge => {
      return edge.value > minimal;
    });
    return {
      nodes: this.nodes.filter(node => {
        return filteredEdges.find( edge => {
          return edge.from == node.id || edge.to == node.id
        })
      }),
      edges: filteredEdges
    }
  }

  removeLabelIfHaveImage(nodes: Nodes[]): Nodes[] {
    return nodes.map(node => {
      return {
        ...node,
        "label": node.image ? "" : node.label
      }
    })
  }
  
  setPhysicsNodes(nodes: Nodes[]): Nodes[] {
    return nodes.map(node => {
      return {
        ...node,
        "physics":false,
        "fixed":{"x":false,"y":false}
      }
    })
  }
  
}

export {
  CharacterManagerFormatter
}