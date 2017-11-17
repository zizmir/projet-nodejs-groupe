module.exports = (sequelize, DataTypes) => {

  let modules = sequelize.define('model', {
    teacher: DataTypes.STRING,
    subject: DataTypes.STRING
  });

  return modules;
};