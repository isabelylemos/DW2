import sequelize from "sequelize";
import connection from "../config/sequelize-config.js";

const imagem = connection.define("imagens", {
  file: {
    type: sequelize.STRING,
    allowNull: false,
  },
});

imagem.sync({ force: false });

export default imagem;