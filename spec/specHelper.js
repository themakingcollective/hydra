"use strict";

global._          = require("underscore");
global.Hydra      = require("../app/hydra");
global.feature    = describe;
global.context    = describe;
global.background = beforeEach;
global.scenario   = it;

var ActiveRecord  = require("../app/inner_hexagon/services/activeRecord");
var Database      = require("../app/outer_hexagon/ports/database");
var MockDatabase  = require("../app/outer_hexagon/adapters/mockDatabase");

module.exports.setupApplication = function () {
  var app      = new Hydra();
  var view     = new Hydra.Adapters.MockView();
  var database = new Hydra.Adapters.MockDatabase();

  app.connectPort("view", view);
  app.connectPort("database", database);

  app.initialize();

  return view;
};

module.exports.setupActiveRecord = function (Model) {
  var database = new Database();
  var mockDatabase = new MockDatabase();

  database.adapter = mockDatabase;
  mockDatabase.port = database;

  ActiveRecord.connect(Model, database);
};
