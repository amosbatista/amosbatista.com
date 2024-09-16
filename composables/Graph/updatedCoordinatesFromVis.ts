import type { IVisNode, IVisNodesPosition } from "~/vis/IVis";

export const updatedCoordinatesFromVis = (nodeList: Ref<IVisNode[]>, newPosition: IVisNodesPosition): void => {
  nodeList.value.forEach( (node: IVisNode) => {
    node.x = newPosition.nodes[node.id] ? newPosition.nodes[node.id].x : node.x;
    node.y = newPosition.nodes[node.id] ? newPosition.nodes[node.id].y : node.y;
  });
}