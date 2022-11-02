/*
  Parabéns, você evoluiu e depois de empreender em um restaurante, agora você
  tem um banco e gerencia ele. 
*/
//1. Crie um programa que cadastra pessoas (nome, cpf, idade, saldo, confiabilidade(de 0 a 10));
//   Crie um Array Clientes e crie uma função que adiciona clientes.

const clientes = [];
// function adicionarCliente (nome, cpf, idade, saldo, confiabilidade) {}
const adicionarCliente = (nome, cpf, idade, saldo, confiabilidade) => {
  const novoCliente = {
    nome: nome,
    cpf: cpf,
    idade: idade,
    saldo: saldo,
    confiabilidade: confiabilidade,
  };

  console.log(`Cliente ${nome} adicionada com sucesso!`);
  clientes.push(novoCliente);
};

adicionarCliente("Elis", 123, 22, 90530593, 10);
adicionarCliente("Dyh", 321, 30, 2, 1);
adicionarCliente("Lis", 999, 28, 20, 1);
adicionarCliente("Miriam", 654, 31, 4777, 4);
adicionarCliente("Zeca", 666, 4, 7468934689789469, 10);

//2. Crie uma função que verifica pelo cpf se a pessoa é sua cliente.
const verificaCPF = (cpf) => {
  // const existe = clientes.find((cliente) => cliente.cpf === cpf);
  // const existe = clientes.findIndex((cliente) => cliente.cpf === cpf);

  // if (existe) {
  //   console.log("É nossa cliente");
  // } else {
  //   console.log("Cliente não existe");
  // }
  for (let i = 0; i < clientes.length; i++) {
    if (cpf === clientes[i].cpf) {
      console.log(`${clientes[i].nome} é nossa cliente.`);
      return;
    }
  }
  console.log("Cliente não existe");
};
verificaCPF(999);

//3. Crie uma função que debita o saldo da pessoa caso ela saque um valor.
const debitar = (cpf, valor) => {
  for (let i = 0; i < clientes.length; i++) {
    if (cpf === clientes[i].cpf) {
      const novoSaldo = clientes[i].saldo - valor;

      clientes[i].saldo = novoSaldo;

      console.log(
        `O saldo de ${clientes[i].nome} foi debitado\nSaldo atual: R$${clientes[i].saldo}`
      );
    }
  }
};

console.log(clientes);
debitar(321, 2);
console.log(clientes);
