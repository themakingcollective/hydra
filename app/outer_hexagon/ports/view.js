"use strict";

module.exports = function () {
  this.setMenu = function (menu) {
    this.adapter.setMenu(menu);
  };

  this.touchMenuItem = function (id) {
    this.controller.touchMenuItem(id);
  };

  this.touchMenu = function () {
    this.controller.touchMenu();
  };
};
