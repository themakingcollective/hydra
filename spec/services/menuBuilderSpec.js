"use strict";

var helpers     = require("../specHelper");
var MenuBuilder = require("../../app/inner_hexagon/services/menuBuilder");
var Mode        = require("../../app/inner_hexagon/models/mode");

describe("MenuBuilder", function () {
  var subject;

  var modeNames = function () {
    return _.map(subject.options(), function (menu) {
      return menu.valueObject().name;
    });
  };

  beforeEach(function () {
    helpers.setupActiveRecord(Mode);
    subject = MenuBuilder.build(Mode);
  });

  it("builds a menu from an array of modes", function () {
    expect(modeNames()).toEqual(["build", "guess"]);

    subject.choose(1);
    expect(modeNames()).toEqual(["colours", "patterns + colours"]);

    subject.choose(3);
    expect(modeNames()).toEqual([]);

    subject.reset();
    expect(modeNames()).toEqual(["build", "guess"]);
  });
});
