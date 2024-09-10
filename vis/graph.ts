import type { IVis, IVisEdge, IVisNode, IVisNodePosition, IVisNodesPosition } from "./IVis";

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

  addNodeFromAnother(newNode: IVisNode, nodeToLink: number): IVisNode {
    const newNodeId = newNode.id === 0 ? this.generateNextId() : newNode.id;
    const newNodeCoordinates: IVisNodePosition = this.generateCoordinatesFromNeighbour(nodeToLink);

    const newNodeToPush = {
      ...newNode,
      id: newNodeId,
      x: newNodeCoordinates.x,
      y: newNodeCoordinates.y
    };
    this.nodes.push(newNodeToPush);
    this.edges.push({
      from: newNodeId,
      to: nodeToLink,
      id: undefined,
      value: 1
    });
    return newNodeToPush;
  }

  getEdges(): IVisEdge[] {
    return this.edges;
  }

  getNodes(): IVisNode[] {
    return this.nodes;
  }

  getNodeById(id: number): IVisNode | undefined{
    return this.nodes.find(node => (node.id === id));
  }

  generateNextId(): number {
    return this.getLastNodeId() + 1;
  }

  generateCoordinatesFromNeighbour(anotherNodeId: number): IVisNodePosition {
    const neighbour = this.getNodeById(anotherNodeId);

    if (!neighbour) {
      return {
        x: 20,
        y: 20
      }
    }
    return {
      x: neighbour.x + 20,
      y: neighbour.y + 20
    }
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