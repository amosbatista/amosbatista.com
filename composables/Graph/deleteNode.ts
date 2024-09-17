import type { IVisNode } from "~/vis/IVis";

export const deleteNode = (nodeList: Ref<IVisNode[]>, id: number) => {
  const toDel = nodeList.value.findIndex( node => (node.id === id));

  nodeList.value.splice(toDel);
}