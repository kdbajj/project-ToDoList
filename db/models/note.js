const mongoose = require("mongoose");

const Note = mongoose.model("Note", {
  title: String,
  body: String,
});

// const newNote = new Note({
//   title: "tytuł testowy :)",
//   body: "tekst listy",
// });
// newNote.save().then(() => {
//   console.log("notatka została zapisana! :)");
// });

module.exports = Note;
