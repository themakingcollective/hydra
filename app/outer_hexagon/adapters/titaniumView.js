/* global Ti */

"use strict";

module.exports = function () {
  var self = this;

  var window = Ti.UI.createWindow({
    backgroundColor: "white"
  });

  var label = Ti.UI.createLabel({
    color: "#900",
    font: { fontSize:48 },
    text: "A simple label",
    textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
    top: 30,
    width: Ti.UI.SIZE, height: Ti.UI.SIZE
  });

  var button = Ti.UI.createButton({
    title: "Click me",
    top: 10,
    width: 100,
    height: 50
  });

  button.addEventListener("touchstart", function () {
    self.port.pressButton();
  });

  window.add(label);
  window.add(button);

  this.setText = function (text) {
    label.setText(text);
  };

  this.render = function () {
    window.open();
  };
};
