// IMPORTANDO O EXPRESS NA APLICAÇÃO
//const express = require("express"); // CommonJS Modules
import express from 'express' //ES6 modules -  "type" : "module" habilita o projeto a usar o es6 modules

// Criando uma instancia do express
const app = express();

//importando os controllers (onde estão as rotas)
import ClientesController from "./controllers/ClientesController.js"

// definindo o EJS como renderizador de paginas
app.set("view engine", "ejs");

// definir pasta dos arquivos estaticos (public)
app.use(express.static('public'))

// definindo o uso das rotas que estão nos controllers
app.use("/", ClientesController)

// Criando a rota principal
app.get("/", (req, res) => {
  // será renderizada a pagina index.ejs que está na pasta 'views'
  res.render("index");
});


// Iniciando o servidor na porta 8080
const port = 8080
app.listen(port, (error) => {
  if (error) {
    console.log(`Ocorreu um erro: ${error}`);
  } else {
    console.log(`Servidor iniciado com sucesso em: http://localhost:${port}`);
  }
});

// npm install nodemon - reinicia o servidor a cada att
// npx - executa pacotes
// npm install - instala
// npm start - rodar projeto
// : - representa parametro
