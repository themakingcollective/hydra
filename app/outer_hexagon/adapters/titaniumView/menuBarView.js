"use strict";

module.exports = function (menu, port) {
  var view = Titanium.UI.createView({
    backgroundColor: "#FFFF00",
    width: "100%",
    height: 44
  });

  var menuButton = Ti.UI.createButton({
    title: "menu",
    accessibilityLabel: "menu",
    left: 20
  });

  var titleLabel = Ti.UI.createLabel({
    text: menu.title,
    accessibilityLabel: "title"
  });

  menuButton.addEventListener("touchstart", function () {
    port.touchMenu();
  });

  view.add(menuButton);
  view.add(titleLabel);

  return view;
};
