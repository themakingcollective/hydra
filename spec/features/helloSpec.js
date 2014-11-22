"use strict";

var helpers = require("../specHelper");

feature("Greeting users", function () {
  var view;

  background(function () {
    view = helpers.setupApplication();
  });

  scenario("Seeing 'Hello, world' after pressing a button", function () {
    expect(view.text).toEqual("");
    view.pressButton();
    expect(view.text).toEqual("Hello, world");
    view.pressButton();
    expect(view.text).toEqual("2 times");
  });

});
