import type { IGraphNodeType } from "./INodeType";

export const NodesTypes = {
  type1: {
    margin: 2,
    color: "#444444",
    font: {
      color: "#ffffff",
    },
    shape: 'box',
    shapeProperties: {
      borderDashes: false,
    },
    borderWidth: 1
  } as IGraphNodeType,
  type2: {
    margin: 4,
    color: "#201050",
    font: {
      color: "#ffffff",
    },
    shapeProperties: {
      borderDashes: false,
    },
    shape: 'box',
    borderWidth: 1
  } as IGraphNodeType,
  type3: {
    margin: 4,
    color: "#194525",
    font: {
      color: "#ffffff",
      bold: true
    },
    shape: 'box',
    shapeProperties: {
      borderDashes: false,
    },
    borderWidth: 1
  } as IGraphNodeType,
  type4: {
    margin: 8,
    color: "#096619",
    font: {
      bold: true,
      color: "#ffffff",
    },
    shape: 'box',
    shapeProperties: {
      borderDashes: false,
    },
    borderWidth: 3
  } as IGraphNodeType,
  type5: {
    margin: 8,
    color: "#a00010",
    font: {
      bold: true,
      color: "#ffffff",
    },
    shape: 'box',
    shapeProperties: {
      borderDashes: false,
    },
    borderWidth: 1
  } as IGraphNodeType,
  type6: {
    margin: 6,
    color: "#e0e079",
    font: {
      bold: true,
      color: "#000000",
    },
    shape: 'box',
    shapeProperties: {
      borderDashes: true,
    },
    borderWidth: 5
  } as IGraphNodeType,
}