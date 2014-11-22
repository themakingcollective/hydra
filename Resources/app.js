var Hydra = require("app/hydra");

var app = new Hydra();
var view = new Hydra.Adapters.TitaniumView();

app.connectPort("view", view);

view.render();
