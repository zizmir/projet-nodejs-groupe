//
const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');

// creating a db object
let db = {};

// connexion to the db
db.Sequelize = new Sequelize('database', 'username', '', {
  host: 'localhost',
  dialect: 'postgres'
});

//
let model_pathname = path.join(__dirname, 'models');

//
fs
  .readdirSync(model_pathname)
  .filter((filename) => {
    return (filename.indexOf('.') !== 0);
  })
  .forEach((filename) => {
    let mode = db.Sequelize.import(path.join(model_pathname, filename));
  });

//
module.exports = db;