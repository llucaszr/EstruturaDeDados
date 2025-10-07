const prompt = require("prompt-sync")();

// 01. Crie um array de nomes e acesse um nome específico pelo seu índice, alterando também um elemento existente.

let nomes = ["Lucas", "Ana", "Carlos", "Maria", "João"];
console.log("Nome no índice 2:", nomes[2]);
nomes[3] = "Paula";
console.log("Array atualizado:", nomes);

//-----------------------------------------------------------//

// 02. Crie uma função que recebe um array de 2 números e coloque eles em ordem crescente. Não use o método sort.

function ordenarArray(numeros) {
  if (numeros[0] > numeros[1]) {
    let temp = numeros[0];
    numeros[0] = numeros[1];
    numeros[1] = temp;
  }
  return numeros;
}

console.log(ordenarArray([8, 3])); // [3, 8]
console.log(ordenarArray([2, 10])); // [2, 10]

//-----------------------------------------------------------//

// 03. Crie uma função que recebe um array de 3 números e coloque eles em ordem crescente. Crie sua própria função para isso.

function ordenarTres(numeros) {
  if (numeros[0] > numeros[1]) {
    let temp = numeros[0];
    numeros[0] = numeros[1];
    numeros[1] = temp;
  }
  if (numeros[1] > numeros[2]) {
    let temp = numeros[1];
    numeros[1] = numeros[2];
    numeros[2] = temp;
  }
  if (numeros[0] > numeros[1]) {
    let temp = numeros[0];
    numeros[0] = numeros[1];
    numeros[1] = temp;
  }

  return numeros;
}

console.log(ordenarTres([7, 2, 5])); // [2, 5, 7]
console.log(ordenarTres([9, 1, 4])); // [1, 4, 9]
console.log(ordenarTres([3, 8, 6])); // [3, 6, 8]

//-----------------------------------------------------------//

// 04. Crie um script que pergunte 3 números ao usuário, coloque em um array, depois exiba tal array Modifique os elementos do array de modo a a sequência de números ficar do contrário.

let numeross = [];

for (let i = 0; i < 3; i++) {
  let num = Number(prompt(`Digite o ${i + 1}º número: `));
  numeros.push(num);
}
console.log("Array original:", numeross);

let invertidoo = [numeross[2], numeross[1], numeross[0]];
console.log("Array invertido:", invertidoo);

//-----------------------------------------------------------//

// 05. Refaça o script anterior, mas agora pergunte ao usuário quantos números ele deseja inserir no array. Depois, o usuário vai preenchendo elemento por elemento do vetor. Ao final, exiba o array e o array ao contrário (generalização do script anterior).

let qtd = Number(prompt("Quantos números você deseja inserir no array? "));

let numeros = [];

for (let i = 0; i < qtd; i++) {
  let num = Number(prompt(`Digite o ${i + 1}º número: `));
  numeros.push(num);
}

console.log("Array original:", numeros);

let invertido = [];
for (let i = numeros.length - 1; i >= 0; i--) {
  invertido.push(numeros[i]);
}

console.log("Array invertido:", invertido);

//-----------------------------------------------------------//

// 06. Faça uma função que recebe um array de qualquer tamanho e ordene seus elementos na ordem crescente. Faça sua função na mão, não invoque nenhum método de sorting. Dica: pesquise sobre bubble sort.

function bubbleSort(arr) {
  let n = arr.length;
  let trocou;

  do {
    trocou = false;
    for (let i = 0; i < n - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        trocou = true;
      }
    }
    n--;
  } while (trocou);

  return arr;
}

console.log(bubbleSort([5, 3, 8, 4, 2])); // [2, 3, 4, 5, 8]
console.log(bubbleSort([10, 1, 7, 6, 9])); // [1, 6, 7, 9, 10]

//-----------------------------------------------------------//

// 07. Crie uma função que recebe um vetor com vários números e um número específico como argumento. Ela deve mostrar todos os índices onde esse número aparece no vetor, e não só apenas o primeiro e/ou último índice em que o número aparece (como nos métodos indexOf e lastIndexOf).

function buscarIndices(vetor, numero) {
  let indices = [];

  for (let i = 0; i < vetor.length; i++) {
    if (vetor[i] === numero) {
      indices.push(i);
    }
  }

  return indices;
}

let nums = [2, 5, 7, 5, 9, 5, 3];

console.log(buscarIndices(nums, 5)); // [1, 3, 5]
console.log(buscarIndices(nums, 7)); // [2]
console.log(buscarIndices(nums, 10)); // []

//-----------------------------------------------------------//

// 08. Crie um script que pede um inteiro positivo para o usuário. Em seguida, popule uma array com os números de Fibonacci, na hora de somar com os termos anteriores, some com elementos anteriores do array.

let n = Number(prompt("Digite um número inteiro positivo: "));

let fibonacci = [];

if (n >= 1) fibonacci.push(0);
if (n >= 2) fibonacci.push(1);

for (let i = 2; i < n; i++) {
  fibonacci.push(fibonacci[i - 1] + fibonacci[i - 2]);
}
console.log("Sequência de Fibonacci:", fibonacci);

//-----------------------------------------------------------//

// 09. Faça o mesmo do exercício anterior, mas com fatorial.
// Fatorial de 0: 0! = '
// Fatorial de 1: 1 x elemento0 = 1
// Fatorial de 2: 2 x elemento1 = 2
// Fatorial de 3: 3 x elemento2 = 3 x 2 = 6
// ...
// Fatorial de n: n x elemento(n-1) = n x (n-1)! = n!

let nn = Number(prompt("Digite um número inteiro positivo: "));

let fatorial = [];

if (nn >= 1) fatorial.push(1);

for (let i = 1; i < nn; i++) {
  fatorial.push(i * fatorial[i - 1]);
}

console.log("Sequência de fatoriais:", fatorial);

//-----------------------------------------------------------//

// 10. Usando matriz (array de array), crie o jogo da velha. Inicialmente, as posições são variáveis vazias. O usuário fornece a linha e a coluna e clica num botão, então é marcado no tabuleiro X ou O (se for o jogador 1 ou jogador 2) que peça ao usuário uma quantidade de linhas e outra de colunas, depois declare tal matriz, inicialize todos os elementos de 1 até 'linha x coluna'.

let linhas = Number(prompt("Digite a quantidade de linhas: "));
let colunas = Number(prompt("Digite a quantidade de colunas: "));
let matriz = [];
let contador = 1;

for (let i = 0; i < linhas; i++) {
  let linha = [];
  for (let j = 0; j < colunas; j++) {
    linha.push(contador);
    contador++;
  }
  matriz.push(linha);
}

console.log("Matriz gerada:");
for (let i = 0; i < linhas; i++) {
  console.log(matriz[i].join(" "));
}

//-----------------------------------------------------------//
