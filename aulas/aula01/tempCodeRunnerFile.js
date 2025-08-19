
// 8. Ordenação simples (Bubble Sort)
let listaOrdenada = [5, 3, 8, 4, 2, 7, 1, 17, 6, 7];

for (let i = 0; i < listaOrdenada.length; i++){
    for(let j = 0; j < listaOrdenada.length -1; j++){
        if(listaOrdenada[j] > listaOrdenada[j + 1]){
            let temp = listaOrdenada[j + 1];
                listaOrdenada[j + 1] = listaOrdenada[j];
                listaOrdenada[j] = temp;
        }
    }
}
console.log(`Lista ordenada: ${listaOrdenada}`);