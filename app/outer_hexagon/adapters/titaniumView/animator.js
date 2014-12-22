"use strict";

var Animator = { ios: {}, android: {} };

Animator.ios.slideLeft = function (window, previousWindow) {
  var screenWidth = Ti.Platform.displayCaps.platformWidth;

  var slideIn = Ti.UI.createAnimation({
    left: 0,
    duration: 250
  });

  window.left = screenWidth;
  window.open(slideIn);

  if (previousWindow) {
    var slideOut = Ti.UI.createAnimation({
      left: -screenWidth,
      duration: 250
    });

    previousWindow.left = 0;
    previousWindow.close(slideOut);
  }
};

Animator.android.slideLeft = function (window, previousWindow) {
  // TODO - use custom animations
  window.open({
    activityEnterAnimation: Ti.Android.R.anim.slide_in_left
  });

  if (previousWindow) {
    previousWindow.close();
  }
};

if (Ti.Platform.osname === "android") {
  module.exports = Animator.android;
}
else {
  module.exports = Animator.ios;
}
