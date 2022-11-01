/* Você vai abrir um restaurante, crie 4 pratos para o seu restaurante
  ele deve ser criado no formato de objeto contendo os seguntes dados
  nome, descricao, quantidade em gramas, nota do chef
  em seguida adicione esses pratos em um array chamado cardapio
*/

// const prato1 = {
//   nome: "Feijoada Vegana",
//   descricao: "Feiijao delicia com cogumelos defumados",
//   quantidade: 300,
//   notaDoChef: 9,
// };

// const prato2 = {
//   nome: "Macarronada",
//   descricao: "Macarrão parafuso com delicioso molho de tomate artesanal",
//   quantidade: 250,
//   notaDoChef: 8,
// };

// const prato3 = {
//   nome: "Salada Frevo",
//   descricao: "Mix de folhas com pimentões coloridos, tempeiros e castanhas",
//   quantidade: 180,
//   notaDoChef: 9.5,
// };

// const prato4 = {
//   nome: "Not Dog",
//   descricao: "Pão com tudo",
//   quantidade: 90,
//   notaDoChef: 8,
// };

// const cardapio = [prato1, prato2, prato3, prato4];

// const prato5 = {
//   nome: "Not Burguer",
//   descricao: "Pão com tudo",
//   quantidade: 90,
//   notaDoChef: 8,
// };

// cardapio.push(prato5);

/*
  USANDO FUNÇÕES!
*/
const cardapio = [];

function adicionarPratoAoCardapio(nome, descricao, quantidade, notaDoChef) {
  const prato = {
    nome: nome,
    descricao: descricao,
    quantidade: quantidade,
    notaDoChef: notaDoChef,
  };

  cardapio.push(prato);
}

adicionarPratoAoCardapio(
  "Macarronada",
  "Macarrão parafuso com delicioso molho de tomate artesanal",
  300,
  9.5
);

adicionarPratoAoCardapio(
  "Feijoada Vegana",
  "Feiijao delicia com cogumelos defumados",
  250,
  6
);

adicionarPratoAoCardapio(
  "Salada Frevo",
  "Mix de folhas com pimentões coloridos, tempeiros e castanhas",
  200,
  10
);

adicionarPratoAoCardapio("Not Dog", "Pão com tudo", 80, 8);

/* 
  Usem o for ou o while para exibir de uma maneira agradável
 o seu cardápio para a sua cliente 
 */

function exibirCardapio() {
  console.log("####################################");
  console.log("Bem vinda ao restaurante da Lis!!!!");
  console.log("----");

  // let i = 0;
  // while (i < cardapio.length) {
  //   console.log(`Prato: ${cardapio[i].nome}\n${cardapio[i].descricao}`);
  //   console.log(
  //     cardapio[i].quantidade +
  //       " gramas de pura delicia e nota " +
  //       cardapio[i].notaDoChef +
  //       " pelo chef!"
  //   );
  //   console.log("--------------------------------");
  //   i++;
  // }

  for (let i = 0; i < cardapio.length; i++) {
    console.log(`Prato: ${cardapio[i].nome}\n${cardapio[i].descricao}`);
    console.log(
      cardapio[i].quantidade +
        " gramas de pura delicia e nota " +
        cardapio[i].notaDoChef +
        " pelo chef!"
    );
    console.log("--------------------------------");
  }
}

exibirCardapio();
