"use strict";

require("../specHelper");

var ActiveRecord = require("../../app/inner_hexagon/services/activeRecord");
var Database = require("../../app/outer_hexagon/ports/database");
var MockDatabase = require("../../app/outer_hexagon/adapters/mockDatabase");

describe("ActiveRecord", function () {
  var MyModel;

  beforeEach(function () {
    var database = new Database();
    var mockDatabase = new MockDatabase();

    database.adapter = mockDatabase;
    mockDatabase.port = database;

    MyModel = { tableName: "test" };

    ActiveRecord.connect(MyModel, database);
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
