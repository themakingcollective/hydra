"use strict";

module.exports = function (model) {
  this.pressButton = function () {
    model.increment();
  };
};
