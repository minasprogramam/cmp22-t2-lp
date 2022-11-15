/*
Crie uma função que recebe por parâmetro o tempo de duração 
expressa em segundos e retorna esse tempo em horas e minutos.
*/

const calculaTempo = (tempoEmSegundos) => {
  const tempoEmMinutos = tempoEmSegundos / 60;
  const tempoEmHoras = tempoEmMinutos / 60;

  console.log(
    `${tempoEmSegundos} segundos é equivalente a ${tempoEmMinutos} minutos ou ${tempoEmHoras} horas`
  );
};

calculaTempo(86400);
calculaTempo(43200);
