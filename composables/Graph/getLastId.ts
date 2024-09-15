import type { IVisNode } from "~/vis/IVis"

export const getLastNodeId = (nodeList: Ref<IVisNode[]>) => {
  return nodeList.value
    .sort( (itemA, itemB) => (itemB.id - itemA.id))
    [nodeList.value.length - 1]
}