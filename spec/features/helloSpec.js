"use strict";

var Helpers = require("../specHelper");

feature("Greeting users", function () {
  var gui;

  background(function () {
    gui = Helpers.setupApplication();
  });

  scenario("Seeing 'Hello, world' after pressing a button", function () {
    expect(gui.text()).toEqual("");
    gui.pressButton();
    expect(gui.text()).toEqual("Hello, world");
    gui.pressButton();
    expect(gui.text()).toEqual("2 times");
  });

});
