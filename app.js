/**
* Module dependencies.
*/
var express = require('express')
  , routes = require('./routes')
  , user = require('./routes/user')
  , http = require('http')
  , path = require('path')
  , bodyParser = require('body-parser')
  , book = require('./routes/books');

//var methodOverride = require('method-override');
var session = require('express-session');
var app = express();
var mysql      = require('mysql');
app.get('/', routes.index);//call for main index pagevar bodyParser=require("body-parser");
var connection = mysql.createConnection({
              host     : 'localhost',
              user     : 'root',
              password : 'root',
              database : 'CheckMyBooks'
            });
 
connection.connect();
 
global.db = connection;
 
// all environments
//app.set('port', process.env.PORT || 8080);
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({
              secret: 'andromeda',
              resave: false,
              saveUninitialized: true,
              cookie: { maxAge: 120000,
              unset: 'destroy'}
            }))
 
// development only
 

app.get('/signup', user.signup);//call for signup page
app.post('/signup', user.signup);//call for signup post 
app.get('/login', routes.login);//call for login page
app.post('/login', user.login);//call for login post

app.get('/home/aboutus', user.aboutus);//call for about-us page
app.get('/home/privacypolicy', user.privacypolicy);//call for privacy policy page
app.get('/home/termsconditions', user.termsconditions);//call for terms and conditions page
app.get('/home/logout', user.logout);//call for logout
app.get('/home/profile',user.profile);//to render users profile
app.get('/home/updateprofile',user.updateprofile);//to render update profile page
app.put('/home/updateuserprofile',user.updateuserprofile);//call for updting user's profile
app.delete('/home/deleteuser',user.deleteuser);//delete an user account

app.get('/home/addbook', book.addbook);//to render  add book page
app.post('/home/addbookdetails', book.addbookdetails);//to add a new book 
app.get('/home/dashboard', book.dashboard);//displays books after log in
app.get('/home/bookdescription:bookId', book.bookdescription);//displays books after log in

//Middleware
//app.listen(8080)
module.exports = app;
