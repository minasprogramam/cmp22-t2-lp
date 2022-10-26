//1. Mostre todos os nomes das alunas e mantenha apenas a letra inicial maiúscula.

for(let i = 0; i < alunas.length; i++){

    const tratarNome  = alunas[i].charAt().toUpperCase() + alunas[i].substring(1)
    console.log(tratarNome)

}