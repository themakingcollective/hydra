// To regenerate, run: grunt shell:browserify

/* global window */
/* global document */
"use strict";

var RegionedImage = require("regioned-image");

var image = new RegionedImage("France.svg", {
  width: window.innerWidth,
  height: window.innerHeight
});

var canvas = document.getElementById("canvas");

image.onload = function () {
  image.render(canvas);
};

image.ontouch = function (coordinates) {
  var region = image.regionAt(coordinates);

  if (!region) {
    region = image.buildRegion(coordinates);
  }

  region.color         = "#"+Math.floor(Math.random()*16777215).toString(16);
  region.boundaryColor = "#000000";

  image.render(canvas);
};
