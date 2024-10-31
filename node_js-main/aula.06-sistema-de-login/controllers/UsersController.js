import express from "express";
const router = express.Router();

import User from "../models/Usuario.js";
import bcrypt from "bcrypt";

// rota login
router.get("/login", (req, res) => {
  res.render("login", {
    loggedOut: true,
    messages: req.flash()
  });
});

// rota logout
router.get("/logout", (req, res) => {
  req.session.user = undefined;
  res.redirect("/");
});

// rota cadastro
router.get("/cadastro", (req, res) => {
  res.render("cadastro", {
    loggedOut: true,
    messages: req.flash()
  });
});

// rota criação de usuario
router.post("/createUser", (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  // verificar se o usuario ja esta cadastrado
  User.findOne({ where: { email: email } }).then((user) => {
    // se nao houver
    if (user == undefined) {
      // aqui é feito o cadastro e o hash de senha
      const salt = bcrypt.genSaltSync(10);
      const hash = bcrypt.hashSync(password, salt);
      User.create({
        email: email,
        password: hash,
      }).then(() => {
        res.redirect("/login");
      });
    } else {
      // caso o usuario ja esteja cadastrado
      req.flash('danger', 'O usuário já está cadastrado. Faça o login')
        res.redirect("/cadastro")
    }
  });
});

// rota autenticação
router.post("/authenticate", (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  // buscar usuario no banco
  User.findOne({
    where: {
      email: email,
    },
  }).then((user) => {
    // se o usuario estiver cadastrado
    if (user != undefined) {
      // valida a senha
      const correct = bcrypt.compareSync(password, user.password); // 1- pass do form, 2- q o usuario digitou
      // se a senha for valida
      if (correct) {
        // autoriza o login
        req.session.user = {
          id: user.id,
          email: user.email,
        };
        // res.send(`Usuário logado: <br>
        //  ID: ${req.session.user['id']}<br>
        //  Email: ${req.session.user['email']}`)

        // enviae uma mensagem de sucesso
        req.flash('success','Login efetuado com sucesso!')

        res.redirect("/");
      } else {
        // senha não valida
        req.flash('danger', 'A senha informada está incorreta! Tente novamente')
        res.redirect("/login")
      }
    } else {
      // se o usuario não existe
      req.flash('danger','O usuário informado não existe! Verifique os dados digitados')
        res.redirect("/login")
    }
  });
});

export default router;
