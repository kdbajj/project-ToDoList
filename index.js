const express = require("express");
const app = express();
const { port } = require("./config");

// routes
const apiRouter = require("./routes/api");

app.use("/", apiRouter);

app.listen(port, function () {
  console.log("Server is listening... http://localhost:" + port);
});
