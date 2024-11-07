import express from "express";
const router = express.Router();

// rota pedidos
router.get("/pedidos", (req, res) => {
  
    const listaPedidos = [
      {numero: 21, valor: 344},
      {numero: 18, valor: 238},
      {numero: 33, valor: 195},
      {numero: 45, valor: 101},
      {numero: 34, valor: 90},
      {numero: 42, valor: 85},
      {numero: 12, valor: 72}
    ];
  
    res.render("pedidos", {
      listaPedidos : listaPedidos
    });
  });

  export default router
  