const express = require("express");
const app = express();
const { port } = require("./config");
const apiRouter = require("./routes/api");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const { application } = require("express");

const DB =
  "mongodb+srv://admin:WSboMFlDG1bIjaSc@cluster0.0n89seq.mongodb.net/?retryWrites=true&w=majority";

// parsery
//Content-type: application/json
app.use(bodyParser.json());

// fix cors
app.use(cors());

app.use("/api/", apiRouter);
mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("logowanie poprawne"));

app.listen(port, () => {
  console.log("Server is listening... http://localhost:" + port);
});
