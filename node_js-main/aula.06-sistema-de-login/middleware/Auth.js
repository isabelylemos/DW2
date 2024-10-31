function Auth(req, res, next) {
  // next é usado para permitir que o middleware de acesso a outra rota
  if (req.session.user != undefined) { // verifica se o usuario esta logado
    next();
  } else {
    res.render("login", {
        loggedOut: true
    });
  }
}

export default Auth;
