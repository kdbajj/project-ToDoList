const Note = require("../../db/models/note");

class NoteActions {
  saveNote(req, res) {
    // const newNote = new Note({
    //   title: "Zrobić zakupy :)",
    //   body: "mleko, jajka, woda",
    // });
    // newNote.save().then(() => {
    //   console.log("notatka została zapisana! :)");
    // });
    const title = req.body.title;
    const body = req.body.body;

    res.send("Notatka została stworzona! Tytuł: " + title + " ,treść: " + body);
  }

  getAllNotes(req, res) {
    // pobieranie notatek
    res.send("API działa!!!");
  }

  getNote(req, res) {
    // pobieranie notatek
    res.send("inf o notatce");
  }

  updateNote(req, res) {
    // aktualizowanie notatek
    res.send("Notatka zaktualizowana"); // 500
  }

  deleteNote(req, res) {
    const id = req.params.id;
    // usuwanie notatek
    res.send("Notatka usunięta. ID: " + id);
  }
}

module.exports = new NoteActions();
