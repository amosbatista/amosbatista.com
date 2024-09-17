import type { IVisEdge } from "~/vis/IVis";

export const updateEdge = (edgeList: Ref<IVisEdge[]>, update: IVisEdge): void => {
  edgeList.value.forEach(edge => {

    if(edge.id === update.id) {
      edge.label = update.label
    }
  })
  
} 