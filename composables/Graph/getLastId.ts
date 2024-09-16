import type { IVisNode } from "~/vis/IVis"

export const getLastNodeId = (nodeList: Ref<IVisNode[]>) => {
  const node = nodeList.value
    .sort( (itemA, itemB) => (itemA.id - itemB.id))
    [nodeList.value.length - 1]

  return {
    ...node
  }
}