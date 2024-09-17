import type { IVisEdge, IVisNode } from "~/vis/IVis";

export const getEdgeByNodes = (edgeList: Ref<IVisEdge[]>, node1: IVisNode, node2: IVisNode): IVisEdge | undefined => {
  return edgeList.value.find(edge => 
    (edge.from === node1.id && edge.to === node2.id) ||
    (edge.to === node1.id && edge.from === node2.id)
  )
} 