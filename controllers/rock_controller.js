var express = require("express");

var router = express.Router();

// Import the model (rock.js) to use its database functions.
var rock = require("../models/rock.js");

router.get("/", function(req, res) {

    res.redirect("/rock");
});


router.get("/rock", function(req, res){
	rock.selectAll(function(data){
		var hbsObject = {rock:data};

		console.log(hbsObject);

		res.render("index", hbsObject);
	});
});

router.post("/rock/create", function(req, res) {
  rock.insertOne(["band name"], [
   req.body.band_name], function(data) {
    res.redirect("/rock");
  });
});


router.put("/rock/update/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  console.log("condition", condition);

  rock.updateOne({
    "hall of fame" : req.body.hall_of_fame
  }, condition, function(data) {
    res.redirect("/rock");
  });
});

module.exports = router;


