import express from "express";
const app = express();

import ClientesController from "./controllers/ClientesController.js";
import PedidosController from "./controllers/PedidosController.js";
import ProdutosController from "./controllers/ProdutosController.js";
import UsersController from "./controllers/UsersController.js";

import connection from "./config/sequelize-config.js";
import session from "express-session";
import Auth from "./middleware/Auth.js";
import flash from "express-flash";

app.use(flash());

app.use(
  session({
    secret: "lojasecret",
    cookie: { maxAge: 3600000 },
    saveUninitialized: false,
    resave: false,
  })
);

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.urlencoded({ extended: false }));

app.use("/", ClientesController);
app.use("/", PedidosController);
app.use("/", ProdutosController);
app.use("/", UsersController);

app.get("/", Auth, function (req, res) {
  res.render("index", {
    messages: req.flash(),
  });
});

connection
  .authenticate()
  .then(() => {
    console.log("Conexão com o banco de dados feita com sucesso!");
  })
  .catch((error) => {
    console.log(error);
  });

connection
  .query(`CREATE DATABASE IF NOT EXISTS atividade_loja;`)
  .then(() => {
    console.log("O banco de dados está criado");
  })
  .catch((error) => {
    console.log(error);
  });

const port = 8080;
app.listen(port, (error) => {
  if (error) {
    console.log(`Ocorreu um erro: ${error}`);
  } else {
    console.log(`Servidor iniciado com sucesso em: http://localhost:${port}`);
  }
});
