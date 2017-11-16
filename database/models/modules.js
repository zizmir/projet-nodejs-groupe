module.exports = (sequelize, DataTypes) => {

  let modules = sequelize.define('user', {
    teacher: DataTypes.STRING,
    subject: DataTypes.STRING
  });

  return modules;
};