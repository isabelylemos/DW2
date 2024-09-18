const express = require("express");
const app = express();

app.set("view engine", "ejs");

app.use(express.static('public'))

app.get("/", (req, res) => {
  res.render("index");
});


// rota clientes
app.get("/clientes", (req, res) => {
  const listaClientes = [
    { nome: "Isabely Lemos", cpf: "123.456.789-10", endereco: "Av. Interlagos, 79" },
    { nome: "Yasmin Pires", cpf: "132.654.879-11", endereco: "Pacarai, 50" },
    { nome: "Ana Flávia", cpf: "555.444.777-10", endereco: "Av. Barcelona, 41" },
    { nome: "Gustavo Lanna", cpf: "111.452.777-12", endereco: "Carnaúba, 32" },
    { nome: "Lucomara Lemos", cpf: "221.552.667-51", endereco: "23 de Junho, 30" },
    { nome: "João Silva", cpf: "331.444.755-12", endereco: "Jatobá, 22" },
    { nome: "Pedro Henrique", cpf: "333.467.888-13", endereco: "Carnaúba, 32" },
  ];

  res.render("clientes", {
    listaClientes: listaClientes,
  });
});


// rota produtos
app.get("/produtos", (req, res) => {
  const listaProdutos = [
    { nome: "Pizza de Quatro Queijos", preco: 50, categoria: "Grande" },
    { nome: "Pizza de Calabresa", preco: 35, categoria: "Pequena" },
    { nome: "Pizza de Marguerita", preco: 48, categoria: "Grande" },
    { nome: "Pizza de Portuguesa", preco: 50, categoria: "Grande" },
    { nome: "Pizza de Romanesca", preco: 40, categoria: "Média" },
    { nome: "Pizza de Frango com Catupiry", preco: 52, categoria: "Grande" },
    { nome: "Pizza de Maracatu", preco: 38, categoria: "Média" },
  ];

  res.render("produtos", {
    listaProdutos: listaProdutos,
  });
});


// rota pedidos
app.get("/pedidos", (req, res) => {
  
  const listaPedidos = [
    {numero: 21, valor: 344},
    {numero: 18, valor: 238},
    {numero: 33, valor: 195},
    {numero: 45, valor: 101},
    {numero: 34, valor: 90},
    {numero: 42, valor: 85},
    {numero: 12, valor: 72}
  ];

  res.render("pedidos", {
    listaPedidos : listaPedidos
  })
});


const port = 4000;
app.listen(port, (error) => {
  if (error) {
    console.log(`Ocorreu um erro: ${error}`);
  } else {
    console.log(`Servidor iniciado com sucesso em: http://localhost:${port}`);
  }
});
