// CLASSE, DATA E MOEDA

// OBJETO LITERAL
const carro = {
  // ATRIBUTOS
  marca: "ford",
  modelo: "Focus",
  ano: 2014,

  // METODOS
  buzinar() {
    return "beep! beep!";
  },
};

console.log(carro.marca, carro.modelo);
console.log(carro.buzinar());

// CLASSE
class Carro {
  // ATRIBUTOS
  constructor(marca, modelo, ano) {
    this.marca = marca;
    this.modelo = modelo;
    this.ano = ano;
  }

  //METODOS
  buzinar() {
    return "beep! beep!";
  }
}

// CRIANDO UMA INSTÂNCIA (OBJETO) DA CLASSE CARRO
/*const carroPopular = new Carro();
carroPopular.marca = "fiat";
carroPopular.modelo = "uno";
carroPopular.ano = 2012;*/

const carroPopular = new Carro("Fiat", "Uno", 2012);
console.log(
  carroPopular.marca,
  carroPopular.modelo,
  carroPopular.ano,
  carroPopular.buzinar()
);

const carroEsportivo = new Carro("Chevrolet", "Camaro", 2024);
console.log(
  carroEsportivo.marca,
  carroEsportivo.modelo,
  carroEsportivo.ano,
  carroEsportivo.buzinar()
);

////////////////////////////////////////////////////////////////////////

// MANIPULANDO DATAS NO JAVASCRIPT

// CRIANDO UMA INSTÂNCIA DA CLASSE DATE DO JS (PARA UTILIZAR OS SEUS MÉTODOS)

const dataAtual = new Date();

// PEGAR DIA ATUAL
const dia = dataAtual.getDate();
console.log(`hoje é dia ${dia}`);

// PEGAR MÊS ATUAL
const mes = dataAtual.getMonth() + 1;
console.log(`estamos no mês ${mes}`);

//PEGAR O ANO ATUAL
const ano = dataAtual.getFullYear();
console.log(`estamos no ano ${ano}`);

console.log(`hoje é ${dia}/${mes}/${ano}`);

//////////////////////////////////////////////////////////////////////

// MANIPULANDO MOEDAS NO JAVASCRIPT
let salario = 2500.3;
console.log(salario);

// toFixed - define o numero de casas decimais
console.log(salario.toFixed(2));
console.log(salario.toFixed(0));

// .replace - altera o formato da casa decimal
console.log(salario.toFixed(2).replace(".", ","));

// .toLocaleString - faz a formatação para determinada moeda
//REAL
console.log(
  salario.toLocaleString("pt-br", { style: "currency", currency: "BRL" })
);
//DÓLAR
console.log(
  salario.toLocaleString("en", { style: "currency", currency: "USD" })
);
//EURO
console.log(
  salario.toLocaleString("en", { style: "currency", currency: "EUR" })
);

// CONVERTENDO REAL PARA DÓLAR
let salarioDolar = salario * 0.18;
console.log(
  salarioDolar.toLocaleString("en", { style: "currency", currency: "USD" })
);

///////////////////////////////////////////////////////////////////////////////
// FORMATANDO STRINGS
const nome = "isabely lemos";
console.log(nome);

// LETRAS MAIÚSCULAS - .toUpperCase()
console.log(nome.toUpperCase());

//LETRASMINUSCULAS - .toLowerCase()
console.log(nome.toLowerCase());

// CONTAR LETRAS - .length
console.log(nome.length);

// PODEMOS USAR TAMBEM PARA ARRAYS
const lista = ["maça", "banana", "morango"];
console.log(lista.length);
