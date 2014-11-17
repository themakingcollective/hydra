/* jshint unused: false */

var feature    = describe;
var context    = describe;
var background = beforeEach;
var scenario   = it;

var Helpers = {};

Helpers.setupApplication = function () {
  "use strict";

  var app = new Hydra.Application();
  var gui = new Hydra.Adapters.MockGUI();

  app.connectPort("user", gui);

  return gui;
};
