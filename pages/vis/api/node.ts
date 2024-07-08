import type { INode } from "./INode";
import type { IVisNodePosiion } from "./IVisNodePosition";

class Node {
  private node: INode;

  constructor (node: INode) {
    this.node = node;
  }

  updateFromVis(update: IVisNodePosiion) {
    this.node.x = update.x;
    this.node.y = update.y;
  }

  get (): INode {
    return this.node;
  }
}

export default Node