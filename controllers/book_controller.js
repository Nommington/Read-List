var express = require("express");
var router = express.Router();
var book = require("../models/book.js");

router.get("/", function (req, res) {
    res.redirect("/books");
});

router.get("/books", function (req, res) {
    book.all(function (data) {
        var hbsObject = { books: data };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

router.post("/books/create", function(req,res) {
    book.create(["title", "author", "readed"], [req.body.title, req.body.author, req.body.readed], function() {
        res.redirect("/books");
    });
});

router.put("/books/update/:id", function(req, res) {
    var condition = "id = " + req.params.id;
    console.log("condition", condition);
    book.update({ readed: req.body.readed}, condition, function() {
        res.redirect("/books");
    });
});

module.exports = router;