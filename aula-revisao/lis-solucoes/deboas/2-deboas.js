/*
Crie uma função que receba um número e usando laços de repetição calcule e mostre a tabuada desse número
*/

const gerarTabuada = (numero) => {
  // for (let i = 1; i <= 10; i++) {
  //   console.log(`${numero} * ${i} = ${numero * i}`);
  // }

  // let contador = 1;
  // while (contador <= 10) {
  //   console.log(`${numero} * ${contador} = ${numero * contador}`);
  //   contador += 1;
  // }

  let resultado = "";
  for (let i = 1; i <= 10; i++) {
    resultado += `${numero} * ${i} = ${numero * i}\n`;
  }
  
  return resultado;
};

console.log(gerarTabuada(5));
