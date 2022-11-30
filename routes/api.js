const express = require("express");
const router = express.Router();

const noteActions = require("../actions/api/toDoList");

router.get("/", noteActions.saveNote);

module.exports = router;
