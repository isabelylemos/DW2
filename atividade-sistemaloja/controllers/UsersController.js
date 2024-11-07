import express from "express";
import User from "../models/Usuario.js";
import bcrypt from "bcrypt";

const router = express.Router();

router.get("/login", (req, res) => {
  res.render("login", {
    loggedOut: true,
    messages: req.flash(),
  });
});

router.get("/logout", (req, res) => {
  req.session.user = undefined;
  res.redirect("/");
});

router.get("/cadastros", (req, res) => {
  res.render("cadastro", {
    loggedOut: true,
    messages: req.flash(),
  });
});

router.post("/createUser", (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  User.findOne({ where: { email: email } }).then((user) => {
    if (user == undefined) {
      const salt = bcrypt.genSaltSync(10);
      const hash = bcrypt.hashSync(password, salt);
      User.create({
        email: email,
        password: hash,
      }).then(() => {
        res.redirect("/login");
      });
    } else {
      req.flash("danger", "O usuário já está cadastrado. Faça o login");
      res.redirect("/cadastros");
    }
  });
});

router.post("/authenticate", (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  User.findOne({
    where: {
      email: email,
    },
  }).then((user) => {
    if (user != undefined) {
      const correct = bcrypt.compareSync(password, user.password);
      if (correct) {
        req.session.user = {
          id: user.id,
          email: user.email,
        };

        req.flash("success", "Login efetuado com sucesso!");
        res.redirect("/");
      } else {
        req.flash(
          "danger",
          "A senha informada está incorreta! Tente novamente"
        );
        res.redirect("/login");
      }
    } else {
      req.flash(
        "danger",
        "O usuário informado não existe! Verifique os dados digitados"
      );
      res.redirect("/login");
    }
  });
});

export default router;
