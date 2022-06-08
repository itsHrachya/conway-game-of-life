class Human extends Default {
  constructor(x, y) {
    super(x, y)
    this.energy = 12
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
    super.mul(4, Human, humanArr, 12)
  }

  move() {
    super.move()
  }

  eat(cell, array) {
    super.eat(3, predatorArr)
  }

  die(array) {
    super.die(humanArr)
  }
}
