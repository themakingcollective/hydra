"use strict";

var _ = require("underscore");

var MenuPresenter = function (menu) {
  var mode = menu.valueObject();

  this.title = mode.name;

  this.items = _.map(menu.options(), function (menu) {
    return new MenuPresenter(menu);
  });
};

module.exports = MenuPresenter;
