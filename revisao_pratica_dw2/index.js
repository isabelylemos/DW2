//1º
import express from "express";
// 2°
const app = express();

//6º
import FilmesController from "./controllers/FilmesController.js";

//8º
import connection from "./config/sequelize-config.js";

//5º
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.urlencoded({ extended: false }));

//7°
app.use("/", FilmesController);

//9º
connection
  .authenticate()
  .then(() => {
    console.log("Conexão com o banco de dados feita com sucesso!");
  })
  .catch((error) => {
    console.log(error);
  });

//10º
connection
  .query(`CREATE DATABASE IF NOT EXISTS filmes;`)
  .then(() => {
    console.log("O banco de dados está criado.");
  })
  .catch((error) => {
    console.log(error);
  });

//4º
/*app.get("/", (req, res) => {
  res.("filmes");
}); */

// 3°
const port = 8080;
app.listen(port, (error) => {
  if (error) {
    console.log(`Erro ao iniciar o servidor ${error}.`);
  } else {
    console.log(`Servidor rodando em http://localhost:${port}`);
  }
});
