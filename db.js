import Sequelize from "sequelize";

const config = require("./libs/config.js");
let sequelize = null;

// const connectToSqlite = () => {
//   if (!sequelize) {
//     sequelize = new Sequelize(
//       config.database,
//       config.username,
//       config.password,
//       config.params
//     );
//   }
//   return sequelize;
// };

//module.exports = connectToSqlite;

module.exports = () => {
  if (!sequelize) {
    sequelize = new Sequelize(
      config.database,
      config.username,
      config.password,
      config.params
    );
  }
  return sequelize;
};
