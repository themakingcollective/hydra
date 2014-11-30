"use strict";

var _ = require("underscore");

module.exports = function (options) {
  var self = this;
  options = options || {};

  self.label = options.label;
  self.children = [];
  self.options = self.children;

  self.addChild = function (child) {
    self.children.push(child);
    child.parent = self;
  };

  self.choose = function (child) {
    var validOption;

    _.each(self.options, function (c) {
      if (_.isEqual(c, child) || c.label === child) {
        self.options = c.children;
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
