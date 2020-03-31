var express = require("express");
var mysql = require("mysql");
var router = express.Router();
var upload = require("./multer");
var pool = require("./pool");
let table = "my-blogs";
var slug = require('slug')
   
router.get(`/`, (req, res) => {
    const { id } = req.query
    pool.query(`select * from editblog where blogtext = '${id}'`, (err, result) => {
        if (err) throw err
        else {
            res.render('my-blogs',{result : result});
        }   
    })
 });

module.exports = router;
