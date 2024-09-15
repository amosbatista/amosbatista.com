import type { IVisNode, IVisNodesPosition } from "~/vis/IVis";

export const updatedCoordinatesFromVis = (nodeList: Ref<IVisNode[]>, newPosition: IVisNodesPosition) => {
  nodeList.value.map(node => ({
    ...node,
    x: newPosition.nodes[node.id] ? newPosition.nodes[node.id].x : node.x,
    y: newPosition.nodes[node.id] ? newPosition.nodes[node.id].y : node.y
  })); 
}