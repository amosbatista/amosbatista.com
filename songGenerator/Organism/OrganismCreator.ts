import type { GameOfLife } from "../gameOfLife";

export interface OrganismPredef {
  signature: string
  cellOff?: string,
  cellOn?: string
  lineBreak?: '\n'
}

export interface OrganismDelimited extends OrganismPredef {
  lines: string[]
}




export interface Dimension {
  width: number,
  heigth: number
}
export interface Coordinate {
  x: number,
  y: number
}

export interface OrganismCreated {
  organism: OrganismDelimited,
  dimensions: Dimension
}




export class OrganismCreator {

  BASE_CELL_OFF = '-';
  BASE_CELL_ON = 'o';
  BASE_LINE_SPLIT = '\n';

  constructor(
    private game: GameOfLife,
    private valueToSet: number,
    private valueToUnset: number = 0
  ) {

  }


  CreateOrganism(organism: OrganismPredef): OrganismCreated {
    const digested: OrganismDelimited = {
      ...organism,
      lines: this.SeparateSignatureLine(organism)
    }

    return {
      organism: digested,
      dimensions: this.DefineOrganismDimensions(digested)
    }
  }

  DefineOrganismDimensions(organism: OrganismDelimited): Dimension {
    return {
      width: this.DefineOrganismWidth(organism),
      heigth: this.DefineOrganismHeigth(organism)
    }
  }

  DefineOrganismHeigth(organism: OrganismDelimited): number {
    return organism.lines.length
  }

  DefineOrganismWidth(organism: OrganismDelimited): number {
    return organism.lines.reduce( (limit, actual) => {
      const amtChars = actual.length;
      
      return amtChars > limit ? amtChars : limit
    }, 0)
  }

  SeparateSignatureLine(organism: OrganismPredef): string[] {
    return this.CleanSignatureArray(
      organism.signature.split(organism.lineBreak || this.BASE_LINE_SPLIT)
    )
  }

  CleanSignatureArray(signaturePostSplit: string[]): string[]{
    return signaturePostSplit.map( line => line.trim()).filter(line => line !== '')
  }
  

  SetRandomPointThatFitDimension(dimension: Dimension): Coordinate {
    const gameDimension = this.game.getLimits();
    
    return {
      x: Math.floor(Math.random() * (gameDimension.rows - dimension.width)),
      y: Math.floor(Math.random() * (gameDimension.cols - dimension.heigth)),
    }
  }

  InsertCreatedIntoGame(created: OrganismCreated, anchor: Coordinate) {
    created.organism.lines.forEach( (line, lineIndex) => {
      line.split('').forEach( (cell, cellIndex) => {

        if( cell === (created.organism.cellOff || this.BASE_CELL_OFF) ) {
          this.game.setCell(
            anchor.y + lineIndex,
            anchor.x + cellIndex,
            this.valueToUnset
          )

          return;
        }

        this.game.setCell(
          anchor.y + lineIndex,
          anchor.x + cellIndex,
          this.valueToSet
        )
      })
    })
  }

  GenerateFromOrganism(organism: OrganismPredef) {
    const created = this.CreateOrganism(organism)
    const anchor = this.SetRandomPointThatFitDimension(created.dimensions)

    this.InsertCreatedIntoGame(created, anchor)
  }




}