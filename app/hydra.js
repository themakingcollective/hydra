/* exported Hydra */
var Hydra = {};

Hydra.View       = function () {};
Hydra.Model      = function () {};
Hydra.Controller = function () {};

Hydra.Adapters = {};
Hydra.Ports    = {};

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
