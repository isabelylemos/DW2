import sequelize from "sequelize";
import connection from "../config/sequelize-config.js";

const filme = connection.define("filmes", {
  titulo: {
    type: sequelize.STRING,
    allownull: false,
  },
  genero: {
    type: sequelize.STRING,
    allownull: false,
  },
  duracao: {
    type: sequelize.INTEGER,
    allownull: false,
  },
});

filme.sync({ force: false });

export default filme;
