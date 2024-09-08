import type { IVis, IVisEdge, IVisNode, IVisNodesPosition } from "./IVis";

export class Graph {
  private edges: IVisEdge[];
  private nodes: IVisNode[];

  constructor (edges?: IVisEdge[], nodes?: IVisNode[]) {
    this.edges = edges || [];
    this.nodes = nodes || [{
      id: 0,
      description: '',
      label: '',
      x: 0,
      y: 0
    }];
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
    const newNodeId = newNode.id === 0 ? this.getLastNodeId() + 1 : newNode.id;
    this.nodes.push({
      ...newNode,
      id: newNodeId
    });
    this.edges.push({
      from: newNodeId,
      to: nodeToLink,
      id: undefined,
      value: 1
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

  getLastNodeId(): number {
    return this.nodes
      .toSorted( (node1, node2) => ( node1.id - node2.id))
      [this.nodes.length - 1].id
  }
}