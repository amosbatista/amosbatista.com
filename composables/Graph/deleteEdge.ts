import type { IVisEdge } from "~/vis/IVis";

export const deleteEdge = (edgeList: Ref<IVisEdge[]>, id: string) => {
  const toDel = edgeList.value.findIndex(edge => (edge.id === id));

  edgeList.value.splice(toDel, 1);
}