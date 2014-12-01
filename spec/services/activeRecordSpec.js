"use strict";

helpers = require("../specHelper");

describe("ActiveRecord", function () {
  var MyModel;

  beforeEach(function () {
    MyModel = { tableName : "test" };
    helpers.setupActiveRecord(MyModel);
  });

  describe(".connect", function () {
    it("defines active record class methods", function () {
      expect(MyModel.find(1).foo).toEqual("foo");
      expect(MyModel.find_by({ foo: "foo" }).foo).toEqual("foo");
      expect(MyModel.where({ foo: "foo" })[0].foo).toEqual("foo");
      expect(MyModel.all().length).toEqual(1);
    });
  });
});
