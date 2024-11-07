import sequelize from "sequelize";
import connection from "../config/sequeliza-config.js";

const imagem = connection.define("imagens", {
  file: {
    type: sequelize.STRING,
    allowNull: false,
  },
});

imagem.sync({ force: false });
export default imagem;
