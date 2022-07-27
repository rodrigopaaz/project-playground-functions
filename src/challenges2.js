// Desafio 11
function generatePhoneNumber(array) {

}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  let triangleCheck = 0;
  if ((lineA > (lineB + lineC) || lineA < Math.abs(lineB-lineC))  || (lineB > (lineA+lineC) || lineB < Math.abs(lineA-lineC)) || (lineC > (lineA+lineB) || lineC < Math.abs(lineB-lineA))){
    return false
  }
   return true
}


// Desafio 13
function hydrate() {
  // String recebida:
  '1 cerveja'

// String retornada:
  '1 copo de água'
// String recebida:
  '1 cachaça, 5 cervejas e 1 copo de vinho'

// String retornada:
  '7 copos de água'
// String recebida:
  '1 cachaça, 5 cervejas e 1 copo de vinho'

// String retornada:
  '7 copos de água'
}

module.exports = {
  generatePhoneNumber,
  hydrate,
  triangleCheck,
};
