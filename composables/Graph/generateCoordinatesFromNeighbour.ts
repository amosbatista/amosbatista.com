import type { IVisNode, IVisNodePosition } from "~/vis/IVis";

export const generateCoordinatesFromNeighbour = (neighbour: IVisNode): IVisNodePosition => {

  if (!neighbour) {
    return {
      x: 20,
      y: 20
    }
  }
  return {
    x: neighbour.x + 20,
    y: neighbour.y + 20
  }
}