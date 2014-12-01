"use strict";

var _ = require("underscore");

module.exports = function () {
  var data = {
    test: [
      { id: 1, foo: "foo" }
    ],
    modes: [
      { id: 1, name: "build" },
      { id: 2, name: "guess" },
      { id: 3, name: "colours",            parentId: 1 },
      { id: 4, name: "patterns + colours", parentId: 1 },
      { id: 5, name: "which flag?",        parentId: 2 },
      { id: 6, name: "which country?",     parentId: 2 },
      { id: 7, name: "view all flags",     parentId: 2 }
    ]
  };

  this.read = function (table, conditions) {
    if (data[table]) {
      return _.select(data[table], function (record) {
        return _.every(conditions, function (value, key) {
          return record[key] === value;
        });
      });
    }
    else {
      throw new Error("Table '" + table + "' does not exist");
    }
  };
};
