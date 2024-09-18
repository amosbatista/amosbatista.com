export interface IGraphNodeType {
  color: string;
  margin: number;
  shape: 'ellipse' | 'circle' | 'database' | 'box' | 'text'
  font: {
    bold?: boolean;
    color: string;
  },
  shapeProperties: {
    borderDashes: boolean,
  },
  borderWidth: number
}

export interface IGraphNodeTypes {
  type: 'type1' | 'type2' | 'type3' | 'type4'
}