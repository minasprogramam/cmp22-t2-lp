/*
  Uma comerciante comprou alguns produtos e quer revender com lucro de 45% se o valor 
  da compra foi menor que 20 reais. Caso contrário, o lucro será de 30%. 
  O valor deve ser passado para o programa que deverá retornar o valor da venda.
  Exemplo: 
  produto: R$ 18,00 -> 18 * 45% -> R$ 26,10
  produto: R$ 21,00 -> 21 * 30% -> R$ 27,30
*/

const valorProduto = 21;

if (valorProduto < 20) {
  console.log(`Seu produto deve ser vendido por R$ ${valorProduto * 1.45} `);
} else {
  console.log(`Seu produto deve ser vendido por R$ ${valorProduto * 1.3} `);
}
