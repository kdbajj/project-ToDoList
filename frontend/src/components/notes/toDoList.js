import React from "react";
import "./Notes.css";
import Note from "./Note/Note";

class ToDoList extends React.Component {
  constructor(props) {
    super(props);
    this.notes = [
      {
        id: "2323",
        title: "Zrobić zakupy",
        body: "Kupić chleb",
      },
      {
        id: "4234",
        title: "Zająć się psem",
        body: "Wyprowadzić psa i wykąpać po spacerze",
      },
    ];
  }
  render() {
    // const ToDoList = () => {
    return (
      <div>
        <header>
          <p>Moje notatki:</p>
        </header>
        {this.notes.map((note) => (
          <Note title={note.title} body={note.body} id={note.id} />
        ))}
        ;
      </div>
    );
  }
}
export default ToDoList;
