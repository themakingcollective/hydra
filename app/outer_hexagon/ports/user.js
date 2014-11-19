"use strict";

Hydra.Ports.User = function (view, controller) {
  this.text = function () {
    return view.text;
  };

  this.pressButton = function () {
    controller.pressButton();
  };
};
