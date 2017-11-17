const express = require('express');
const path = require('path');
const moment = require('moment');
const bodyParser = require('body-parser');
const _ = require('lodash');
const session = require('express-session');

const db = require('./database/init');

const app = express();

const index = require('./routes/index');
const users = require('./routes/users');
const modules = require('./routes/modules');

const port = process.argv[2] || '4242';
app.engine('ejs', require('express-ejs-extend'));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

// Routes

app.use(session({
  secret: 'keyboard cat'
}));
app.use('/', index);
app.use('/users', users);
app.use('/modules', modules);

// catch 404 and forward to error handler
app.use((req, res, next) => {
  let err = new Error('Not Found');
  err.status = 404;
  next(err);
});

db.sequelize.sync().then(() => {
  console.log("Database config success!");

  if (db.module.count().then(c => {
      if (c == 0) {
        const content = require(path.join(__dirname, 'data', 'modules.json'));
        _.each(content.modules, (item) => {
          db.module.create(item).then(modules => {
            console.log(`Module ${modules.name} add successfully`);
          });
        });
      }
    }));

  app.listen(port, (err) => {
    console.log(`Server is running on port ${port}`);
  });

}).catch((err) => {
  console.error('Unable to connect to the database:', err);
});