/* global Ti */

"use strict";

var _           = require("../../vendor/underscore");
var Animator    = require("./titaniumView/animator");
var SymbolView  = require("./titaniumView/symbolView");
var MenuBarView = require("./titaniumView/menuBarView");

module.exports = function () {
  var self = this;
  var previousWindow;

  this.setMenu = function (menu) {
    var window = Ti.UI.createWindow({
      backgroundColor: "white",
      layout: "vertical",
      height: "100%"
    });

    var menuBarView = new MenuBarView(menu, self.port);
    window.add(menuBarView);

    _.each(menu.items, function (item) {
      var button = Ti.UI.createButton({
        title: item.title,
        accessibilityLabel: item.id + "MenuItem",
        top: 20
      });

      button.addEventListener("touchstart", function () {
        self.port.touchMenuItem(item.id);
      });

      window.add(button);
    });

    var symbolView = new SymbolView();
    window.add(symbolView);

    Animator.slideLeft(window, previousWindow);
    previousWindow = window;
  };
};
