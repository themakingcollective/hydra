/* exported Hydra */
"use strict";

var Hydra = { Ports: {}, Adapters: {} };

Hydra.Application = function () {
  var view       = new Hydra.View();
  var model      = new Hydra.Model(view);
  var controller = new Hydra.Controller(model);

  var ports = {
    "user": new Hydra.Ports.User(view, controller)
  };

  this.connectPort = function (portName, adapter) {
    adapter.port = ports[portName];
  };
};
