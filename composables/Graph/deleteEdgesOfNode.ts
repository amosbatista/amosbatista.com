import type { IVisEdge, IVisNode } from "~/vis/IVis";

export const deleteEdgesOfNode = (edgeList: Ref<IVisEdge[]>, nodeId: number) => {
  const toDel = edgeList.value.findIndex(edge => (edge.from === nodeId || edge.to === nodeId))

  edgeList.value.splice(toDel, 1);
}