var createError = require('http-errors');
var cookieSession = require('cookie-session');
var express = require('express');
var path = require('path');
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
var family_tour_packages = require("./routes/family-tour-packages");
var wildlife_tour_packages = require("./routes/wildlife-tour-packages");
var honeymoon_tour_packages = require("./routes/honeymoon-tour-packages");
var solo_tour_packages = require("./routes/solo-tour-packages");
var fixed_departure_tour_packages = require("./routes/fixed-departure-tour-packages");
var about_jetsave = require("./routes/about-jetsave");
var signup = require("./routes/signup");
var blogarea = require("./routes/blogarea");
var addtype = require("./routes/addtype");
var travelogue_guest = require("./routes/travelogue-guest");
var edittravelogue = require("./routes/edittravelogue");
var editblog = require("./routes/editblog");
var profile_bookmark = require("./routes/profile_bookmark");
var contactus = require("./routes/contactus");
var editform = require("./routes/editform");
var solotravel = require("./routes/solotravel");
var formdata = require("./routes/formdata");
var success = require("./routes/success");
var friends_tour_packages = require("./routes/friends-tour-packages");
// var readblog = require("./routes/readblog");
var Term_condition = require("./routes/Term-condition");
var India_Sri_Lanka_Destination = require("./routes/India-Sri-Lanka-Destination");
var East_Europe = require("./routes/East-Europe");
var South_East_Asia = require("./routes/South-East-Asia");

var north_america = require("./routes/north-america");
var west_europe = require("./routes/west-europe");
var africa = require("./routes/africa");
var austraila = require("./routes/austraila");
var blog = require("./routes/blog");
var south_america = require("./routes/south-america");
var middle_east_asia = require("./routes/middle-east-asia");
var tours = require("./routes/tours");
var spritual_tour_packages = require("./routes/spritual-tour-packages");
var itineary = require('./routes/itineary');

var slug = require('slug')
//var facebooklogin = require('./routes/facebooklogin');
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


// Use Routes
app.use('/', indexRouter);
app.use("/admindashboard",admindashboard);
app.use("/login", login);
app.use("/my-profile", my_profile);
app.use("/allusers", allusers);
app.use("/our-destination", our_destination);
app.use("/our-themed-packages", our_themed_packages);
app.use("/family-tour-packages",family_tour_packages);
app.use("/honeymoon-tour-packages",honeymoon_tour_packages);
app.use("/wildlife-tour-packages",wildlife_tour_packages);
app.use("/solo-tour-packages",solo_tour_packages);
app.use("/fixed-departure-tour-packages", fixed_departure_tour_packages);
app.use("/about-jetsave",about_jetsave);


app.use("/signup", signup);
app.use("/blogarea", blogarea);
app.use("/addtype", addtype);
app.use("/travelogue-guest", travelogue_guest);
app.use("/edittravelogue", edittravelogue);
app.use("/editblog", editblog);
app.use("/profile_bookmark", profile_bookmark);
app.use("/contactus", contactus);
app.use("/editform", editform);
app.use("/solotravel", solotravel);
app.use("/formdata", formdata);
app.use("/success", success);
// app.use("/readblog", readblog);
app.use("/friends-tour-packages", friends_tour_packages);
app.use("/Term-condition", Term_condition);
app.use("/India-Sri-Lanka-Destination", India_Sri_Lanka_Destination);
app.use("/East-Europe", East_Europe);
app.use("/South-East-Asia", South_East_Asia);
app.use("/north-america", north_america);
app.use("/west-europe", west_europe);
app.use("/africa", africa);
app.use("/austraila", austraila);
app.use("/blog", blog);
app.use("/south-america", south_america);
app.use("/middle-east-asia", middle_east_asia);
app.use("/tours", tours);
app.use("/itineary", itineary);

app.use("/spritual-tour-packages", spritual_tour_packages);

slug.defaults.mode = 'pretty';
slug.defaults.modes['rfc3986'] = {
  replacement: '-',      // replace spaces with replacement
  symbols: true,         // replace unicode symbols or not
  remove: null,          // (optional) regex to remove characters
  lower: true,           // result in lower case
  charmap: slug.charmap, // replace special characters
  multicharmap: slug.multicharmap // replace multi-characters
};

slug.defaults.modes['pretty'] = {
  replacement: '-',
  symbols: true,
  remove: /[.]/g,
  lower: false,
  charmap: slug.charmap,
  multicharmap: slug.multicharmap
};

//app.use('/facebooklogin',facebooklogin);
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
