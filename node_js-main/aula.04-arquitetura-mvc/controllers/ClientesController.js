import express from 'express' //ES6 modules
const router = express.Router()

// rota clientes
router.get("/clientes", (req, res) => {
    const clientes = [
        {nome: "isabely Lemos", cpf: "123.456.765-00", endereco: "Rua Pacarai, 123 - Bairro Flor da Vila - Jacupiranga - SP"},
        {nome: "isabely Lemos", cpf: "123.456.765-00", endereco: "Rua Pacarai, 123 - Bairro Flor da Vila - Jacupiranga - SP"},
        {nome: "isabely Lemos", cpf: "123.456.765-00", endereco: "Rua Pacarai, 123 - Bairro Flor da Vila - Jacupiranga - SP"},
        {nome: "isabely Lemos", cpf: "123.456.765-00", endereco: "Rua Pacarai, 123 - Bairro Flor da Vila - Jacupiranga - SP"}
    ]

    //cria uma variavel para a pag clientes com os valores dos arrays de clientes
    res.render("clientes", {
        clientes : clientes
    })
})

export default router