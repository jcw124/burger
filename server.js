const EXPRESS = require("express");
const BODYPARSER = require("body-parser");

const PORT = process.env.PORT || 8080;

const APP = EXPRESS();

// Serve static content for the app from the "public" directory in the application directory.
APP.use(EXPRESS.static("public"));

// parse Application/x-www-form-urlencoded
APP.use(BODYPARSER.urlencoded({ extended: true }));

// parse application/json
APP.use(BODYPARSER.json());

// Set Handlebars.
const EXPHBS = require("express-handlebars");

APP.engine("handlebars", EXPHBS({ defaultLayout: "main" }));
APP.set("view engine", "handlebars");

// Import routes and give the server access to them.
const ROUTES = require("./controllers/burger_controller.js");

APP.use(ROUTES);

// Start our server so that it can begin listening to client requests.
APP.listen(PORT, function() {
  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORT);
});



