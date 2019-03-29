const express = require('express');
const app = express()
const port = 4200

var bodyParser = require('body-parser');
var ejs = require('ejs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static('public'))

app.set('view engine', 'ejs')


app.get('/', function(req, res) {
	res.render('main.ejs', {port:port});
})

app.post('/userCreate', function(req, res) {
	response = {
		username : req.body.username
    };

	console.log(response)
	res.redirect('http://localhost:' + port + '/user/' + req.body.username)
})

app.get('/user', function(req, res) {
	res.render('userCreate.ejs', {port:port});
})

app.get('/user/:id', function(req, res) {
	res.render('user.ejs', {username:req.params.id, port:port});
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))