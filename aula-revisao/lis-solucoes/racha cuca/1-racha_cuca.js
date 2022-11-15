/*
  Faça uma função que verifique se um valor é perfeito ou não. Um valor é dito perfeito quando ele é 
  igual a soma dos seus divisores exceto ele próprio. (Ex: 6 é perfeito, 6 = 1 + 2 + 3, que são seus divisores). 
  A função deve retornar um valor booleano.
*/

const verificarNumeroPerfeito = (numero) => {
  const divisores = [];

  for (let i = 0; i < numero; i++) {
    if (numero % i === 0) {
      divisores.push(i);
    }
  }

  const soma = divisores.reduce((sum, el) => (sum += el));

  if (soma === numero) {
    return true;
  } else {
    return false;
  }
};

console.log(verificarNumeroPerfeito(6));
console.log(verificarNumeroPerfeito(7));
console.log(verificarNumeroPerfeito(28));
