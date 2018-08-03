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



router.post("/api/books", function (req, res) {
    book.create(["title", "author", "readed"], [req.body.title, req.body.author, req.body.readed], function (result) {
        res.json({
            id: result.insertId
        })
    })
});

router.put("/api/books/update/:id", function (req, res) {
    var condition = "id = " + req.params.id;
    console.log("condition", condition);
    book.update({ readed: req.body.readed }, condition, function (result) {
        if (result.changedRows == 0) {
            // If no rows were changed, then the ID must not exist, so 404
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});

module.exports = router;