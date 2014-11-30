"use strict";

var helpers = require("../specHelper");

feature("Navigation", function () {
  var view;

  background(function () {
    view = helpers.setupApplication();
  });

  scenario("Navigating the menu", function () {
    expect(view.menuItems.length).toEqual(2);
    expect(view.menuItems[0].text).toEqual("mode1");
    expect(view.menuItems[1].text).toEqual("mode2");

    view.touch("menuItem1");
    expect(view.title).toEqual("mode1");
    expect(view.menuItems.length).toEqual(2);
    expect(view.menuItems[0].text).toEqual("mode11");
    expect(view.menuItems[1].text).toEqual("mode22");

    view.touch("menu");
    // TODO: Then I should be on the start screen

    view.touch("menuItem2");
    expect(view.title).toEqual("mode2");
    expect(view.menuItems.length).toEqual(3);
    expect(view.menuItems[0].text).toEqual("mode21");
    expect(view.menuItems[1].text).toEqual("mode22");
    expect(view.menuItems[2].text).toEqual("mode23");
  });

});

