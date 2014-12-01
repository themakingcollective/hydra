"use strict";

var _ = require("underscore");
var Menu = require("../models/menu");

module.exports.build = function (modes) {
  var build = function (menu, modes) {
    _.each(modes, function (mode) {
      var m = new Menu(mode);
      menu.addOption(m);
      build(m, mode.children);
    });
  };

  var topLevelMenu = new Menu();
  build(topLevelMenu, modes);

  return topLevelMenu;
};
