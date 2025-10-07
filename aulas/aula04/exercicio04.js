// 1.Crie um array de nomes e acesse um nome específico pelo seu índice, alterando também um elemento  existente.
const nomes = ["Lucas", "Ana", "Gabriel"];
console.log(nomes);
console.log(nomes[0]);
nomes[1] = "Paula";
console.log(nomes);

// 2. Crie uma função que recebe um array de 2 números e coloque eles em ordem crescente. Não use o  método sort.
function ordem() {
  const numeros = [20, 10];

  if (numeros[0] > numeros[1]) {
    let temp = numeros[0];
    numeros[0] = numeros[1];
    numeros[1] = temp;
  }

  return numeros;
}
console.log("-------------------")
console.log(ordem());

// 03. Crie uma função que recebe um array de 3 números e coloque eles em ordem crescente. Crie sua própria  função para isso.

function ordenarTres(nums) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] > nums[j]) {
        let temp = nums[i];
        nums[i] = nums[j];
        nums[j] = temp;
      }
    }
  }
  return nums;
}

console.log("-------------------")
console.log(ordenarTres([3, 1, 2]));
console.log(ordenarTres([20, 5, 10]));
console.log(ordenarTres([9, 7, 8]));
console.log("-------------------")
