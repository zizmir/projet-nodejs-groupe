module.exports = (sequelize, DataTypes) => {

  let modules = sequelize.define('modules', {
    teacher: DataTypes.STRING,
    subject: DataTypes.STRING
  });

  return modules;
};