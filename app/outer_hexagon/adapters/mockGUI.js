Hydra.Adapters.MockGUI = function () {
  "use strict";

  this.text = function () {
    return this.port.text();
  };

  this.pressButton = function () {
    this.port.pressButton();
  };
};
