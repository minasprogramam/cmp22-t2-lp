/*As estruturas de Repetição são usados ​​em JavaScript para executar tarefas repetidas
com base em uma condição. As condições são comparações que retornam true ou false.
Uma repetição(loop) continuará em execução até que a condição definida retorne false.

O for consiste em três expressões:

inicializador(o famoso i)- Essa expressão é executada antes da execução do primeiro loop
e geralmente é usada para criar um contador.
condição- Esta expressão é verificada cada vez antes da execução do loop.
Se for avaliado como true o loop(repetição) será executada. Se for avaliado como false, o loop será interrompido.
E se essa expressão for omitida, ela será avaliada automaticamente como true.
final da expressão- Esta expressão é executada após cada iteração do loop. 
Isso geralmente é usado para incrementar um contador, mas pode ser usado para decrementá-lo(exemplo: i--). */


for (let i = 0; i < 9; i++) {
    console.log(i);
  }
  
  // Output:
  // 0
  // 1
  // 2
  // 3
  // 4
  // 5
  // 6
  // 7
  // 8



  const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//             0  1  2  3  4  5  6  7  8  9

//num.length = 9

//anatomia do for => contador; comparador; incrementador

 for(let i = 0; i < num.length; i++){
 
   /* i mostra a POSIÇÃO que foi no caso comparada com o número da lista total.


    i = 0 E O QUE CONTÉM DE VALOR NESTA POSICÃO? PARA OLHAR O VALOR DA POSIÇÃO ->
            1. o nome da lista de acordo com o que está no FOR => num 
            2. Para mostrar o valor de acordo com a posição, precisamos indicar a posição atual. 
                num[i]; */

    const tabuada = num[i] * 2;

    console.log(tabuada)
}  

/*i = 0
i é menor que num.length ? num.length = 9
ele é menor. Então, adiciona mais um mais.

i = 1;

i é menor que num.length? num.length = 9;
ele é menor. Então, adiciona mais um.

i = 2
i é menor que num.length? num.length  = 9;
ele é menor. Então, adiciona mais um.

i = 3
i é menor que num.length? num.length  = 9;
ele é menor. Então, adiciona mais um.

i = 4
i é menor que num.length? num.length  = 9;
ele é menor. Então, adiciona mais um.


i = 5
i é menor que num.length? num.length  = 9;
ele é menor. Então, adiciona mais um.

i = 6
i é menor que num.length? num.length  = 9;
ele é menor. Então, adiciona mais um.


i = 7
i é menor que num.length? num.length  = 9;
ele é menor. Então, adiciona mais um.


i = 8
i é menor que num.length? num.length  = 9;
ele é menor. Então, adiciona mais um.

i = 9
i é menor que num.length? num.length  = 9;
ele é igual. Então, finaliza o loop.

i => 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 
que é a quantidade de posições da lista. */


//Fonte: https://www.freecodecamp.org/news/javascript-loops-explained-for-loop-for/


