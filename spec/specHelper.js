"use strict";

global.Hydra      = require("../app/hydra");
global.feature    = describe;
global.context    = describe;
global.background = beforeEach;
global.scenario   = it;

module.exports.setupApplication = function () {
  var app = new Hydra();
  var gui = new Hydra.Adapters.MockGUI();

  app.connectPort("user", gui);

  return gui;
};
