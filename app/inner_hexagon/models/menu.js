"use strict";

var _ = require("underscore");

module.exports = function (options) {
  var self = this;
  var selection = self;

  self.initOptions = options || {};
  self.id = self.initOptions.id;
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
      return _.isEqual(c, child) || c.id === child;
    });

    if (option) {
      selection = option;
    }
    else {
      var helpfulId = child.id || child;
      throw new Error("Invalid option: '" + helpfulId + "'");
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

  self.reset = function () {
    selection = self;
  };

  self.valueObject = function () {
    return selection.initOptions;
  };
};
