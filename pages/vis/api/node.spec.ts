import type { IVisNodePosiion } from "./IVisNodePosition";
import Node from "./node";

describe ('nodes', () => {

  it('deve receber um marcador de posição e atualizar os nós', () => {
    const no1 = new Node({ 
      id: 1,
      name: 'node1',
      y: 2,
      x: 9
    });

    const updatevalue: IVisNodePosiion = {
      x: 666,
      y: 666
    };
    no1.updateFromVis(updatevalue);

    expect(no1.get().x).toBe(666);
    expect(no1.get().y).toBe(666);
  })
});