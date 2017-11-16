module.exports = (sequelize, DataTypes) => {

  let users = sequelize.define('user', {
    username: DataTypes.STRING,
    firstname: DataTypes.STRING,
    lastname: DataTypes.STRING,
    email:DataTypes.STRING,
    birthday:DataTypes.DATE,
    passeword:DataTypes.STRING,
    phone_number:DataTypes.STRING

  });

  return users;
};