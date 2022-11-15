/*
  Crie uma função que faça 5 perguntas sobre um crime para uma pessoa. 
  As perguntas são:
    * Telefonou para a vítima? 
    * Esteve no local do crime? 
    * Mora perto da vítima? 
    * Devia para a vítima?
    * Já trabalhou com a vítima?
  
  O programa deve no final emitir uma classificação sobre a participação da pessoa no crime. Se a pessoa responder positivamente a:
    2 questões, ela deve ser classificada como Suspeita
    3 ou 4 questões, ela deve ser classificada como Cúmplice
    5 questões, ela deve ser classificada como como Assassina
    Caso contrário, ele será classificado como Inocente
*/

const investigarCrime = (telefonou, local, moraPerto, devia, trabalhou) => {
  const respostas = [telefonou, local, moraPerto, devia, trabalhou];
  let respostasPositivas = 0;

  for (let i = 0; i < respostas.length; i++) {
    if (respostas[i] === "sim") respostasPositivas += 1;
  }

  if (respostasPositivas === 2) {
    return "Suspeita!";
  } else if (respostasPositivas >= 3 && respostasPositivas <= 4) {
    return "Cúmplice!";
  } else if (respostasPositivas === 5) {
    return "Assassina!";
  } else {
    return "Inocente!";
  }
};

console.log(investigarCrime("não", "não", "não", "não", "não"));
console.log(investigarCrime("sim", "não", "não", "não", "não"));
console.log(investigarCrime("sim", "sim", "não", "não", "não"));
console.log(investigarCrime("sim", "sim", "sim", "não", "não"));
console.log(investigarCrime("sim", "sim", "sim", "sim", "não"));
console.log(investigarCrime("sim", "sim", "sim", "sim", "sim"));
