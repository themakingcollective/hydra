"use strict";

var _ = require("underscore");

module.exports = function (options) {
  var self = this;
  var selection = self;

  options = options || {};
  self.label = options.label;
  self.children = [];

  self.addOption = function (option) {
    self.children.push(option);
    option.parent = self;
  };

  self.options = function () {
    return selection.children;
  };

  self.choose = function (child) {
    var option = _.detect(self.options(), function (c) {
      return _.isEqual(c, child) || c.label === child;
    });

    if (option) {
      selection = option;
    }
    else {
      var helpfulLabel = child.label || child;
      throw new Error("Invalid option: '" + helpfulLabel + "'");
    }
  };

  self.back = function () {
    if (selection.parent) {
      selection = selection.parent;
    }
    else {
      throw new Error("Nowhere to go back to");
    }
  };
};
