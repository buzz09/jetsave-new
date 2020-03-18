var express = require("express");
var mysql = require("mysql");
var router = express.Router();
var pool = require("./pool");
let table = "blogs";

router.get("/", (req, res) => {
    res.render(`blogs`);
});

module.exports = router;
