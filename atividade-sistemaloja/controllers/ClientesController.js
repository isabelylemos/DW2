import express from "express";
const router = express.Router();
import cliente from "../models/Clientes.js";
import Auth from "../middleware/Auth.js"

// rota clientes
router.get("/clientes",Auth, (req, res) => {
  cliente.findAll().then((cliente) => {
    res.render("clientes", {
      cliente: cliente,
    });
  });
});

// rota cadastro
router.post("/clientes/new",Auth, (req, res) => {
  const nome = req.body.nome;
  const cpf = req.body.cpf;
  const endereco = req.body.endereco;
  cliente
    .create({
      nome: nome,
      cpf: cpf,
      endereco: endereco,
    })
    .then(() => {
      res.redirect("/clientes");
    })
    .catch((error) => {
      console.log(error);
    });
});

//rota exclusão
router.get("/clientes/delet/:id",Auth, (req, res) => {
  const id = req.params.id;
  cliente
    .destroy({
      where: {
        id: id,
      },
    })
    .then(() => {
      res.redirect("/clientes");
    })
    .catch((error) => {
      console.log(error);
    });
});

// rota edição
router.get("/clientes/edit/:id",Auth, (req, res) => {
    const id = req.params.id;
    cliente.findByPk(id).then((cliente) => {
      res.render("clienteEdit", {
        cliente: cliente,
      });
    }).catch((error) => {
    console.log(error);
  })
});

//rota alteração
router.post("/clientes/update",Auth, (req,res) => {
  const id = req.body.id
  const nome = req.body.nome
  const cpf = req.body.cpf
  const endereco = req.body.endereco
  cliente.update(
    {
      nome: nome,
      cpf: cpf,
      endereco: endereco,
    },
    { where : {id: id} }
  ).then(() => {
    res.redirect("/clientes")
  }).catch((error) => {
    console.log(error)
  })
})

export default router;
