const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://admin:WSboMFlDG1bIjaSc@cluster0.0n89seq.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => console.log("logowanie poprawne"));
