/*
  Faça um função para calcular n! (Fatorial de n), sendo que o valor inteiro de n é fornecido pelo usuário. 
  Sabe-se que: N! = 1 * 2 * 3 * … (n – 1) * n 
  0! = 1, por definição;
*/

const calcularFatorial = (n) => {
  let resultado = 1;
  if (n === 0) {
    return resultado;
  } else {
    for (let i = 1; i <= n; i++) {
      resultado = resultado + i;
    }
  }
  return resultado;
};

console.log(calcularFatorial(5));
