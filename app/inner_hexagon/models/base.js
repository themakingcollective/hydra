"use strict";

module.exports = function () {
  this.text = "";
  var count = 0;

  this.someMethod = function () {
    count += 1;

    if (count === 1) {
      this.text = "Hello, world";
    }
    else {
      this.text = count + " times";
    }
  };
};
