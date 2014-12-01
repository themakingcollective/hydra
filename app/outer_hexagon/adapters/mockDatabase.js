"use strict";

var _ = require("underscore");

module.exports = function () {
  var data = {
    modes: [
      {
        id: 1,
        name: "build"
      },
      {
        id: 2,
        name: "guess"
      }
    ]
  };

  this.read = function (table, conditions) {
    return _.where(data[table], conditions);
  };
};
