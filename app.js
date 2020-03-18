var createError = require('http-errors');
var cookieSession = require('cookie-session');
var express = require('express');
var path = require('path');
var flash = require('express-flash');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

// Add Routes
var indexRouter = require('./routes/index');
var admindashboard= require('./routes/admindashboard');
var login = require("./routes/login");
var my_profile = require("./routes/my-profile");
var allusers = require("./routes/allusers");
var our_destination = require("./routes/our-destination");
var our_themed_packages = require("./routes/our-themed-packages");
var about_jetsave = require("./routes/about-jetsave");
var signup = require("./routes/signup");
var blogarea = require("./routes/blogarea");
var addtype = require("./routes/addtype");
var travelogue_guest = require("./routes/travelogue-guest");
var edittravelogue = require("./routes/edittravelogue");
var profile_bookmark = require("./routes/profile_bookmark");
var contactus = require("./routes/contactus");
var editform = require("./routes/editform");
var formdata = require("./routes/formdata");
var success = require("./routes/success");
var Term_condition = require("./routes/Term-condition");
var blog = require("./routes/blog");
var tours = require("./routes/tours");
var itineary = require('./routes/itineary');
var blogs = require('./routes/blogs');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cookieSession({
  name: 'session',
  keys: ['kaushal'],

  // Cookie Options
  maxAge: 24 * 60 * 60 * 1000 // 24 hours
}))


app.use(flash());

// Use Routes
app.use('/', indexRouter);
app.use("/admindashboard",admindashboard);
app.use("/login", login);
app.use("/my-profile", my_profile);
app.use("/allusers", allusers);
app.use("/our-destination", our_destination);
app.use("/our-themed-packages", our_themed_packages);
app.use("/about-jetsave",about_jetsave);
app.use("/signup", signup);
app.use("/blogarea", blogarea);
app.use("/addtype", addtype);
app.use("/travelogue-guest", travelogue_guest);
app.use("/edittravelogue", edittravelogue);
app.use("/profile_bookmark", profile_bookmark);
app.use("/contactus", contactus);
app.use("/editform", editform);
app.use("/formdata", formdata);
app.use("/success", success);
app.use("/Term-condition", Term_condition);
app.use("/blog", blog);
app.use("/tours", tours);
app.use("/itineary", itineary);
app.use("/blogs", blogs);


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
