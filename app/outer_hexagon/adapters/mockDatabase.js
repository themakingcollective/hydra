"use strict";

var _ = require("../../vendor/underscore");

module.exports = function () {
  var data = {
    test: [
      { id: 1, foo: "foo" }
    ],
    modes: [
      { id: "build",        name: "build" },
      { id: "guess",        name: "guess" },
      { id: "colours",      name: "colours",            parentId: "build" },
      { id: "patterns",     name: "patterns + colours", parentId: "build" },
      { id: "whichFlag",    name: "which flag?",        parentId: "guess" },
      { id: "whichCountry", name: "which country?",     parentId: "guess" },
      { id: "viewAllFlags", name: "view all flags",     parentId: "guess" }
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
