import sequelize from "sequelize";
import connection from "../config/sequelize-config.js";

const user = connection.define('users', {
  email: {
    type: sequelize.STRING,
    allowNull: false,
  },
  password: {
    type: sequelize.STRING,
    allowNull: false,
  },
});

user.sync({ force: false });

export default user;
