/*
  Crie uma função que leia três números, verifique e mostre o maior deles.
*/

const verificarMaiorNumero = (n1, n2, n3) => {
  if (n1 > n2 && n1 > n3) {
    return `${n1} é o maior número`;
  } else if (n2 > n1 && n2 > n3) {
    return `${n2} é o maior número`;
  } else if (n3 > n2 && n3 > n1) {
    return `${n3} é o maior número`;
  }
  
  // const numeros = [n1, n2, n3];
  // const numerosOrdenados = numeros.sort();
  // return numerosOrdenados[numeros.length - 1];
};

console.log(verificarMaiorNumero(53, 5, 2));
