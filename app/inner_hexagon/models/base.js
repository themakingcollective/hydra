Hydra.Model = function (view) {
  "use strict";
  var count = 0;

  this.increment = function () {
    count += 1;

    if (count === 1) {
      view.text = "Hello, world";
    }
    else {
      view.text = count + " times";
    }
  };
};
