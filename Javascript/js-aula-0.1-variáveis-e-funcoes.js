//DECLARAÇÃO DE VARIÁVEIS NO JS
// CONST X LET X VAR

const nome = "isa";
//nome = "ana" - a variável não será reatribuída

var idade;
var idade = 18; // pode ser redeclarada e reatribuída

let cidade; // let idade - não permite ser redeclarada
cidade = "Registro"; // let permite ser reatribuída

console.log(nome);
console.log(idade);
console.log(cidade);

///////////////////////////////////////////////////////////////

//TYPEOF

const sobrenome = "Lemos";
console.log(typeof sobrenome);

const salario = 1500;
console.log(typeof salario);

let endereco;
console.log(typeof endereco);

/////////////////////////////////////////////////////////////

// TIPOS DE FUNÇÕES
// -- FUNÇÃO SIMPLES

function minhaFuncao() {
  console.log("olá, mundo!");
}

minhaFuncao(); // chamando a função para ser executada

// -- FUNÇÃO COM PARÂMETRO / ARGUMENTO

function saudacao(cidade, nome = "usuário") {
  // foi definido um valor padrão, assim parâmetro nome passa a ser opcional. Parâmetro obrigatório(cidade)  deve vir por primeiro
  console.log("olá, bem vinda, " + nome + " de " + cidade);
}

saudacao("jacu"); // enviando o argumento

// CONCATENANDO COM LITERAL/TEMPLATE STRING ${}: PLACEHOLDER

function soma(n1, n2) {
  let resultado = n1 + n2;
  console.log(`a soma foi ${resultado}`);
}

soma(5, 5);

///////////////////////////////////////////////////////////////

// FUNÇÃO COM RETORNO

function Soma(n1, n2) {
  return n1 + n2;
}

console.log(`a soma dos numeros foi ${Soma(2, 6)}`);

////////////////////////////////////////////////////////////////

// FUNÇÃO COM MAIS DE UM RETORNO

function parImpar(numero) {
  if (numero % 2 == 0) {
    return "Par";
  } else {
    return "Impar";
  }
}

let numero = 9;
console.log(`O número enviado é ${parImpar(numero)}`);

///////////////////////////////////////////////////////

// FUNÇÃO ANÔNIMA

const dobro = function (x) {
  return x * 2;
};

console.log(`O dobro do número é ${dobro(15)}`);

///////////////////////////////////////////////////

// ARROW FUNCTION (função anônima) - PRÃMETRO ÚNICO

const Dobro = (x) => {
  return x * 2;
};

console.log(Dobro(20));

// shift + alt + f para formatar

/////////////////////////////////////////////////////

// ARROW FUNCTION COM MAIS DE UM PARÂMETRO

const calculadora = (num1, operador, num2) => {
  return eval(`${num1} ${operador} ${num2}`);
};

console.log(`o resultado da operação é ${calculadora(6, "*", 6)}`);

// eval é um parâmetro onde vc passa dois numeros e um operador e ele faz a conta como se fosse uma calculadora

/////////////////////////////////////////////////////

// FUNÇÃO IMEDIATA - IIFE (immediately Invoked Function Expression)

const iife = (function () {
  console.log("Executando imediatamente!");
})(); //Parâmetros

// IIFE COM PARÂMETRO

const start = (function (app) {
  console.log(`Executando imediatamente o app ${app}`);
})("WhatsApp");
