require("dotenv").config()

var express = require('express')
var app = express()
var exphbs = require('express-handlebars')
var bodyParser = require('body-parser')

var PORT = process.env.PORT || 8000;

app.use(express.static("public"));

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

app.engine('handlebars', exphbs({defaultLayout: 'main'}))
app.set('view engine', 'handlebars')

var routes = require("./controllers/burgers_controller")

app.use(routes);

app.listen(PORT, function(){
    console.log("Server is listening on PORT: " +  PORT)
})