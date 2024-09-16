import type { IVisNode } from "~/vis/IVis";

export const getNodeById = (nodeList: Ref<IVisNode[]>, id: number): IVisNode | undefined => {
  debugger
  return nodeList.value.find(node => (node.id === id));
}