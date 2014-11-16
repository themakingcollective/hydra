/* jshint unused: false */

var setupApplication = function () {
  "use strict";

  var app = new Hydra.Application();
  var gui = new Hydra.Adapters.MockGUI();

  app.connectPort("user", gui);

  return gui;
};
