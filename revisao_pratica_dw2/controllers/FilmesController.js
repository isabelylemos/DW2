import express from "express";
import filmes from "../models/filmes.js";
const router = express.Router();

router.get("/", (req, res) => {
  filmes.findAll().then((filmes) => {
    // 1º filmes - do model, 2º filmes é o retorno da promessa (o select)

    res.render("filmes", {
      filmes: filmes,
    });
  });
});

router.post("/filmes/new", (req, res) => {
  const titulo = req.body.titulo;
  const genero = req.body.genero;
  const duracao = req.body.duracao;
  filmes
    .create({
      titulo: titulo,
      genero: genero,
      duracao: duracao,
    })
    .then(() => {
      res.redirect("/");
    })
    .catch((error) => {
      console.log(error);
    });
});

router.get("/filmes/delete/:id", (req, res) => {
  const id = req.params.id;
  filmes
    .destroy({
      where: {
        id: id,
      },
    })
    .then(() => {
      res.redirect("/");
    })
    .catch((error) => {
      console.log(error);
    });
});

export default router;
