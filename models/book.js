var orm = require("../config/orm.js");
var book = {
    all: function (cb) {
        orm.all("books", function (res) {
            cb(res);
        });
    },
    create: function (cols, vals, cb) {
        orm.create("books", cols, vals, function (res) {
            cb(res);        
        });
    },
    update: function (objColVals, condition, cb) {
        orm.update("books", objColVals, condition, function (res) {
            cb(res);
        });
    }
};

module.exports = book;