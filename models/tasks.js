/*
  NTask model is 1 User to N Tasks.
  To implement this association relationship in our model, we use a model's attribute called classMethods.
  This allow us to include static function called associate().

  The sequelize define("Tasks") function creates and changes a table. This only happens during boot time.
  These are 3 parameters of our function:
    1. Name of the table.
    2. Fields in the table:
        id: primary key, autoincrement value
        title: string, cannot be empty
        done: default value is false.
    3. Pass static Function
*/

module.exports = (sequelize, DataType) => {
  const Tasks = sequelize.define(
    "Tasks",
    {
      id: {
        type: DataType.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      title: {
        type: DataType.STRING,
        allowNull: false,
        validate: {
          notEmpty: true,
        },
      },
      done: {
        type: DataType.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
    },
    {
      classMethods: {
        associate: (models) => {
          Tasks.belongsTo(models.Users);
        },
      },
    }
  );

  return Tasks;
};
