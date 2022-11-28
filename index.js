const express = require("express");
const app = express();
const { port } = require("./config");

app.listen(config.port, function () {
  console.log("Server is listening... http://localhost:" + config.port);
});
