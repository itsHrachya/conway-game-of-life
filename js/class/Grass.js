class Grass extends Default {
  constructor(x, y) {
    super(x, y)
    this.multiply = 0
    this.directions = [
      [this.x - 1, this.y - 1],
      [this.x, this.y - 1],
      [this.x + 1, this.y - 1],
      [this.x - 1, this.y],
      [this.x + 1, this.y],
      [this.x - 1, this.y + 1],
      [this.x, this.y + 1],
      [this.x + 1, this.y + 1]
    ]
  }

  mul() {
    this.multiply++
    const emptyCells = this.chooseCell(0)
    const newCell = random(emptyCells)

    if (newCell && this.multiply >= 8) {
      const newX = newCell[0]
      const newY = newCell[1]
      matrix[newY][newX] = 1

      const newGrass = new Grass(newX, newY, 1)
      grassArr.push(newGrass)
      this.multiply = 0
    }
  }
}
