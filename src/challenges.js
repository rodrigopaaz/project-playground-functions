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
  calcArea = base * height /2
  return calcArea
}

// Desafio 3
function splitSentence(string) {
  string = (string.split(' '));
  return string
}

// Desafio 4
function concatName() {
  // seu código aqui
}

// Desafio 5
function footballPoints() {
  // seu código aqui
}

// Desafio 6
function highestCount() {
  // seu código aqui
}

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
