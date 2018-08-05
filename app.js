var express         = require("express"),
    app             = express(),
    bodyParser      = require("body-parser"),
    favicon         = require('serve-favicon'),
    path            = require('path');

const sslRedirect = require('heroku-ssl-redirect');
const port = process.env.PORT || 3000;
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));
app.use('/favicon.ico', express.static('images/favicon.png'));
app.use(favicon(path.join(__dirname, 'public', 'favicon.png')));
app.use(sslRedirect());




app.get('/', function(req, res) {
    res.render("landing");
})

app.get('/test', function(req, res) {
    res.render("splash");
})


  app.listen(port,() => {
	console.log(`Server is up on port ${port}`);
});
