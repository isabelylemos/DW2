import express from "express";
import multer from "multer";
import connection from "./config/sequeliza-config.js";
import galeria from "./models/galeria.js";

const app = express();

connection
  .authenticate()
  .then(() => {
    console.log("Conexão com o banco de dados feita com sucesso!");
  })
  .catch((error) => {
    console.log(error);
  });

connection
  .query("CREATE DATABASE IF NOT EXISTS galeria;")
  .then(() => {
    console.log("O banco de dados está criado.");
  })
  .catch((error) => {
    console.log(error);
  });

app.use(express.static("public"));
app.set("view engine", "ejs");

const upload = multer({ dest: "public/uploads/" });

app.get("/", (req, res) => {
  galeria.findAll().then((imagem) => {
    res.render("index", {
      imagem: imagem,
    });
  });
});

//rota de upload
app.post("/upload", upload.single("file"), (req, res) => {
  const file = req.file.filename;
  galeria.create({
    file: file,
  });
  res.redirect("/");
});

const port = 8081;
app.listen(port, (error) => {
  if (error) {
    console.log(`Ocorreu um erro! ${error}`);
  } else {
    console.log(`Servidor iniciado com sucesso em: http://localhost:${port}`);
  }
});
