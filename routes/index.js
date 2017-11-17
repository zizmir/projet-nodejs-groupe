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
	let userForm = {
		username: req.body.username,
		password: req.body.password
	}
	db.user.findOne({where: {username: userForm.username}}).then(user => {
		if(!user)
		{
			res.redirect('/sign-in');
		}else if (user.checkPassword(userForm.password)) {
			req.session.user = user.username;
			res.redirect('/');
		}else{
			res.redirect('/sign-in');
		}

	})
	// res.render('/')
});
router.get('/sign-up', (req, res) => {

  
    res.render('sign-up');
});
router.post('/sign-up', (req, res) => {

	let user = {
		username: req.body.username ,
		firstname: req.body.firstname,
		lastname: req.body.lastname,
		password: req.body.password,
		email: req.body.email,

	};
	console.log(req.body)
	db.user.create(user);
  
    res.render('sign-up')
});

module.exports = router;
