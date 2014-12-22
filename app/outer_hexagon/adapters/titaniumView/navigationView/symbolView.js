"use strict";

module.exports = function () {
  var url = "symbolView/index.html";

  if (Ti.Platform.osname !== "android") {
    url = "app/outer_hexagon/adapters/titaniumView/navigationView/" + url;
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
