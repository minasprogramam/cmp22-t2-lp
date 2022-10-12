/*
  Concatenar é o ato de juntar textos 
  e/ou variáveis em uma unica string.
  Primeiro Nome
  Ultimo Nome
  Ano de Nascimento
  Cor preferida
  Hobbie
  Um sentimento

*/
const primeiroNome = "Lisandra";
const ultimoNome = "Cruz";
const anoDoNascimento = 1994;
const corPreferida = "verde";
const hobbie = "viajar";
const sentimentoAtual = "expectativa";

const anoAtual = 2022;
const idade = anoAtual - anoDoNascimento;

// Tradicional
// console.log(
//   "Eu me chamo " + primeiroNome + " " + ultimoNome + " e eu amo " + hobbie
// );

// Template String
console.log(
  `Eu me chamo ${primeiroNome} ${ultimoNome}, eu amo ${hobbie}, nasci em ${anoDoNascimento} e tenho ${idade} anos`
);
