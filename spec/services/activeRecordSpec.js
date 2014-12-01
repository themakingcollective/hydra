"use strict";

var helpers = require("../specHelper");

describe("ActiveRecord", function () {
  var MyModel;

  beforeEach(function () {
    MyModel = function (attributes) {
      this.something = function () {
        return this.foo;
      };
    };

    MyModel.tableName = "test";
    helpers.setupActiveRecord(MyModel);
  });

  describe(".connect", function () {
    it("defines active record class methods", function () {
      expect(MyModel.first().something()).toEqual("foo");
      expect(MyModel.find(1).something()).toEqual("foo");
      expect(MyModel.find_by({ foo: "foo" }).something()).toEqual("foo");
      expect(MyModel.where({ foo: "foo" })[0].something()).toEqual("foo");
      expect(MyModel.all()[0].something()).toEqual("foo");
    });
  });
});
