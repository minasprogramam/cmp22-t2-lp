/*
Crie uma função que recebe 3 notas de um aluno por parâmetro e uma letra. 
Se a letra for A o procedimento calcula a média aritmética das notas do aluno, 
se for P, a sua média ponderada (pesos: 5, 3 e 2) e se for H, a sua média harmônica.
*/

const calcularMediaAritmetica = (n1, n2, n3) => {
  return (n1 + n2 + n3) / 3;
};

const calcularMediaPonderada = (n1, n2, n3) => {
  return (n1 * 5 + n2 * 3 + n3 * 2) / (5 * 3 * 2);
};

const calcularMediaHarmonica = (n1, n2, n3) => {
  return 3 / (1 / n1 + 1 / n2 + 1 / n3);
};

const medias = (n1, n2, n3, tipo) => {
  if (tipo === "A") {
    return calcularMediaAritmetica(n1, n2, n3);
  } else if (tipo === "H") {
    return calcularMediaHarmonica(n1, n2, n3);
  } else if (tipo === "P") {
    return calcularMediaPonderada(n1, n2, n3);
  }
};

console.log(medias(15, 10, 6, "H"));
