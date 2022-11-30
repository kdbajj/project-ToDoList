const Note = require("../../db/models/note");

class NoteActions {
  async saveNote(req, res) {
    const title = req.body.title;
    const body = req.body.body;
    let note;

    try {
      const note = new Note({ title, body });
      await note.save();
    } catch (err) {
      return res.status(422).json({ message: err.message });
    }

    // note.save().then(() => {
    //   console.log("notatka została zapisana! :)");
    // });

    res.status(201).json(note);
  }

  async getAllNotes(req, res) {
    const doc = await Note.find({});
    // pobieranie notatek
    res.status(200).json(doc);
  }

  async getNote(req, res) {
    const id = req.params.id;
    const note = await Note.findOne({ _id: id });
    // pobieranie notatek
    res.status(200).json(note);
  }

  // aktualizowanie notatek
  async updateNote(req, res) {
    const id = req.params.id;
    const title = req.body.title;
    const body = req.body.body;

    const note = await Note.findOne({ _id: id });
    note.title = title;
    note.body = body;
    await note.save();

    res.status(201).json(note); // 500
  }

  // usuwanie notatek
  async deleteNote(req, res) {
    const id = req.params.id;
    await Note.deleteOne({ _id: id });

    res.sendStatus(204);
  }
}

module.exports = new NoteActions();
