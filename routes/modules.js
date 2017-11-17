const express = require('express');
const router = express.Router();

const db = require('../database/init');

router.get('/', (req, res) => {
  // console.log(`test print module`);


  let fakedata = [{
      subject: "Swift",
      teacher: "Thom",
      state: true
    },
    {
      subject: "NodeJS",
      teacher: "Majdi",
      state: false
    },
    {
      subject: "Python",
      teacher: "Cobra",
      state: true
    },
    {
      subject: "Go",
      teacher: "Google",
      state: false
    }
  ]



  res.render('modules', { fakedata });
});

module.exports = router;