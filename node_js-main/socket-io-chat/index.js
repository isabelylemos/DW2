//importando o express (commonJS)
const express = require("express");
const app = express();

//criando instancia de servidor HTTP do Node.js
const http = require("http").createServer(app);

const io = require("socket.io")(http);

io.on("connection", (socket) => {
  socket.on("join", (data) => {
    console.log(`${data.nickname} entrou no chat.`);
    // mandando os dados para o front
    io.emit("join", data);
  });
  // recebendo a msg do chat
  socket.on("msg", (data) => {
    console.log(data)
    io.emit("showmsg", data)
  })
});

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index");
});

const port = 3000;
const host = "0.0.0.0"
http.listen(port,host, () => {
  console.log(`Aplicação rodando em http://localhost:${port}`);
});
