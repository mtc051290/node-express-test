var express = require('express');



var app = express();

api.use(bodyParser.urlencoded({ extended: true}));
api.use(bodyParser.json());

api.use(cors());
api.use((req, res, next)=>{
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});


app.get('/', function (req, res) {
   res.send('Hello World');
})

var server = app.listen(8000, function () {
   console.log("Express App running at http://127.0.0.1:5000/");
})