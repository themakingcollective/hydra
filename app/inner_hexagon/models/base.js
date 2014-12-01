"use strict";

var ActiveRecord = require("../services/activeRecord");
var Mode         = require("./mode");
var MenuBuilder  = require("../services/menuBuilder");

module.exports = function (database) {
  var self = this;

  ActiveRecord.connect(Mode, database);

  self.initialize = function () {
    self.menu = MenuBuilder.build(Mode);
  };
};
