const express = require('express');
const router = express.Router();
const db = require('../database/init');

router.get('/', (req, res) => {
  console.log(`welcome to the profile page`);
  res.render('profile');
});

module.exports = router;