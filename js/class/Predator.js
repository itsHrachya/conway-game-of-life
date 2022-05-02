class Predator {
  constructor(x, y) {
    this.x = x
    this.y = y
    this.energy = 15
    this.directions = []
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
    this.getNewCoordinates()
    const found = []
    for (let i in this.directions) {
      const x = this.directions[i][0]
      const y = this.directions[i][1]
      if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
        if (matrix[y][x] == character) {
          found.push(this.directions[i])
        }
      }
    }

    return found
  }

  mul() {
    const emptyCells = this.chooseCell(0)
    const newCell = random(emptyCells)

    if (newCell) {
      const newX = newCell[0]
      const newY = newCell[1]
      matrix[newY][newX] = 3

      const newPredator = new Predator(newX, newY)
      predatorArr.push(newPredator)
      this.energy = 12
    }
  }

  move() {
    this.energy--
    const emptyCells = this.chooseCell(0)
    const newCell = random(emptyCells)
    if (newCell && this.energy >= 0) {
      const newX = newCell[0]
      const newY = newCell[1]
      matrix[newY][newX] = matrix[this.y][this.x]
      matrix[this.y][this.x] = 0
      this.x = newX
      this.y = newY
    } else {
      this.die()
    }
  }

  eat() {
    const emptyCells = this.chooseCell(2)
    const newCell = random(emptyCells)
    if (newCell) {
      this.energy++
      const newX = newCell[0]
      const newY = newCell[1]
      matrix[newY][newX] = matrix[this.y][this.x]
      matrix[this.y][this.x] = 0
      this.x = newX
      this.y = newY
      for (let i in grassEaterArr) {
        if (newX == grassEaterArr[i].x && newY == grassEaterArr[i].y) {
          grassEaterArr.splice(i, 1)
          break
        }
      }

      if (this.energy >= 15) {
        this.mul()
      }
    } else {
      this.move()
    }
  }

  die() {
    matrix[this.y][this.x] = 0
    for (let i in predatorArr) {
      if (this.x == predatorArr[i].x && this.y == predatorArr[i].y) {
        predatorArr.splice(i, 1)
        break
      }
    }
  }
}
