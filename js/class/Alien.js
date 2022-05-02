class Alien {
  constructor(x, y) {
    this.x = x
    this.y = y
    this.energy = 20
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
      matrix[newY][newX] = 5

      const newAlien = new Alien(newX, newY)
      predatorArr.push(newAlien)
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
      matrix[newY][newX] = matrix[this.y][this.x] ///kam 2 tiv@
      matrix[this.y][this.x] = 0
      this.x = newX
      this.y = newY
    } else {
      this.die()
    }
  }

  eat() {
    const emptyCells = this.chooseCell(4)
    const newCell = random(emptyCells)
    if (newCell) {
      this.energy++
      const newX = newCell[0]
      const newY = newCell[1]
      matrix[newY][newX] = matrix[this.y][this.x] ///kam 2 tiv@
      matrix[this.y][this.x] = 0
      this.x = newX
      this.y = newY
      for (let i in humanArr) {
        if (newX == humanArr[i].x && newY == humanArr[i].y) {
          humanArr.splice(i, 1)
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
    for (let i in alienArr) {
      if (this.x == alienArr[i].x && this.y == alienArr[i].y) {
        alienArr.splice(i, 1)
        break
      }
    }
  }
}
