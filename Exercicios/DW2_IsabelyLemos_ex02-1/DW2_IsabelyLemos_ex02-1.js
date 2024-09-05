// ARRAYS
let estados = [
  "Acre",
  "Alagoas",
  "Amapá",
  "Amazonas",
  "Bahia",
  "Ceará",
  "Espirito Santos",
  "Goias",
  "Maranhão",
  "Mato Grosso",
  "Mato Grosso do Sul",
  "Minas Gerais",
  "Pará",
  "Paraíba",
  "Paraná",
  "Pernambuco",
  "Piauí",
  "Rio de Janeiro",
  "Rio Grande do Sul",
  "Rio Grande do Norte",
  "Rondônia",
  "Roraima",
  "Santa Catarina",
  "São Paulo",
  "Sergipe",
  "Tocantins",
];

estados.forEach((estado, indice) => {
  console.log(indice + 1, estado);
});

///////////////////////////////////////////////

// OBJETOS LITERAIS
const isa = {
  nome: "Isabely",
  idade: 18,
  cidade: "Jacupiranga",
  hobby: "Jogar vôlei",
  musica: "Life",
};

console.log()
console.log(`Nome: ${isa.nome}`);
console.log(`Idade: ${isa.idade}`);
console.log(`Cidade: ${isa.cidade}`);
console.log(`Hobby: ${isa.hobby}`);
console.log(`Música Preferida: ${isa.musica}`);

///////////////////////////////////////////////////////

// ARRAY DE OBJETOS
const filmes = [{
    titulo: 'Homem de Ferro',
    genero: 'Ficção Científica',
    ano: 2008,
    classificacao: '12 anos'
},
{
    titulo: 'Viúva Negra',
    genero: 'Ficção Científica',
    ano: 2021,
    classificacao: '12 anos'
},
{
    titulo: 'Vingadores: Ultimato',
    genero: 'Ficção Científica',
    ano: 2019,
    classificacao: '12 anos'
}
]

filmes.forEach((filme) => {
    console.log()
    console.log(`Título: ${filme.titulo}`)
    console.log(`Gênero: ${filme.genero}`)
    console.log(`Ano: ${filme.ano}`)
    console.log(`Classificação de Idade: ${filme.classificacao}`)
})