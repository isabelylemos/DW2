import sequelize from "sequelize"
import connection from "../config/sequelize-config.js"

const cliente = connection.define('clientes',{
   nome: {
    type: sequelize.STRING,
    allowNull: false
   },
   cpf: {
    type: sequelize.STRING,
    allownull: false
   },
   endereco: {
    type: sequelize.STRING,
    allownull: false
   }
})

cliente.sync({force:false})

export default cliente