const express = require('express');
const path = require('path');
const app = express();
const port = process.argv[2] || 8080;

app.set('view engine', 'ejs');

app.set('views', path.join(__dirname, 'public'));

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {


  res.render('index');

});
app.get('*', (req, res) => {

  res.render('404');
});

app.listen(port, (err) => {
  if (err) throw err;

  console.log(`server listen at port ${port}`);
})