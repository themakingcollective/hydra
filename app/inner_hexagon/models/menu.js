"use strict";

var _ = require("underscore");

module.exports = function (options) {
  var self = this;
  var children = [];

  options = options || {};

  self.label = options.label;
  self.options = children;

  self.addOption = function (menu) {
    children.push(menu);
    menu.parent = self;
  };

  self.choose = function (child) {
    var validOption;

    _.each(self.options, function (c) {
      if (_.isEqual(c, child) || c.label === child) {
        self.options = c.options;
        validOption = true;
        return;
      }
    });

    if (!validOption) {
      var helpfulLabel = child.label || child;
      throw new Error("Invalid option: '" + helpfulLabel + "'");
    }
  };
};
