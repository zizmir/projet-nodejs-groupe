const express = require('express');
const router = express.Router();

const db = require('../database/init');

router.get('/', (req, res) => {
  // console.log(`test print module`);

  db.module.findAll().then((modules) => {
    res.render('modules', {
      modules
    });
  });
});

module.exports = router