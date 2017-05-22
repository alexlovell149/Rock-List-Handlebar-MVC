var orm = require("../config/orm.js");

var rock = {
  selectAll: function(cb) {
    orm.selectAll("bands", function(res) {
      cb(res);
    });
  },
  // The variables cols and vals are arrays.
  insertOne: function(cols, vals, cb) {
    orm.insertOne("bands", cols, vals, function(res) {
      cb(res);
    });
  },
  updateOne: function(objColVals, condition, cb) {
    orm.updateOne("bands", objColVals, condition, function(res) {
      cb(res);
    });
  }
};

// Export the database functions for the controller (rock_controller.js).
module.exports = rock;