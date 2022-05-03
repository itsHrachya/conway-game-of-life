function generate(matLen, gr, grEat, pr, hm, al) {
  const matrix = []
  for (let i = 0; i < matLen; i++) {
    matrix[i] = []
    for (let j = 0; j < matLen; j++) {
      matrix[i][j] = 0;
    }
  }

  function returnIndex(charatcher, index) {
    for (let i = 0; i < charatcher; i++) {
      const x = Math.floor(Math.random() * matLen)
      const y = Math.floor(Math.random() * matLen)
      if (matrix[y][x] == 0) {
        matrix[y][x] = index
      }
    }
  }

  returnIndex(gr, 1)
  returnIndex(grEat, 2)
  returnIndex(pr, 3)
  returnIndex(hm, 4)
  returnIndex(al, 5)

  return matrix
}

const matrix = generate(20, 45, 20, 15, 12, 6)

const side = 35

const grassArr = []
const grassEaterArr = []
const predatorArr = []
const humanArr = []
const alienArr = []

function setup() {
  frameRate(4)
  createCanvas(matrix[0].length * side, matrix.length * side)

  for (let y = 0; y < matrix.length; y++) {
    for (let x = 0; x < matrix[y].length; x++) {
      const findCharatcher = matrix[y][x] === 1 ? grassArr.push(new Grass(x, y)) :
        matrix[y][x] === 2 ? grassEaterArr.push(new GrassEater(x, y)) :
          matrix[y][x] === 3 ? predatorArr.push(new Predator(x, y)) :
            matrix[y][x] === 4 ? humanArr.push(new Human(x, y)) :
              matrix[y][x] === 5 ? alienArr.push(new Alien(x, y)) :
                false
    }
  }
}

function draw() {
  for (let y = 0; y < matrix.length; y++) {
    for (let x = 0; x < matrix[y].length; x++) {
      const fillIt = matrix[y][x] === 0 ? fill('white') :
        matrix[y][x] === 1 ? fill('green') :
          matrix[y][x] === 2 ? fill('yellow') :
            matrix[y][x] === 3 ? fill('blue') :
              matrix[y][x] === 4 ? fill('red') :
                matrix[y][x] === 5 ? fill('purple') :
                  false

      rect(x * side, y * side, side, side)
    }
  }
  
  for (let i in grassArr) {
    grassArr[i].mul()
  }

  for (let i in grassEaterArr) {
    grassEaterArr[i].eat()
  }

  for (let i in predatorArr) {
    predatorArr[i].eat()
  }

  for (let i in humanArr) {
    humanArr[i].eat()
  }

  for (let i in alienArr) {
    alienArr[i].eat()
  }
}
