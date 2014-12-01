"use strict";

module.exports = function (options) {
  var self = this;

  self.id = options.id;
  self.name = options.name;
  self.image = options.image;
  self.intro = options.intro;
  self.color = options.color;
  self.icon = options.icon;
  self.info = options.info;

  self.children = [];

  self.addChild = function (child) {
    self.children.push(child);
    child.parent = self;
  };
};
