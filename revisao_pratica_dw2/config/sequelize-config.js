import sequelize from "sequelize";

const connection = new sequelize({
  dialect: "mysql",
  host: "localhost",
  username: "root",
  password: "",
  database: "filmes",
  timezone: "-03:00",
});

export default connection;
