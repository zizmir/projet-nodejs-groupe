module.exports = (sequelize, DataTypes) => {

  let modules = sequelize.define('module', {
    teacher: DataTypes.STRING,
    subject: DataTypes.STRING
  });

  return modules;
};