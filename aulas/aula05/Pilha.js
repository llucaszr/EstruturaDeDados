// Vamos codificar o esqueleto de métodos para uma estrutura de dados simples Pilha Simples

class Pilha {
  // Início da Classe Pilha
  // Método construtor que será útil ao instanciar um objeto do tipo desta classe Pilha
  constructor() {
    this.items = [];
  }
  // Método para empilhar elementos
  empilhar(elemento) {
    // Posso empilhar usando o método JS push
    // this.items.push(elemento);
    // Ou empilhar usando o último endereço vazio
    this.items[this.items.length] = elemento;
  }

  // Método para devolver o elemento do topo da pilha
  devolveElementoTopoPilha() {
    return this.items[this.items.length - 1];
  }

  // Método para remover elemento do topo da pilha
  removeElementoTopoPilha(elemento) {
    return this.items.pop();
  }

  // Método para informar se a pilha está vazia
  pilhaEstaVazia() {
    return this.items.length === 0;
  }

  // Método para esvaziar a pilha
  limparPilha() {
    this.items = [];
  }

  // Método que devolve o tamanho(qtde elementos) da pilha
  tamanhoPilha() {
    return this.items.length;
  }

  // Método para imprimir todos elementos da pilha
  imprimir() {
    console.log(this.items.toString());
  }
} // Fim da Classe

// Testando o funcionamento dos métodos da classe Pilha, instanciando(criando) um objeto desta classe

const pilha = new Pilha();

// Verificando se a pilha está vazia
console.log(`A pilha está vazia? ${pilha.pilhaEstaVazia()}`);

// Empilhando elementos
pilha.empilhar("Gustavo");
pilha.empilhar("Regiano");
pilha.empilhar("Dayane");
pilha.empilhar("Samuel");

// Verificando se foi inserido o elemento na pilha
pilha.imprimir();

// Verificando o tamanho da pilha
console.log(`A pilha contém: ${pilha.tamanhoPilha()} elementos.`);

// Verificando o elemento que está no topo da pilha

console.log(
  `Quem está no topo da pilha é: ${pilha.devolveElementoTopoPilha()}`
);

// Desempilhando (removendo o elemento do topo da pilha)
console.log(`Remover o elemento: ${pilha.removeElementoTopoPilha()}`);
console.log(`Remover o elemento: ${pilha.removeElementoTopoPilha()}`);

console.log(`A pilha agora, contém: ${pilha.tamanhoPilha()} elementos.`);

// Mostrando a pilha depois de remover elementos
pilha.imprimir();

// Esvaziar a pilha
pilha.limparPilha();
console.log(`A pilha agora, contém: ${pilha.tamanhoPilha()} elementos`);
