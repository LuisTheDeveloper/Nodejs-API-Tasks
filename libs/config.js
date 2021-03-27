/* Connection settings file between Sequelize and SQLite3
    params:
        .dialect: informs which database will be used
        .storage: specific to SQLite3 defines the directory where the db files are recorded
        .define.underscored: standardizes the tables fields names to appear in lowercase letters with an underscore.

*/

module.exports = {
  database: "ntask",
  username: "",
  password: "",
  params: {
    dialect: "sqlite",
    storage: "ntask.sqlite",
    define: {
      underscored: true,
    },
  },
};
