"use strict";

require("../specHelper");

var MenuBuilder = require("../../app/inner_hexagon/services/menuBuilder");
var Mode = require("../../app/inner_hexagon/models/mode");

describe("MenuBuilder", function () {
  var subject, foo, bar, baz;

  var subjectModes = function () {
    return _.map(subject.options(), function (menu) {
      return menu.valueObject();
    });
  };

  beforeEach(function () {
    foo = new Mode({ id: "foo" });
    bar = new Mode({ id: "bar" });
    baz = new Mode({ id: "baz" });

    foo.addChild(bar);

    subject = MenuBuilder.build([foo, baz]);
  });

  it("builds a menu from an array of modes", function () {
    expect(subjectModes()).toEqual([foo, baz]);

    subject.choose("foo");
    expect(subjectModes()).toEqual([bar]);

    subject.choose("bar");
    expect(subjectModes()).toEqual([]);

    subject.reset();
    subject.choose("baz");
    expect(subjectModes()).toEqual([]);
  });
});
