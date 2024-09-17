export interface IVis {
  edges: IVisEdge[],
  nodes: IVisNode[]
}

export interface IVisNodePosition {
  x: number;
  y: number;
}

export interface IVisNodesPosition {
  nodes: Record<number, IVisNodePosition>;
}

export interface IVisEdge {
  from: number,
  to: number,
  id?: string,
  value?: number,
  label: string
}

export interface IVisNode {
  id: number,
  label: string,
  x: number,
  y: number,
  description: string
}