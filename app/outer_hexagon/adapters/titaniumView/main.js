// To regenerate, run: grunt shell:browserify

var RegionedImage = require("regioned-image");

var image = new RegionedImage("France.svg", {
  width: window.innerWidth,
  height: window.innerHeight
});

image.onload = function () {
  var canvas = document.getElementById("canvas");
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
