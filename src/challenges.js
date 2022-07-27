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
function catAndMouse(mouse, cat1, cat2) {
  distance1 = cat1 - mouse;
  distance2 = cat2 - mouse;
  if (distance1 < 0) {
    distance1 = distance1 * -1;
  } else if (distance2 < 0) {
    distance2 = distance2 * -1;
  }
  if (distance2 < distance1) {
    return 'cat2';
  } else if (distance1 < distance2) {
    return 'cat1';
  } else if (distance1 === distance2) {
    return 'os gatos trombam e o rato foge';
  }
}

// Desafio 8
function fizzBuzz(array) {
  let result = [];
  for (let index in array) {
    if (array[index] % 3 === 0 && array[index] % 5 === 0) {
      result.push('fizzBuzz');
    } else if (array[index] % 3 === 0) {
      result.push('fizz');
    } else if (array[index] % 5 === 0) {
      result.push('buzz');
    } else if (array[index] % 3 !== 0 && array[index] % 5 !== 0) {
      result.push('bug!');
    }
  }
  return result;
}

// Desafio 9
function encode(string) {
  string = string
    .replace(/a/g, 1)
    .replace(/e/g, 2)
    .replace(/i/g, 3)
    .replace(/o/g, 4)
    .replace(/u/g, 5);
  return string;
}

function decode(string) {
  string = string
    .replace(/1/g, 'a')
    .replace(/2/g, 'e')
    .replace(/3/g, 'i')
    .replace(/4/g, 'o')
    .replace(/5/g, 'u');
  return string;
}

// Desafio 10
function techList(array, name) {
  let techs = [];
  let verify = array.length;
  if (verify === 0) {
    return 'Vazio!';
  } 
    for (let index = 0; index < 5; index += 1) {
      resultado = array[index];
      let Object = { name:name, tech:array[index] };
      techs.push(Object);
      
    }
  return techs
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
