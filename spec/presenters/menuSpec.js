"use strict";

var MenuPresenter = require("../../app/inner_hexagon/presenters/menu");
var Mode = require("../../app/inner_hexagon/models/mode");
var Menu = require("../../app/inner_hexagon/models/menu");

describe("MenuPresenter", function () {
  var subject;

  beforeEach(function () {
    var fooMode = new Mode();
    fooMode.id = "fooId";
    fooMode.name = "foo";
    var fooMenu = new Menu(fooMode);

    var barMode = new Mode();
    barMode.name = "bar";
    var barMenu = new Menu(barMode);
    fooMenu.addOption(barMenu);

    subject = new MenuPresenter(fooMenu);
  });

  it("contains some properties", function () {
    expect(subject.id).toEqual("fooId");
    expect(subject.title).toEqual("foo");
  });

  describe("#items", function () {
    it("returns an array of menu items", function () {
      expect(subject.items.length).toEqual(1);
      expect(subject.items[0].title).toEqual("bar");
    });
  });
});
