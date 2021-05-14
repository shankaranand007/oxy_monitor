var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var bodyParser = require('body-parser')
const jwt = require('jsonwebtoken');

var app = express();

//database
// require('./bin/database')


app.use(bodyParser.json());

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// app.use((req,res,next)=>{
//   let url = req.originalUrl.split('/')
//   let len_url = url.length;
//   let token = req.headers.authorization;
//   let third_params 
//   let second_params
//   let last
//   if(len_url >= 3){
//     third_params = url[len_url-3]
//     second_params = url[len_url-2]
//     last = url[len_url-4]

//   }
//   console.log(url[len_url-1],'sdf',url)
//   if(second_params == 'otp_verification' || third_params == 'msg92' || last == 'mail' || url[len_url-1] == 'apiSecurity' || url[len_url-1] == 'login' || url[len_url-1] == 'count' || url[len_url-1] == 'data' || url[len_url-1] == '' || url[len_url-1] == 'product'|| url[len_url-1] == 'all'){
//     next()
//   }else{
//     jwt.verify(token, 'chewy@1#4', function(err, decoded) {
//       console.log(decoded,err,'err') 
//       if(err){
//         res.send('Invalid  token')
//       }else{
//           next()
//       }
//     });
//   } 
// })
const cors = require('cors');

app.use(cors());

// app.use((req,res,next)=>{
//   let token = req.headers.authorization;
//       jwt.verify(token, 'chewy@1#4', function(err, decoded) {
//       console.log(decoded,err,'err') 
//       if(err){
//         res.send('Invalid  token')
//       }else{
//           next()
//       }
//     });
// })

//index router
require('./src/router/index')(app)

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));



// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
