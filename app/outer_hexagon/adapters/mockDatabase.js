"use strict";

var _ = require("underscore");

module.exports = function () {
  var data = {
    test: [
      {
        id: 1,
        foo: "foo"
      }
    ]
  };

  this.read = function (table, conditions) {
    if (data[table]) {
      return _.where(data[table], conditions);
    }
    else {
      throw new Error("Table '" + table + "' does not exist");
    }
  };
};
