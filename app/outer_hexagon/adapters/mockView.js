"use strict";

module.exports = function () {
  this.setMenu = function (menu) {
    this.menu = menu;
  };

  this.touchMenuItem = function (id) {
    this.port.touchMenuItem(id);
  };

  this.touchMenu = function () {
    this.port.touchMenu();
  };
};
