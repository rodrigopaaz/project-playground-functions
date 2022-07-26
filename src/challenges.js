// Desafio 1
function compareTrue(const1, const2, const3) {
  if (
    (const1 && const2 == true) ||
    (const1 && const3 == true) ||
    (const2 && const3)
  ) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, height) {
  calcArea = (base * height) / 2;
  return calcArea;
}

// Desafio 3
function splitSentence(string) {
  string = string.split(' ');
  return string;
}

// Desafio 4
function concatName(array) {
  let lastname = array.length - 1;
  return array[lastname] + ', ' + array[0];
}

// Desafio 5
function footballPoints(wins, ties) {
  wins = wins * 3;
  let points = wins + ties;
  return points;
}

// Desafio 6
function highestCount(array) {
  let maiorResultado = array[0];
  let counter = 0;
  for (let index in array) {
    if (array[index] >= maiorResultado) {
      maiorResultado = array[index];
    }
      }
      for (let index in array) {
        if (array[index] === maiorResultado) {
          counter += 1;
    }
  }
  return counter;
}
console.log(highestCount([-2, -2, -1]));

// Desafio 7
function catAndMouse() {
  // seu código aqui
}

// Desafio 8
function fizzBuzz() {
  // seu código aqui
}

// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
}

// Desafio 10
function techList() {
  // seu código aqui
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
  techList,
};
