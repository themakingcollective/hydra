Hydra.Ports.User = function (view, controller) {
  "use strict";

  this.text = function () {
    return view.text;
  };

  this.pressButton = function () {
    controller.pressButton();
  };
};
