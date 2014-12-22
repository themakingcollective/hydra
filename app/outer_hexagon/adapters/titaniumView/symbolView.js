"use strict";

module.exports = function () {
  var url;

  if (Ti.Platform.osname == "android") {
    url = "symbolView/index.html";
  }
  else {
    url = "app/outer_hexagon/adapters/titaniumView/symbolView/index.html";
  }

  var webView = Ti.UI.createWebView({
    url: url,
    disableBounce: true,
    showScrollbars: false,
    enableZoomControls: false,
    width: 280,
    height: 186
  });

  return webView;
};
