// IMPORTANDO O EXPRESS NA APLICAÇÃO
const express = require("express"); // CommonJS Modules

// Criando uma instancia do express
const app = express();

// Criando a rota principal
app.get("/", function(req, res){
    res.send("Hello Word! Bem-vindo!")
})

// Iniciando o servidor na porta 8080
app.listen(8080, function (error) {
  if (error) {
    console.log(`Ocorreu um erro: ${error}`);
  } else {
    console.log("Servidor iniciado com sucesso!");
  }
});
