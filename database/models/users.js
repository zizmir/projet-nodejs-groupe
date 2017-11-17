module.exports = (sequelize, DataTypes) => {

  let users = sequelize.define('user', {
    username: DataTypes.STRING,
    firstname: DataTypes.STRING,
    lastname: DataTypes.STRING,
    email:DataTypes.STRING,
    birthday:DataTypes.DATE,
    password:DataTypes.STRING,
    phone_number:DataTypes.STRING,
    password_confirm:DataTypes.VIRTUAL

  });
    // users.prototype.checkPassword((user)=>{
    //
    //
    //
    //
    //
    // });
  return users;
};


