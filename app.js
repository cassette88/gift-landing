var express         = require("express"),
    app             = express(),
    bodyParser      = require("body-parser");


const port = process.env.PORT || 3000;
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));


app.get('/', function(req, res) {
    res.render("landing");
})


  app.listen(port,() => {
	console.log(`Server is up on port ${port}`);
});
