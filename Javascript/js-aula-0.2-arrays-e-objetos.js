// ARRAYS (Vetor ou Lista)
let produtos = ["Computador", "Notebook", "Celular", "Tablet"];
console.log(typeof produtos);
console.log(produtos);

// EXIBINDO ELEMENTOS DE UM VETOR PELO ÍNDICE (SEM LOOP)
console.log(produtos[0]);
console.log(produtos[1]);
console.log(produtos[2]);
console.log(produtos[3]);

// EXIBINDO ELEMENTOS DO VETOR COM O FOR (COM ÍNDICES)
for (let c in produtos) {
  //console.log(`${c} - ${produtos[c]}`)

  //Casting (converte o tipo da variável)
  console.log(`${Number(c) + 1} - ${produtos[c]}`);
}

// EXIBINDO ELEMENTOS DO VETOR COM FOREACH (com índices)
produtos.forEach(function (produto, indice) {
  console.log(indice + 1, produto);
});

// MÉTODOS DE MANIPULAÇÃO DE VETORES
let listaFrutas = ["laranja", " maçã", " banana"];
console.log(`nosso vetor é o: ${listaFrutas}`);

// PUSH - insere um novo elemento no final da lista
listaFrutas[3] = " morango"; // adicionando sem o PUSH
console.log(`nosso vetor é o: ${listaFrutas}`);

listaFrutas.push(" abacaxi"); // adicionando com o PUSH
console.log(`nosso vetor é o: ${listaFrutas}`);

// UNSHIFT - insere um novo elemento no ÌNICIO da lista
listaFrutas[0] = " pera";
console.log(`nosso vetor é o: ${listaFrutas}`); // sem o unshift, o primeiro elemento é substituído pelo novo

listaFrutas.unshift("laranja");
console.log(`nosso vetor é o: ${listaFrutas}`);

// LENGTH - retorna o número de elementos no vetor
let numeros = [6, 8, 2, 9, 3];
console.log(`nosso vetor é o: ${numeros}`);
console.log(`o número de elementos nesse vetor é: ${numeros.length}`);

// SORT - ordena o vetor
console.log(`o primeiro valor do vetor é: ${numeros[0]}`);
console.log(`nosso vetor ordenado é o: ${numeros.sort()}`);
console.log(`o primeiro valor do vetor é: ${numeros[0]}`);

//////////////////////////////////////////////////////////////////

// OBJETOS LITERAIS (Atributos e Métodos) - não vem de uma classe
const carro = {
  // atributos (propriedades - características)
  modelo: "gol",
  cor: "vermelho",

  // métodos (funções - ações)
  acelerar() {
    return "acelerando...";
  },
  frear() {
    return "Freando...";
  },
};

console.log(carro.modelo);
console.log(carro.acelerar());

// OBJETO
const product = {
  nome: "Computador",
  marca: "Lenovo",
  preco: 3000,
  descricao: "PC moderno com bom desempenho",
};

console.log(
  `o ${product.nome} da marca ${product.marca}, custa apenas ${product.preco}, ${product.descricao}.`
);

// ARRAY DE OBJETOS
const productList = [
  {
    nome: "Computador",
    marca: "Intel",
    preco: 4000,
    descricao: "PC moderno com bom desempenho",
  },
  {
    nome: 'Tablet',
    marca: 'Samsung',
    preco: 2000,
    descricao: 'Ótima velocidade de processamento'
  },
  {
    nome: 'Celular',
    marca: 'Apple',
    preco: 15000,
    descricao: 'Muito barato'
  }
];
console.log(productList)

// EXIBINDO ARRAY DE OBJETOS COM FOREACH
productList.forEach(function (product){
    console.log(`produto: ${product.nome}`)
    console.log(`marca: ${product.marca}`)
    console.log(`preço: ${product.preco}`)
    console.log(`descrição: ${product.descricao}`)
    console.log()
})

