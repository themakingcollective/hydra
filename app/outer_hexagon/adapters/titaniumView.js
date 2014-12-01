/* global Ti */

"use strict";

var _ = require("../../vendor/underscore");

module.exports = function () {
  var self = this;
  var previousWindow;

  this.setMenu = function (menu) {
    var window = Ti.UI.createWindow({
      backgroundColor: "white",
      layout: "vertical",
      height: "100%"
    });

    _.each(menu.items, function (item) {
      var button = Ti.UI.createButton({
        title: item.title,
        top: 20
      });

      button.addEventListener("touchstart", function () {
        self.port.touchMenuItem(item.id);
      });

      window.add(button);
    });

    var menuButton = Ti.UI.createButton({
      title: "menu",
      top: 20
    });

    menuButton.addEventListener("touchstart", function () {
      self.port.touchMenu();
    });

    window.add(menuButton);

    window.open();

    if (previousWindow) {
      previousWindow.close();
    }
    previousWindow = window;
  };
};
