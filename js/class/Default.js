class Default {
  constructor(x, y) {
    this.x = x
    this.y = y
  }

  getNewCoordinates() {
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

  chooseCell(character) {
    const found = []
    for (let i in this.directions) {
      const x = this.directions[i][0]
      const y = this.directions[i][1]
      if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
        if (matrix[y][x] === character) found.push(this.directions[i])
      }
    }
    return found
  }

  mul(matrixPos, className, array, energy) {
    const emptyCells = this.chooseCell(0)
    const newCell = random(emptyCells)
    if (newCell) {
      const newX = newCell[0]
      const newY = newCell[1]
      matrix[newCell[1]][newCell[0]] = matrixPos
      const newClass = new className(newCell[0], newCell[1])
      array.push(newClass)
      this.energy = energy
    }
  }

  move() {
    this.energy--
    const emptyCells = this.chooseCell(0)
    const newCell = random(emptyCells)
    if (newCell && this.energy >= 0) {
      matrix[newCell[1]][newCell[0]] = matrix[this.y][this.x]
      matrix[this.y][this.x] = 0
      this.x = newCell[0]
      this.y = newCell[1]
    } else {
      this.die()
    }
  }

  eat(cell, array) {
    const emptyCells = this.chooseCell(cell)
    const newCell = random(emptyCells)
    if (newCell) {
      this.energy++
      const newX = newCell[0]
      const newY = newCell[1]
      matrix[newY][newX] = matrix[this.y][this.x]
      matrix[this.y][this.x] = 0
      this.x = newX
      this.y = newY
      for (let i in array) {
        if (newX === array[i].x && newY === array[i].y) {
          array.splice(i, 1)
          break
        }
      }
      if (this.energy >= 15) this.mul()
    } else this.move()
  }

  die(array) {
    matrix[this.y][this.x] = 0
    for (let i in array) {
      if (this.x === array[i].x && this.y === array[i].y) {
        array.splice(i, 1)
        break
      }
    }
  }
}