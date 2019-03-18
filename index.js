
const express = require('express');
const path = require('path');
const cons = require('consolidate');

const gaussian = require('./public/gaussian');
const multiplier = require('./public/multiplier');
const inverse = require('./public/inverse');
const transpose = require('./public/transpose');
const doitall = require('./public/doitall');

const app = express();

app.engine('html', cons.swig);
app.set('port', (process.env.PORT || 8080));
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'html');
app.set('views', path.join(__dirname, 'views'));

app.get('/', function(req, res) {
	res.render('index');
});

app.get('/doitall', doitall.learn);
app.get('/transpose', transpose.transpose);
app.get('/inverse', inverse.inverse);
app.get('/multiplier', multiplier.multiply);
app.get('/gaussian', gaussian.identityMatrix);


app.listen(app.get('port'), () => {
    console.log('Node application is running on PORT 8080');
});

module.exports = app;

console.log("The app works");

