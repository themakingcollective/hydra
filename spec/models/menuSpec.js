"use strict";

require("../specHelper");

var Menu = require("../../app/inner_hexagon/models/menu");

describe("Menu", function () {
  var subject, foo, bar, baz;

  beforeEach(function () {
    foo = new Menu({ label: "foo" });
    bar = new Menu({ label: "bar" });
    baz = new Menu({ label: "baz" });
    foo.addOption(bar);

    subject = new Menu();
    subject.addOption(foo);
    subject.addOption(baz);
  });

  describe("#addOption", function () {
    it("adds a child to the parent", function () {
      expect(subject.options).toEqual([foo, baz]);
      expect(bar.options).toEqual([]);
    });

    it("sets the parent on the child", function () {
      expect(subject.parent).toBeUndefined();
      expect(foo.parent).toEqual(subject);
    });
  });

  describe("#options", function () {
    it("returns an array of menu items", function () {
      expect(subject.options).toEqual([foo, baz]);
    });
  });

  describe("#choose", function () {
    it("changes the available options", function () {
      subject.choose(foo);
      expect(subject.options).toEqual([bar]);

      subject.choose(bar);
      expect(subject.options).toEqual([]);
    });

    it("supports choosing by label, rather than object", function () {
      subject.choose("foo");
      expect(subject.options).toEqual([bar]);
    });

    it("throws an error when choosing an invalid option", function () {
      expect(function () {
        subject.choose(bar);
      }).toThrow(new Error("Invalid option: 'bar'"));

      expect(function () {
        subject.choose("missing");
      }).toThrow(new Error("Invalid option: 'missing'"));
    });
  });
});
