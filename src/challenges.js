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


// Desafio 7            
function catAndMouse(mouse,cat1,cat2) {
  distance1 = cat1 - mouse;
  distance2= cat2 - mouse;
  if (distance1 < 0){
    distance1 = distance1 * (-1)
  } else if (distance2 < 0){
    distance2 = distance2 * (-1)}
   if (distance2 < distance1){
    return 'cat2'
  } else if (distance1<distance2){
    return 'cat1'
  }else if (distance1===distance2){
  return 'os gatos trombam e o rato foge'}
  
}


// Desafio 8
function fizzBuzz(array) {
  let result = [];
  for (let index in array){
  if (array[index]%3===0 && array[index]%5===0){result.push('fizzBuzz')}
  else if (array[index]%3===0){result.push('fizz')}
  else if (array[index]%5===0){result.push('buzz')}
  else if (array[index]%3!==0 && array[index]%5!==0){result.push('bug!')}}
  return result
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
