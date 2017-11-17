const bcrypt = require('bcrypt');

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

  },{
      hooks:{
        beforeCreate: function(){
            //if(user.password != user.password_confirm){
            //    throw("Error password doesn't match!");
            //}

            let salt = bcrypt.genSaltSync();
            user.password= bcrypt.hashSync(user.password, salt);
        }

      }
  });

  users.prototype.checkPassword= (user)=>{
      let status = false ;
        if(this.password == user.password){
            status = true;
        }else{
            status = false
        }
        return status;
    };
  return users;
};


