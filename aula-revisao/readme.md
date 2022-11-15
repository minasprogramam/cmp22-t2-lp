## [2022.2 Minas] Revisão de Lógica de Programação

---

<center>
  <img src="https://thumbs.gfycat.com/PlayfulSoftAmphibian-size_restricted.gif" alt="drawing" width="300"/>
</center>

---

## 📚 Conteúdo

1. Javascript
2. Variáveis
3. Boas práticas de nomeclatura
4. Operadores aritméticos, comparação e lógico
5. Estrutura de condição
6. Estrutura de repetição
7. Objetos
8. Arrays
9. Funções

---

## 🧠 Relembrando

### Constantes e variáveis servem para armazenar valores a serem utilizados no decorrer do código.

```javascript
const umaConstante = "Aqui guardaremos um valor imultável";
let umaVariavel = "Aqui guardaremos um valor multável";
```

### Os operadores aritméticos são os conhecidos por nós na matemática.

```javascript
const soma = 21 + 21;
const subtracao = 21 - 21;
const multiplicacao = 21 * 21;
const divisao = 21 / 21;
```

Além dos mais comuns cidatos acima existe também o módulo da divisão que consiste no resto da divisão de dois números.

```javascript
const moduloDaDivisão = 21 % 21;
```

### Operadores de comparação e lógico

```javascript
// Comparação
const estritamenteIgual = 21 === 21;
const estritamenteDiferente = 21 !== 21;
const maiorQue = 21 > 21;
const maiorOuIgualQue = 21 >= 21;
const menorQue = 21 < 21;
const menorOuIgualQue = 21 <= 21;
// Lógicos
const and_e = estritamenteIgual && maiorQue;
const or_ou = maiorQue || estritamenteDiferente;
const not_nao = !estritamenteDiferente;
```

### Estrutura de Condicão

```javascript
  if(condicao) {
    // faz algo
  } else if (outra condicao) {
    // faz outra coisa
  } else {
    // se nenhuma das condições forem atendidas
    // faça o que tiver aqui!
  }
```

### Estrutura de Repetição

```javascript
for (let i = 0; i < 10; i++) {
  console.log(i);
  // esse trecho de código será executado enquanto i for
  // menor que dez e a cada vez que rodar
  // i será incrementado com +1
}
```

```javascript
const contador = 0;
while (contador < 10) {
  console.log(contador);
  // esse trecho de código será executado enquanto
  // o contador for menor que 10. Se não tivermos cuidado
  // poderemos cair em um loop infinito. Logo, dentro desse while
  // precisamos incrementar o contador.
  contador += 1;
}
```

### Objetos

Os objetos são uma estrutura de dados onde podemos armazenar uma coleção de propriedades, contendo assim chave e valor.

```javascript
const meuObjeto = { nome: "Lisandra Cruz", apelido: "Lis", idade: 28 };
```

### Arrays

O array é uma estrutura que serve para armazenar e organizar os dados.

```javascript
const numeros = [1, 2, 3, 4, 5, 6, 7, 8];
const vogais = ["a", "e", "i", "o", "u"];
const pessoas = [
  { nome: "Lisandra Cruz", apelido: "Lis", idade: 28 },
  { nome: "Andréa Azevedo", apelido: "Deia", idade: 52 },
  { nome: "Dandara Lima", apelido: "Dandinha", idade: 5 },
];
```

### Funções

Criar função é o ato de encapsular trechos de código que podem ser invocados ou chamados em outras partes do código, fortalecendoa assim a reutilização. Podemos criar funções de 2 maneiras:

```javascript
// Através do function
function minhaFuncao() {
  // faz alguma coisa
}

//através de arrow function
const minhaFuncao = () => {
  // faz alguma coisa
};
```

Perceba que as funções podem receber parametros. Os parametros são os dados necessários para sua execução. Os paramentros devem ser passados dentro do parentese. Por exemplo:

```javascript
// Através do function
function soma(n1, n2) {
  return n1 + n2;
}

//através de arrow function
const soma = (n1, n2) => {
  return n1 + n2;
};
```

---

## 🫂 Revisando na prática

Divididas em trios, vocês devem fazer um fork desse repositório, responder as questões a seguir e em seguida subir no GitHub.

> A ideia é aprender através da revisão, então conversem e expliquem suas ideias umas as outras.

&nbsp;

`Javascript, variáveis, boas práticas de nomeclaturas e funções estão presentes em todas as questões. Por isso não estão descritas em conteúdos`

&nbsp;

### 👌🏿 Deboas

1. Crie uma função que recebe por parâmetro o tempo de duração expressa em segundos e retorna esse tempo em horas e minutos.

   > conteúdo: operadores aritméticos

2. Crie uma função que receba um número e usando laços de repetição calcule e mostre a tabuada desse número
   > conteúdo: operadores aritméticos e estrutura de repetição

&nbsp;

### 🤙🏿 Se organizar direitinho sai..

1. Crie uma função que receba três números, verifique e mostre o maior deles.

   > conteúdo: operadores aritméticos, lógicos e estrutura condicional

2. Crie uma função que faça 5 perguntas sobre um crime para uma pessoa. As perguntas são:

   ```
   * Telefonou para a vítima? (responda sim ou não)
   * Esteve no local do crime? (responda sim ou não)
   * Mora perto da vítima? (responda sim ou não)
   * Devia para a vítima? (responda sim ou não)
   * Já trabalhou com a vítima? (responda sim ou não)
   ```

   O programa deve no final emitir uma classificação sobre a participação da pessoa no crime. Se a pessoa responder positivamente a:

   - 2 questões, ela deve ser classificada como **Suspeita**
   - 3 ou 4 questões, ela deve ser classificada como **Cúmplice**
   - 5 questões, ela deve ser classificada como como **Assassina**
   - Caso contrário, ele será classificado como **Inocente**

   > conteúdo: operadores lógicos e estrutura condicional

&nbsp;

### 🤌🏿 Junta a galera pra rachar a cuca

1. Faça uma função que verifique se um valor é perfeito ou não. Um valor é dito perfeito quando ele é igual a soma dos seus divisores exceto ele próprio. (Ex: 6 é perfeito, 6 = 1 + 2 + 3, que são seus divisores). A função deve retornar um valor booleano.

   > conteúdo: operadores lógicos, array, estrutura de repetição e estrutura condicional

2. Faça um função para calcular n! (Fatorial de n), sendo que o valor inteiro de n é fornecido pelo usuário. Sabe-se que por definição 0! = 1. Exemplo de fatorial:

   `10! = 10 * 9 * 8 * 7 * 6 * 5 * 4 * 3 * 2 * 1`

   `5! = 5 * 4 * 3 * 2 * 1`

   `3! = 3 * 2 * 1`

   `0! = 1`

   > conteúdo: operadores aritméticos, estrutura de repetição e estrutura condicional

3. Crie uma função que recebe 3 notas de um aluno por parâmetro e uma letra. Se a letra for A o procedimento calcula a média aritmética das notas do aluno, se for P, a sua média ponderada (pesos: 5, 3 e 2) e se for H, a sua média harmônica.

   > conteúdo: operadores aritméticos e estrutura condicional

---

&nbsp;

<center>

  <img src="https://static.wikia.nocookie.net/looneytunes/images/a/a4/THAT%27SALLGIFS.gif/revision/latest/scale-to-width-down/260?cb=20160806162644" alt="drawing" width="300"/>

Feito com carinho por Lis :)

</center>
