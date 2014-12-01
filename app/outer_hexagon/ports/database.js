"use strict";

module.exports = function () {
  this.read = function (table, conditions) {
    return this.adapter.read(table, conditions);
  };
};
