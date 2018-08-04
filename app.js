var express         = require("express"),
    app             = express(),
    bodyParser      = require("body-parser");


const sslRedirect = require('heroku-ssl-redirect');

const port = process.env.PORT || 3000;
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));
app.use(sslRedirect());




app.get('/', function(req, res) {
    res.render("landing");
})


  app.listen(port,() => {
	console.log(`Server is up on port ${port}`);
});
