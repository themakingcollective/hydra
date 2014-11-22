"use strict";

module.exports = function () {
  this.pressButton = function () {
    this.controller.someAction();
  };

  this.setText = function (text) {
    this.adapter.setText(text);
  };
};
