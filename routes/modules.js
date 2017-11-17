const express = require('express');
const router = express.Router();

const db = require('../database/init');

router.get('/', (req, res) => {
  // console.log(`test print module`);

  res.render('modules');
});

module.exports = router;