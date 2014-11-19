"use strict";

module.exports = function (view, controller) {
  this.text = function () {
    return view.text;
  };

  this.pressButton = function () {
    controller.pressButton();
  };
};
