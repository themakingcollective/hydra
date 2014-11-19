"use strict";

var Model      = require("./inner_hexagon/models/base");
var View       = require("./inner_hexagon/views/base");
var Controller = require("./inner_hexagon/controllers/base");
var UserPort   = require("./outer_hexagon/ports/user");
var MockGUI    = require("./outer_hexagon/adapters/mockGUI");

module.exports = function () {
  var view       = new View();
  var model      = new Model(view);
  var controller = new Controller(model);

  var ports = {
    "user": new UserPort(view, controller)
  };

  this.connectPort = function (portName, adapter) {
    adapter.port = ports[portName];
  };
};

module.exports.Adapters = { MockGUI: MockGUI };
