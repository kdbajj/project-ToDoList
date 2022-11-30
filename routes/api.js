const express = require("express");
const router = express.Router();

const noteActions = require("../actions/api/toDoList");

//pobieranie notatek
router.get("/notes", noteActions.getAllNotes);
//pobieranie notatki
router.get("/notes/:id", noteActions.getNote);
//zapisywanie
router.post("/notes", noteActions.saveNote); // post służy do zapisywania nowych notatek
//edytowanie
router.put("/notes/:id", noteActions.updateNote); // put służy do edycji danych
//usuwanie
router.delete("/notes/:id", noteActions.deleteNote); // usuwanie danych

module.exports = router;
