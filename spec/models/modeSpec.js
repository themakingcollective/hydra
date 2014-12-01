"use strict";

require("../specHelper");

var Mode = require("../../app/inner_hexagon/models/mode");

describe("Mode", function () {
  var subject, child;

  beforeEach(function () {
    subject = new Mode({
      id:    "id",
      name:  "name",
      image: "image",
      intro: "intro",
      color: "color",
      icon:  "icon",
      info:  "info"
    });

    child = new Mode({ id: "child" });
    subject.addChild(child);
  });

  it("stores attributes", function () {
    expect(subject.id).toEqual("id");
    expect(subject.name).toEqual("name");
    expect(subject.image).toEqual("image");
    expect(subject.intro).toEqual("intro");
    expect(subject.color).toEqual("color");
    expect(subject.icon).toEqual("icon");
    expect(subject.info).toEqual("info");
  });

  describe("#addChild", function () {
    it("adds a child", function () {
      expect(subject.children).toEqual([child]);
    });

    it("sets the parent of the child", function () {
      expect(child.parent).toEqual(subject);
    });
  });
});
