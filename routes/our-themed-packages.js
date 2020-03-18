
var express = require("express");
var mysql = require("mysql");
var router = express.Router();
var upload = require("./multer");
var pool = require("./pool");
  let table = "our-themed-packages";

router.get("/", (req, res) => {
  res.render(`our-themed-packages`);
});

router.get("/family-tour-packages", (req, res) => {
  res.render("our-themed-packages/family-tour-packages");
}
);

router.get("/fixed-departure-tour-packages", (req, res) => {
  res.render("our-themed-packages/fixed-departure-tour-packages");
}
);

router.get("/friends-tour-packages", (req, res) => {
  res.render("our-themed-packages/friends-tour-packages");
}
);

router.get("/honeymoon-tour-packages", (req, res) => {
  res.render("our-themed-packages/honeymoon-tour-packages");
}
);


router.get("/solo-tour-packages", (req, res) => {
  res.render("our-themed-packages/solo-tour-packages");
}
);


router.get("/spritual-tour-packages", (req, res) => {
  res.render("our-themed-packages/spritual-tour-packages");
}
);


router.get("/wildlife-tour-packages", (req, res) => {
  res.render("our-themed-packages/wildlife-tour-packages");
}
);

module.exports = router;
