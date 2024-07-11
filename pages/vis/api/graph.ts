import type { IVis, IVisEdge, IVisNode, IVisNodesPosition } from "./IVis";

export class Graph {
  private edges: IVisEdge[];
  private nodes: IVisNode[];

  constructor (edges: IVisEdge[], nodes: IVisNode[]) {
    this.edges = edges;
    this.nodes = nodes;
  }

  update(newEdges?: IVisEdge[], newNodes?: IVisNode[]) {
    if (newEdges) { this.edges = newEdges; }

    if(newNodes) { this.nodes = newNodes; }
  }

  updatedCoordinatesFromVis(newPosition: IVisNodesPosition) {
    this.update(undefined, this.nodes.map(node => ({
      ...node,
      x: newPosition.nodes[node.id] ? newPosition.nodes[node.id].x : node.x,
      y: newPosition.nodes[node.id] ? newPosition.nodes[node.id].y : node.y
    }))); 
  }

  addNodeFromAnother(newNode: IVisNode, nodeToLink: number) {
    this.nodes.push(newNode);
    this.edges.push({
      from: nodeToLink,
      to: newNode.id
    })
  }

  getEdges(): IVisEdge[] {
    return this.edges;
  }

  getNodes(): IVisNode[] {
    return this.nodes;
  }

  get(): IVis {
    return {
      edges: this.getEdges(),
      nodes: this.getNodes()
    }
  }

  toString(): string {
    return JSON.stringify(this.get());
  }
}