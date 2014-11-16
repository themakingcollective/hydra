feature("Greeting users", function () {
  "use strict";

  var mockGUI;

  background(function () {
    var app = new Hydra.Application();
    mockGUI = new Hydra.Adapters.MockGUI();
    app.connectPort("user", mockGUI);
  });

  scenario("Seeing 'Hello, world' after pressing a button", function () {
    expect(mockGUI.text()).toNotEqual("Hello, world");
    mockGUI.pressButton();
    expect(mockGUI.text()).toEqual("Hello, world");
  });

});
