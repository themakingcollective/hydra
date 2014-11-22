"use strict";

module.exports = function (model, view) {
  view.controller = this;

  this.someAction = function () {
    model.someMethod();
    view.setText(model.text);
  };
};
