// Importando o Express com ES6 Modules
import express from "express";
// Iniciando o Express na variável app
const app = express();
// importando o sequelize com os dados da conexão
import connection from "./config/sequeliza-config.js";
// Importando os Controllers (onde estão as rotas)
import ClientesController from "./controllers/ClientesController.js";
import ProdutosController from "./controllers/ProdutosController.js";
import PedidosController from "./controllers/PedidosController.js";
import UsersController from "./controllers/UsersController.js";

// importando liberador de sessões
import session from "express-session";

// importando middleware auth
import Auth from "./middleware/Auth.js"

// importando express flash
import flash from "express-flash"

// configurar o flash messages
app.use(flash())

// configurando express session
app.use(
  session({
    secret: "lojasecret",
    cookie: { maxAge: 3600000 }, // sessão expira em 1 hora
    saveUninitialized: false,
    resave: false,
  })
);

// permite capturar dados vindo de formulários
app.use(express.urlencoded({ extended: false }));

// realizando a conexão com o banco de dados
connection
  .authenticate()
  .then(() => {
    console.log("conexão com o banco de dados feita com sucesso!");
  })
  .catch((error) => {
    console.log(error);
  });

// criando banco de dados se ele não existir
connection
  .query("CREATE DATABASE IF NOT EXISTS loja;")
  .then(() => {
    console.log("O banco de dados está criado!");
  })
  .catch((error) => {
    console.log(error);
  });

// Define o EJS como Renderizador de páginas
app.set("view engine", "ejs");
// Define o uso da pasta "public" para uso de arquivos estáticos
app.use(express.static("public"));

// Definindo o uso das rotas dos Controllers
app.use("/", ClientesController);
app.use("/", ProdutosController);
app.use("/", PedidosController);
app.use("/", UsersController);

// ROTA PRINCIPAL
app.get("/",Auth, function (req, res) {
  res.render("index", {
    messages: req.flash()
  });
});

// INICIA O SERVIDOR NA PORTA 8080
app.listen(8080, function (erro) {
  if (erro) {
    console.log("Ocorreu um erro!");
  } else {
    console.log("Servidor iniciado com sucesso!");
  }
});
