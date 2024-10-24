export class GameOfLife {

  private grid: Ref<number[][]>;

  constructor (
    private rows: number,
    private cols: number,
    grid?: Ref<number[][]>
  ){
    if(grid?.value) {
      this.grid = grid;  
    }
    else {
      this.grid = ref(this.createGrid());
    }
    
  }

  private createGrid(): number[][] {
    const grid = new Array(this.rows);

    for(let row = 0; row < this.rows; row++) {
      grid[row] = new Array(this.cols).fill(0);
    }
    

    return grid
  }

  private isInsideRange(row: number, col: number): boolean {
    return row >= 0 && row < this.rows  && col >= 0 && col < this.cols
  }

  public setCell(row: number, col: number, value: number) {
    if (this.isInsideRange (row, col)) {
      this.grid.value[row][col] =value;
    }
  }

  public getCell(row: number, col: number) {
    if (this.isInsideRange (row, col)) {
      return this.grid.value[row][col];
    }
  }

  public getGrid() {
    return this.grid;
  }

  public printGrid() {
    console.log(this.grid.value.map(row => row.join(' ')).join('\n'));
  }

  private countAliveNeighbors(row: number, col: number): number {
    let count = 0;
    for(let  i = -1; i <= 1; i++) {
      for (let j = -1; j <= 1; j++ ) {
        if (i === 0 && j === 0) continue;

        const newRow = row + i;
        const newCol = col + j;

        if (this.isInsideRange(newRow, newCol)) {
          count += this.grid.value[newRow][newCol];
        }
      }
    }

    return count;
  }

  public nextGeneration () {
    const updateRange = new Array<{ row: number, col: number, value: number}>();

    for(let row = 0; row < this.rows; row++) {
      for(let col = 0; col < this.cols; col++) {
        const aliveNeighbors = this.countAliveNeighbors(row, col);
        const cell = this.grid.value[row][col];

        if (cell === 1) {
          if (aliveNeighbors < 2 || aliveNeighbors > 3) {
            updateRange.push({
              row,
              col,
              value: 0
            })
          } else {
            updateRange.push({
              row,
              col,
              value: 1
            })
          }
        } else {
          if (aliveNeighbors === 3) {
            updateRange.push({
              row,
              col,
              value: 1
            })
          }
        }
      }
    }

    updateRange.forEach(update => {
      this.grid.value[update.row][update.col] = update.value
    })

    return updateRange
  }
}