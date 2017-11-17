const express = require('express');
const router = express.Router();

const db = require('../database/init');

/* GET home page. */
router.get('/', (req, res) => {
  db.user.count().then((nb) => {
    res.render('index', { count: nb });
  });
});
router.get('/sign-in', (req, res) => {
  
    res.render('sign-in')
});


router.post('/sign-in',(req,res)=>{

	console.log('yoh')
	// res.render('/')
});
router.get('/sign-out', (req, res) => {
  
    res.render('sign-out')
});


module.exports = router;
