// importando o sequelize
import sequelize from "sequelize";

// criando os dados de conexão com o banco de dados
const connection = new sequelize({
    dialect: 'mysql',
    host: 'localhost',
    username: 'root',
    password: '',
    database: 'galerias',
    timezone: '-03:00'
})

export default connection
