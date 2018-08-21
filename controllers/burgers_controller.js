var express = require("express");
var router = express.Router();

var burger = require("../models/burger")

router.get("/", function (req, res) {
    burger.all(function(data) {
        var obj = {
            burgers: data
        };
        console.log(obj);
        res.render("index", obj);
    });
});

router.post("/add", function (req, res) {
    console.log(body)
    res.send("route works")
    // burger.create([
    //     "name", "devoured"
    // ], [req.body.name, false],
    //     function () {
    //         res.send("works")
    //     });
});

router.put("/:id", function (req, res) {
    var condition = "id = " + req.params.id;
    console.log("condition" + condition)


    burger.update({
        devoured: req.body.devoured
    }, condition, function (result) {
        if (result.changedRows == 0) {
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });

});

router.delete("/:id", function (req, res) {
    var condition = "id = " + req.params.id;

    burger.delete(condition, function (result) {
        if (result.affected == 0) {
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});

module.exports = router;
