"use strict";

global._          = require("underscore");
global.Hydra      = require("../app/hydra");
global.feature    = describe;
global.context    = describe;
global.background = beforeEach;
global.scenario   = it;

module.exports.setupApplication = function () {
  var app  = new Hydra();
  var view = new Hydra.Adapters.MockView();

  app.connectPort("view", view);

  return view;
};
