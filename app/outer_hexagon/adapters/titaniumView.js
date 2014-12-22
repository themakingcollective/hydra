/* global Ti */

"use strict";

var _          = require("../../vendor/underscore");
var Animator   = require("./titaniumView/animator");
var SymbolView = require("./titaniumView/symbolView");

module.exports = function () {
  var self = this;

  var previousWindow;

  var color;
  var toggleColor = true;

  this.setMenu = function (menu) {
    if (toggleColor) {
      color = "#FFFF99";
    }
    else {
      color = "#FFFFFF";
    }
    toggleColor = !toggleColor;

    var window = Ti.UI.createWindow({
      backgroundColor: color,
      layout: "vertical",
      height: "100%"
    });

    var titleLabel = Ti.UI.createLabel({
      text: menu.title,
      accessibilityLabel: "title",
      top: 50
    });

    window.add(titleLabel);

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

    var menuButton = Ti.UI.createButton({
      title: "menu",
      accessibilityLabel: "menu",
      top: 20
    });

    menuButton.addEventListener("touchstart", function () {
      self.port.touchMenu();
    });

    window.add(menuButton);

    var symbolView = new SymbolView();
    window.add(symbolView);

    Animator.slideLeft(window, previousWindow);
    previousWindow = window;
  };
};
