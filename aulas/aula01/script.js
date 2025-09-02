// 1. Soma de dois números
let a = 5,
  b = 7;
soma1 = a + b;

console.log(`A soma dos valores de ${a} e ${b} é igual a: ${soma1}`);

// 2. Par ou impar
let numero = 10;

if (numero % 2 === 0) {
  console.log(numero, "é par");
} else {
  console.log(numero, "é impar");
}

// 3. Imprimir números de 1 a 10
for (let i = 1; i <= 10; i++) {
  console.log(i);
}

// 4. Calcular a média de notas
let notas = [8, 7, 6, 8.5],
  somaNotas = 0;
// percorrendo cada uma das notas do array
for (let i = 0; i < notas.length; i++) {
  // equivale a somaNotas = somaNotas + notas
  soma += notas[i];
}

let mediaFinal = soma / notas.length;
console.log("A média final é igual a: ", mediaFinal);

// 5. Encontrar o maior número contido em uma lista vetor (Array)
let numeros = [12, 5, 8, 21, 7, 45, 38, 19];
maiorNumero = 0;
// Agora iremos iterar cada um dos elementos do Array
for (let i = 0; i < numeros.length; i++) {
  /** se o número indexado lido do vetor for maior
   *  do que a variável auxiliar 'maiorNumero'
   *  então é só armazenar esse valor na varivável temporária
   */
  if (numeros[i] > maiorNumero) {
    maiorNumero = numeros[i];
  }
}
console.log("O maior número da lista é", maiorNumero);

// Usando if ternário
for (let i = 0; i < numeros.length; i++) {
  maiorNumero = numeros[i] > maiorNumero ? numeros[i] : maiorNumero;
}
console.log("O maior número da lista é", maiorNumero);

// 6. Contar quantas vezes um determinado valor aparece no vetor
let valores = [3, 5, 2, 3, 6, 8, 5, 3, 3, 7, 3, 3],
  alvo = 3,
  contador = 0;
// iterando em cada valor indexado na lista
for (let i = o; i < valores.length; i++) {
  if (valores[i] === alvo) {
    contador++;
  }
}
console.log(`O valor ${alvo} aparece ${contador} vezes na lista`);

// 7. Vamos agora inverter os valores de um vetor

let numeross = [1, 2, 3, 4, 5];

for (let i = 0; i < numeross.length / 2; i++) {
  let temp = numeross[i]; // guarda o da frente
  numeross[i] = numeross[numeross.length - 1 - i]; // coloca o de trás na frente
  numeross[numeross.length - 1 - i] = temp; // coloca o da frente atrás
}

console.log("Invertido:", numeross);
