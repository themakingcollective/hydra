"use strict";

Hydra.Controller = function (model) {
  this.pressButton = function () {
    model.increment();
  };
};
