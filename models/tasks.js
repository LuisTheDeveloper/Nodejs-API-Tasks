// params will serves as a base to send SQL query filters
// callback function returns asynchronously a static array of tasks
module.exports = (app) => {
  return {
    findAll: (params, callback) => {
      return callback([{ title: "Buy coffee" }, { title: "Fix Laptop" }]);
    },
  };
};
