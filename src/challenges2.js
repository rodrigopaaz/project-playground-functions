// Desafio 11
function generatePhoneNumber(array) {
  let prefixo = ''
  let num1 = ''
  let num2 = ''

  
   for(let index2 in array){
  let check = 0
  let check2 = 0
    check = array[index2]
    for (let index3 in array){
    if (check === array[index3]){
      check2 += 1}
    }
    if (check2>=3){
        return 'não é possível gerar um número de telefone com esses valores'
      }
    } 
      
      if(array.length !== 11){
        return "Array com tamanho incorreto."
  }   
  
    for (let index in array){
      if (array[index]<0 || array[index]>9){return 'não é possível gerar um número de telefone com esses valores'}
    }

  
    array = array.join('')
    prefixo = array.substring(0,2)
    num1 = array.substring(2,7)
    num2 = array.substring(7,11)
     return '('+prefixo+')'+' '+num1+'-'+num2
   
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
function hydrate(string) {
  const replaced = string.replace(/\D/g, ''); 
  let number=replaced;
  number = number.split('');
  let soma = 0;
  if (number.length !== 1){
  for (index in number){
    soma = soma + Number(number[index])
  }
return soma + ' copos de água'}

for (index in number){
  soma = soma + Number(number[index])
}
return soma + ' copo de água'}



module.exports = {
  generatePhoneNumber,
  hydrate,
  triangleCheck,
};