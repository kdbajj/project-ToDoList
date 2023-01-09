import React, { useState } from "react";

function NewNote(props) {
  const [showForm, showSetForm] = useState(false);
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  const changeTitleHandler = (event) => {
    const value = event.target.value;
    setTitle(value);
  };

  const changeDescHandler = (event) => {
    const value = event.target.value;
    setDesc(value);
  };

  const note = {
    title: title,
    body: desc,
  };
  const addNote = async () => {
    props.onAdd(note);

    setTitle("");
    setDesc("");
    showSetForm(false);
  };

  return showForm ? (
    <div className="note">
      <label>Tytuł: </label>
      <input type="text" value={title} onChange={changeTitleHandler} />

      <label>Opis: </label>
      <input type="text" value={desc} onChange={changeDescHandler} />

      <button onClick={() => addNote()}>Dodaj notatkę</button>
    </div>
  ) : (
    <button onClick={() => showSetForm(true)}>Nowa notatka</button>
  );
}

export default NewNote;
