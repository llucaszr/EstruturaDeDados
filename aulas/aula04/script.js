function output(text) {
  console.log(text);
}

output("Boa noite!", "Olá tudo bem!");

//Objeto

// criando (instaciando) com new
// instanciar signifca Criar
var obj = new Object();
var obj = {};

obj = {
  name: {
    first: "Regiano",
    last: "Alves",
  },
  adress: "QSF 15 Casa 13",
};

console.log(obj.adress);
console.log(obj.name);


function Book(title, pages, isbn) {
  this.title = title;
  this.pages = pages;
  this.isbn = isbn;
}

let book = new Book("Estrutura de Dados", 406, "978-85-7522-553-0");

console.log(book.title);
book.title = "Estrutura de Dados e algoritmos com JS";
console.log(book.title);
console.log("Estrutura de Dados");
