class GrassEater extends Default {
  constructor(x, y) {
    super(x, y)
    this.energy = 16
    this.directions = []
  }

  getNewCoordinates() {
    super.getNewCoordinates()
  }

  chooseCell(character) {
    this.getNewCoordinates()
    return super.chooseCell(character)
  }

  mul(matrixPos, className, array, energy) {
    super.mul(2, GrassEater, grassEaterArr, 8)
  }

  move() {
    super.move()
  }

  eat(cell, array) {
    super.eat(1, grassArr)
  }

  die(array) {
    super.die(grassEaterArr)
  }
}
