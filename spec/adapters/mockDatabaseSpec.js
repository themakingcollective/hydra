"use strict";

require("../specHelper");

var MockDatabase = require("../../app/outer_hexagon/adapters/mockDatabase");

describe("MockDatabase", function () {
  var subject;

  beforeEach(function () {
    subject = new MockDatabase();
  });

  describe("#read", function () {
    it("reads rows from a table", function () {
      var results = subject.read("test");

      expect(results.length).toEqual(1);
      expect(results[0].id).toEqual(1);
    });

    it("supports filtering by a conditional", function () {
      var results = subject.read("test", { foo: "foo" });
      expect(results.length).toEqual(1);
      expect(results[0].id).toEqual(1);

      var results = subject.read("test", { foo: "missing" });
      expect(results.length).toEqual(0);
    });

    it("throws an error if the table doesn't exist", function () {
      expect(function () {
        subject.read("missing");
      }).toThrow(new Error("Table 'missing' does not exist"));
    });
  });
});
