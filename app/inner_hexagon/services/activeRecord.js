"use strict";

var ActiveRecord = {};

ActiveRecord.connect = function (Model, database) {
  if (!Model.tableName) {
    throw new Error("No table name set");
  }

  var newInstance = function (attributes) {
    var instance = new Model();

    _.each(attributes, function (value, key) {
      instance[key] = value;
    });

    return instance;
  };

  var newInstances = function (attributesArray) {
    return _.map(attributesArray, function (attributes) {
      return newInstance(attributes);
    });
  };

  Model.first = function () {
    return newInstance(
      ActiveRecord.first(database, Model.tableName)
    );
  };

  Model.find = function (id) {
    return newInstance(
      ActiveRecord.find(database, Model.tableName, id)
    );
  };

  Model.find_by = function (conditions) {
    return newInstance(
      ActiveRecord.find_by(database, Model.tableName, conditions)
    );
  };

  Model.where = function (conditions) {
    return newInstances(
      ActiveRecord.where(database, Model.tableName, conditions)
    );
  };

  Model.all = function () {
    return newInstances(
      ActiveRecord.all(database, Model.tableName)
    );
  };
};

ActiveRecord.first = function (database, table) {
  return database.read(table, {})[0];
};

ActiveRecord.find = function (database, table, id) {
  return database.read(table, { id: id })[0];
};

ActiveRecord.find_by = function (database, table, conditions) {
  return database.read(table, conditions)[0];
};

ActiveRecord.where = function (database, table, conditions) {
  return database.read(table, conditions);
};

ActiveRecord.all = function (database, table) {
  return database.read(table, {});
};

module.exports = ActiveRecord;
