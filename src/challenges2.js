// Desafio 11
function generatePhoneNumber(array, prefixo, num1, num2) {
  for (let index of array) {
    let check = 0;
    for (let index2 of array) {
      if (index === index2) { check += 1; }
    }
    if (check >= 3) { return 'não é possível gerar um número de telefone com esses valores'; }
  }
  if (array.length !== 11) { return 'Array com tamanho incorreto.'; }
  for (let index of array) {
    if (index < 0 || index > 9) { return 'não é possível gerar um número de telefone com esses valores'; }
  }
  array = array.join(''); prefixo = array.substring(0, 2); num1 = array.substring(2, 7); num2 = array.substring(7, 11); return `(${prefixo})` + ` ${num1}-${num2}`;
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  if (
    lineA > lineB + lineC
    || lineB > lineA + lineC
    || lineB < Math.abs(lineA - lineC)
    || lineC < Math.abs(lineB - lineA)
  ) {
    return false;
  }
  return true;
}

// Desafio 13
function hydrate(string) {
  const replaced = string.replace(/\D/g, '');
  let number = replaced;
  number = number.split('');
  let soma = 0;
  if (number.length !== 1) {
    for (let index of number) {
      soma += Number(index);
    }
    return `${soma} copos de água`;
  }
  for (let index of number) {
    soma += Number(index);
  }
  return `${soma} copo de água`;
}

module.exports = {
  generatePhoneNumber,
  hydrate,
  triangleCheck,
};
