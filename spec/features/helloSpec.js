feature("Greeting users", function () {
  "use strict";

  var gui;

  background(function () {
    gui = setupApplication();
  });

  scenario("Seeing 'Hello, world' after pressing a button", function () {
    expect(gui.text()).toEqual("");
    gui.pressButton();
    expect(gui.text()).toEqual("Hello, world");
  });

});
