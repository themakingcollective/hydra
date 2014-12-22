"use strict";

var _                 = require("../../../vendor/underscore");
var NavigationBarView = require("./navigationView/navigationBarView");
var SymbolView        = require("./navigationView/symbolView");

module.exports = function (menu, port) {
  var window = Ti.UI.createWindow({
    backgroundColor: "white",
    layout: "vertical",
    height: "100%"
  });

  var navigationBarView = new NavigationBarView(menu, port);
  if (menu.title) {
    window.add(navigationBarView);
  }

  _.each(menu.items, function (item) {
    var button = Ti.UI.createButton({
      title: item.title,
      accessibilityLabel: item.id + "MenuItem",
      top: 20
    });

    button.addEventListener("touchstart", function () {
      port.touchMenuItem(item.id);
    });

    window.add(button);
  });

  var symbolView = new SymbolView();
  window.add(symbolView);

  return window;
};
