"use strict";

var Model      = require("./inner_hexagon/model");
var View       = require("./outer_hexagon/ports/view");
var Controller = require("./inner_hexagon/controller");
var MockView   = require("./outer_hexagon/adapters/mockView");

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

module.exports.Adapters = { MockView: MockView };
