"use strict";

var helpers = require("../specHelper");
var Mode = require("../../app/inner_hexagon/models/mode");

describe("Mode", function () {
  var subject;

  beforeEach(function () {
    helpers.setupActiveRecord(Mode);
    subject = Mode.first();
  });

  it("stores attributes", function () {
    expect(subject.id).toEqual("build");
    expect(subject.name).toEqual("build");
  });

  it("has a parent / child relationship", function () {
    var child = subject.children()[0];
    expect(child.parent().id).toEqual("build");
  });

  describe(".topLevel", function () {
    it("returns an array of modes without parents", function () {
      var modes = Mode.topLevel();

      expect(modes[0].id).toEqual("build");
      expect(modes[1].id).toEqual("guess");
    });
  });
});
