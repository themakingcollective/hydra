"use strict";

var Mode = function (options) {
  this.children = function () {
    return Mode.where({ parentId: this.id });
  };

  this.parent = function () {
    return Mode.find(this.parentId);
  };
};

Mode.tableName = "modes";

Mode.topLevel = function () {
  return Mode.where({ parentId: undefined });
};

module.exports = Mode;
