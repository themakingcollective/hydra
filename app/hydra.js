"use strict";

var Model        = require("./inner_hexagon/models/base");
var View         = require("./outer_hexagon/ports/view");
var Controller   = require("./inner_hexagon/controllers/base");
var MockView     = require("./outer_hexagon/adapters/mockView");
var TitaniumView = require("./outer_hexagon/adapters/titaniumView");

module.exports = function () {
  var model       = new Model();
  var view        = new View();
  var controller  = new Controller(model, view);
  view.controller = controller;

  var ports = {
    view: view
  };

  this.connectPort = function (portName, adapter) {
    var port = ports[portName];

    adapter.port = port;
    port.adapter = adapter;
  };
};

module.exports.Adapters = {
  MockView: MockView,
  TitaniumView: TitaniumView
};
