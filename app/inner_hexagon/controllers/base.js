"use strict";

var MenuPresenter = require("../presenters/menu");

module.exports = function (model, view) {
  var self = this;
  view.controller = self;

  self.initialize = function () {
    model.initialize();
    setMenu();
  };

  self.touchMenuItem = function (id) {
    model.menu.choose(id);
    setMenu();
  };

  self.touchMenu = function () {
    model.menu.reset();
    setMenu();
  };

  var setMenu = function () {
    view.setMenu(new MenuPresenter(model.menu));
  };
};
