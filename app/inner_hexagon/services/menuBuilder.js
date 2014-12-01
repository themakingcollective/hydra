"use strict";

var _ = require("underscore");
var Menu = require("../models/menu");

module.exports.build = function (Mode) {
  var build = function (menu, modes) {
    _.each(modes, function (mode) {
      var m = new Menu(mode);
      menu.addOption(m);
      build(m, mode.children());
    });

    return menu;
  };

  return build(new Menu(), Mode.topLevel());
};
