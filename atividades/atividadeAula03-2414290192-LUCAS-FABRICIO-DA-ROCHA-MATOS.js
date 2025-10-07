const prompt = require("prompt-sync")({ sigint: true });

// 01) Leia 20 valores reais e calcule seu somatório utilizando a instrução while.
const valores = [
  1.5, 2.3, 4.7, 10, 3, 2, 5, 6, 7.8, 9, 11.2, 13.4, 8, 4.6, 3.3, 2.1, 1, 0.5,
  7, 12,
];

let contador = 0;
let soma = 0;

while (contador < valores.length) {
  soma += valores[contador];
  contador++;
}

console.log(`O somatório dos 20 valores reais é: ${soma}`);

//----------------------------------------------------------------------------------------/

// 02) Leia 20 valores reais e calcule seu somatório utilizando a instrução do...while.
const valoress = [
  1.5, 2.3, 4.7, 10.3, 3, 2, 5, 6, 7.8, 9, 11.2, 13.4, 8, 4.6, 3.3, 2.1, 1, 0.5,
  3, 12,
];

let contadorr = 0;
let somaa = 0;

do {
  somaa += valoress[contadorr];
  contadorr++;
} while (contadorr < valoress.length);

console.log(`O somatório dos 20 valores reais é: ${somaa}`);

//----------------------------------------------------------------------------------------/

// 03) Implemente também em JavaScript, mas desta vez utilizando as estruturas de repetição, onde o programa  deverá finalizar quando o usuário digitar 0, caso contrário ficará cadastrando os pedidos, agora vai poder  acumular mais de um produto e ao final deverá ser dada a soma dos pedidos em uma lanchonete.

const cardapio = {
  100: { produto: "Cachorro quente", preco: 1.7 },
  101: { produto: "Bauru Simples", preco: 2.3 },
  102: { produto: "Bauru com ovo", preco: 2.6 },
  103: { produto: "Hamburguer", preco: 2.4 },
  104: { produto: "Cheeseburguer", preco: 2.5 },
  105: { produto: "Refrigerante", preco: 1.0 },
};

function exibirCardapio() {
  console.log("\n=== CARDÁPIO DA LANCHONETE ===");
  console.log("Código | Produto           | Preço");
  console.log("-----------------------------------");
  for (let codigo in cardapio) {
    console.log(
      `${codigo}    | ${cardapio[codigo].produto.padEnd(16)} | R$ ${cardapio[
        codigo
      ].preco.toFixed(2)}`
    );
  }
  console.log("0      | Finalizar pedido   |");
  console.log("-----------------------------------\n");
}

function lanchonete() {
  let totalPedido = 0;
  let pedidos = [];

  console.log("Bem-vindo à Lanchonete!");

  while (true) {
    exibirCardapio();

    let codigo = parseInt(
      prompt("Digite o código do produto (0 para finalizar):")
    );

    if (codigo === 0) {
      break;
    }

    if (cardapio[codigo]) {
      let quantidade = parseInt(
        prompt(`Quantos ${cardapio[codigo].produto} deseja?`)
      );

      if (quantidade > 0) {
        let subtotal = cardapio[codigo].preco * quantidade;
        totalPedido += subtotal;

        pedidos.push({
          codigo: codigo,
          produto: cardapio[codigo].produto,
          quantidade: quantidade,
          precoUnitario: cardapio[codigo].preco,
          subtotal: subtotal,
        });

        console.log(
          `✓ Adicionado: ${quantidade}x ${
            cardapio[codigo].produto
          } - R$ ${subtotal.toFixed(2)}`
        );
      } else {
        console.log("Quantidade inválida! Digite um número maior que 0.");
      }
    } else {
      console.log(
        "Código inválido! Por favor, digite um código válido do cardápio."
      );
    }
  }

  if (pedidos.length > 0) {
    console.log("\n=== RESUMO DO PEDIDO ===");
    console.log("Item | Produto           | Qtd | Preço Unit. | Subtotal");
    console.log("-------------------------------------------------------");

    pedidos.forEach((pedido, index) => {
      console.log(
        `${(index + 1).toString().padEnd(4)} | ${pedido.produto.padEnd(
          16
        )} | ${pedido.quantidade
          .toString()
          .padEnd(3)} | R$ ${pedido.precoUnitario
          .toFixed(2)
          .padEnd(9)} | R$ ${pedido.subtotal.toFixed(2)}`
      );
    });

    console.log("-------------------------------------------------------");
    console.log(`TOTAL DO PEDIDO: R$ ${totalPedido.toFixed(2)}`);
  } else {
    console.log("Nenhum pedido foi realizado.");
  }

  console.log("Obrigado pela preferência!");
}

lanchonete();

//----------------------------------------------------------------------------------------/

// 04) Faça um algoritmo em JavaScript que leia um conjunto de 15 valores, um de cada vez, utilizando  estrutura de repetição, acompanhados de um código 1 ou 2. O valor representa o número de cobaias  utilizadas em uma das 15 experiências feitas e os códigos 1 e 2 representam respectivamente coelhos e  ratos. Mostre no final:

/*
a. o total de cobaias utilizadas; 
b. o total de coelhos; 
c. total de ratos; e  
d. o percentual de coelhos e ratos. 
*/

let totalCobaias = 0;
let totalCoelhos = 0;
let totalRatos = 0;

for (let i = 1; i <= 15; i++) {
  let valor = parseInt(
    prompt(`Digite o número de cobaias da experiência ${i}: `)
  );
  let codigo = parseInt(
    prompt(`Digite o código (1 para coelho, 2 para rato): `)
  );

  totalCobaias += valor;

  if (codigo === 1) {
    totalCoelhos += valor;
  } else if (codigo === 2) {
    totalRatos += valor;
  } else {
    console.log("Código inválido! Digite 1 ou 2.");
    i--; // repete essa iteração
  }
}

let percCoelhos = (totalCoelhos / totalCobaias) * 100;
let percRatos = (totalRatos / totalCobaias) * 100;

console.log(`\nTotal de cobaias: ${totalCobaias}`);
console.log(`Total de coelhos: ${totalCoelhos}`);
console.log(`Total de ratos: ${totalRatos}`);
console.log(`Percentual de coelhos: ${percCoelhos.toFixed(2)}%`);
console.log(`Percentual de ratos: ${percRatos.toFixed(2)}%`);

//----------------------------------------------------------------------------------------/

// 05) Faça um algoritmo que apresente o quadrado de cada um dos números pares entre 1 a 100.

for (let i = 2; i <= 100; i += 2) {
  console.log(`O quadrado de ${i} é ${i * i}`);
}
