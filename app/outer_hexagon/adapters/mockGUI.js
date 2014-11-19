"use strict";

module.exports = function () {
  this.text = function () {
    return this.port.text();
  };

  this.pressButton = function () {
    this.port.pressButton();
  };
};
