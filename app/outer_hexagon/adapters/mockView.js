"use strict";

module.exports = function () {
  this.text = "";

  this.pressButton = function () {
    this.port.pressButton();
  };

  this.setText = function (text) {
    this.text = text;
  };
};
