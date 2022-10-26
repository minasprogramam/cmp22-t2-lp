/*
  Crie um programa que receba 2 números, calcule a soma deles e em seguida 
  verifique se essa soma é maior que 100: 
    Caso seja maior que 100, retorne "Esse número é maior que 100"
    Caso seja igual a 100, retorne "Bingo! Deu 100!"
    Caso seja menor que 100, retorne "Esse número é menor que 100"
*/

const numero1 = 9;
const numero2 = 100;
const soma = numero1 + numero2;

if (soma === 100) {
  console.log("Bingo! Deu 100!");
} else if (soma > 100) {
  console.log("Esse número é maior que 100");
} else {
  console.log("Esse número é menor que 100");
}
