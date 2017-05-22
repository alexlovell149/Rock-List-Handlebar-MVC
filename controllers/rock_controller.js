var express = require("express");

var router = express.Router();

// Import the model (cat.js) to use its database functions.
var rock = require("../models/rock.js");

router.get("/", function(req, res) {
  rock.selectAll(function(data) {
    var hbsObject = {
      bands: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.post("/", function(req, res) {
  rock.insertOne([
    "band name", "hall of fame"
  ], [
    req.body.band_name, req.body.hall_of_fame
  ], function() {
    res.redirect("/");
  });
});

router.put("/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  console.log("condition", condition);

  rock.updateOne({
    sleepy: req.body.sleepy
  }, condition, function() {
    res.redirect("/");
  });
});

module.exports = router;


