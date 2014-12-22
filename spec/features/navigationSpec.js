"use strict";

var helpers = require("../specHelper");

feature("Navigation", function () {
  var view;

  background(function () {
    view = helpers.setupApplication();
  });

  scenario("Navigating the menu", function () {
    expect(view.menu.title).toBeUndefined();
    expect(view.menu.items[0].title).toEqual("build");
    expect(view.menu.items[1].title).toEqual("guess");

    view.touchMenuItem("build");
    expect(view.menu.title).toEqual("build");
    expect(view.menu.items[0].title).toEqual("colours");
    expect(view.menu.items[1].title).toEqual("patterns + colours");

    view.touchMenuItem("colours");
    expect(view.menu.title).toEqual("colours");

    view.touchMenu();
    expect(view.menu.title).toBeUndefined();
    expect(view.menu.items[0].title).toEqual("build");
    expect(view.menu.items[1].title).toEqual("guess");

    view.touchMenuItem("guess");
    expect(view.menu.title).toEqual("guess");
    expect(view.menu.items[0].title).toEqual("which flag?");
    expect(view.menu.items[1].title).toEqual("which country?");
    expect(view.menu.items[2].title).toEqual("view all flags");
  });
});
