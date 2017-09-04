
const express = require('express');
const app = express();
const mustache = require('mustache-express')
const session = require('express-session')
const bodyParser = require('body-parser')
app.engine('mustache', mustache());
app.set('view engine', 'mustache')
app.set('views','./views')
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static('public'))

app.listen(3000, function(){
  console.log('app online')
});

app.get('/', function (req, res){
    res.render('home')
})
app.get('/login', function (req, res){
    res.render('login')
})
app.get('/signup', function (req, res){
    res.render('signup')
})
app.post

app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true
}))


 app.use(function(req,res,next){
   if (req.session.userid){
     const user = new user();
     user.username = req.body.username
     user.save()

   }
   else {
     res.redirect('/')
   }
 })
