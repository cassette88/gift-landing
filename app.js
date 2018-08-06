var express         = require("express"),
    app             = express(),
    bodyParser      = require("body-parser"),
    favicon         = require('serve-favicon'),
    path            = require('path');

let Parser = require('rss-parser');
let parser = new Parser();

const sslRedirect = require('heroku-ssl-redirect');
const port = process.env.PORT || 3000;
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));
app.use('/favicon.ico', express.static('images/favicon.png'));
app.use(favicon(path.join(__dirname, 'public', 'favicon.png')));
app.use(sslRedirect());

// const getFeed = (async () => {
//
//   let feed = await parser.parseURL('https://www.reddit.com/.rss');
//   console.log(feed.title);
//
//   feed.items.forEach(item => {
//     console.log(item.title + ':' + item.link)
//   });
//
// })();


app.get('/', function(req, res) {
    res.render("landing");
});

app.get('/test', function(req, res) {
    res.render("splash");
});




app.get('/maui', function (req, res){
  //var feedMaui = {};
//  const CORS_PROXY = "https://cors-anywhere.herokuapp.com/"
  const URL =  'https://www.google.com/alerts/feeds/13505578085637347686/8683596871779592060';

  parser.parseURL(URL, function (err, parsed){
      if(err){
        console.log("Unable to parse");
      }  else {
          //var feedMaui = JSON.stringify({feed: parsed});
          res.json(parsed);
        }
      });

  //  console.log(typeof feedMaui)
});
    //console.log(feed.title);
    //feedMaui = JSON.stringify(feed);
    // feed.items.forEach(item => {
    //   console.log(item.title + ':' + item.link);
    //  feedMaui  += JSON.stringify(item);
    //    res.json(item.title + ':' + item.link);
//    });
  //  res.send(feedMaui);
  //  console.log(feedMaui);



  app.listen(port,() => {
	console.log(`Server is up on port ${port}`);
});
