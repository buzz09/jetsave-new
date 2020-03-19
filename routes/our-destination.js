var express = require("express");
var mysql = require("mysql");
var router = express.Router();
var upload = require("./multer");
var pool = require("./pool");
let table = "our-destination";

router.get("/", (req, res) => {
  res.render(`our-destination`);
});


router.get("/India-Sri-Lanka-Destination", (req, res) => {
    res.render("our-destination/India-Sri-Lanka-Destination");
  }
);

router.get("/africa", (req, res) => {
  res.render("our-destination/africa");
}
);


router.get("/austraila", (req, res) => {
  res.render("our-destination/austraila");
}
);

router.get("/East-Europe", (req, res) => {
  res.render("our-destination/East-Europe");
}
);

router.get("/middle-east-asia", (req, res) => {
  res.render("our-destination/middle-east-asia");
}
);


router.get("/north-america", (req, res) => {
  res.render("our-destination/north-america");
}
);


router.get("/south-america", (req, res) => {
  res.render("our-destination/south-america");
}
);


router.get("/South-East-Asia", (req, res) => {
  res.render("our-destination/South-East-Asia");
}
);


router.get("/west-europe", (req, res) => {
  res.render("our-destination/west-europe");
}
);
  
module.exports = router;