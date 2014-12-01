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
      var results = subject.read("modes");

      expect(results.length).toEqual(2);
      expect(results[0].id).toEqual(1);
    });

    it("supports filtering by a conditional", function () {
      var results = subject.read("modes", { id: 2 });

      expect(results.length).toEqual(1);
      expect(results[0].id).toEqual(2);
    });
  });
});
