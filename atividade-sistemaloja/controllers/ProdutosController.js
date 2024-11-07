import express from "express";
import Auth from "../middleware/Auth.js"
const router =express.Router(); 

// rota produtos
router.get("/produtos",Auth, (req, res) => {
    const listaProdutos = [
      { nome: "Pizza de Quatro Queijos", preco: 50, categoria: "Grande" },
      { nome: "Pizza de Calabresa", preco: 35, categoria: "Pequena" },
      { nome: "Pizza de Marguerita", preco: 48, categoria: "Grande" },
      { nome: "Pizza de Portuguesa", preco: 50, categoria: "Grande" },
      { nome: "Pizza de Romanesca", preco: 40, categoria: "Média" },
      { nome: "Pizza de Frango com Catupiry", preco: 52, categoria: "Grande" },
      { nome: "Pizza de Maracatu", preco: 38, categoria: "Média" },
    ];
  
    res.render("produtos", {
      listaProdutos: listaProdutos
    });
  });

  export default router
  