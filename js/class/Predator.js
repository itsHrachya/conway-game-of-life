class Predator extends Default {
  constructor(x, y) {
    super(x, y)
    this.energy = 14
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
    super.mul(3, Predator, predatorArr, 12)
  }

  move() {
    super.move()
  }

  eat(cell, array) {
    super.eat(2, grassEaterArr)
  }

  die(array) {
    super.die(predatorArr)
  }
}
