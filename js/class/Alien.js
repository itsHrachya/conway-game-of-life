class Alien extends Default{
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
    super.mul(5, Alien, alienArr, 12)
  }

  move() {
    super.move()
  }

  eat(cell, array) {
    super.eat(4, humanArr)
  }

  die(array) {
    super.die(alienArr)
  }
}
