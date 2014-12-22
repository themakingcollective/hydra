"use strict";

var NavigationView = require("./titaniumView/navigationView");
var Animator       = require("./titaniumView/animator");

module.exports = function () {
  var self = this;
  var previousView;

  this.setMenu = function (menu) {
    var view = new NavigationView(menu, self.port);
    Animator.slideLeft(view, previousView);
    previousView = view;
  };
};
