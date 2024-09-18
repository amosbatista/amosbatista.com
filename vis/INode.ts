import type { IGraphNodeTypes } from "./INodeType";

export interface INode {
  id: number;
  name: string;
  x: number;
  y: number;
  type: IGraphNodeTypes
}