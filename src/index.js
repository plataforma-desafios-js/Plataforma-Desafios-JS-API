// Enviroment Variables
var configs = require("./configs");
var express = require("express");
var mongoose = require("mongoose");
var app = express();
var cors = require("cors");

var server = require("http").Server(app);

const io = require("socket.io")(server);

const port = configs.port;
const stringConnection = configs.stringConnection;

mongoose.connect(stringConnection, {
  useNewUrlParser: true
});

app.use((req, res, next) => {
  req.io = io;
  return next();
});

app.use(cors());
app.use(express.json());

// Main Routes
app.use(require("./routes"));

// Error 404
app.use(( req, res, next) => {
  res.status(404).send({ error: "Not found" });
});

// Error 500
app.use(function(err, req, res, next) {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});


server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
