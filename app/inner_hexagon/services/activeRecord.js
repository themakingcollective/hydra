"use strict";

var ActiveRecord = {};

ActiveRecord.connect = function (Model, database) {
  Model.find = function (id) {
    return ActiveRecord.find(database, Model.tableName, id);
  };

  Model.find_by = function (conditions) {
    return ActiveRecord.find_by(database, Model.tableName, conditions);
  };

  Model.where = function (conditions) {
    return ActiveRecord.where(database, Model.tableName, conditions);
  };

  Model.all = function () {
    return ActiveRecord.all(database, Model.tableName);
  };
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
