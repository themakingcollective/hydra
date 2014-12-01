var Hydra = require("app/hydra");

var app      = new Hydra();
var view     = new Hydra.Adapters.TitaniumView();
var database = new Hydra.Adapters.MockDatabase();

app.connectPort("view", view);
app.connectPort("database", database);

app.initialize();
