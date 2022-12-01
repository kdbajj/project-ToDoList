import React from "react";
import "./Notes.css";
import Note from "../Note/Note";

class ToDoList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: [
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
      ],
    };
  }

  deleteNote(id) {
    console.log("usuwanie notatki", id);
    const notes = [...this.state.notes].filter((note) => note.id !== id);
    this.setState({ notes });
  }

  render() {
    // const ToDoList = () => {
    return (
      <div>
        <header>
          <p>Moje notatki:</p>
        </header>
        {this.state.notes.map((note) => (
          <Note
            key={note.id}
            title={note.title}
            body={note.body}
            id={note.id}
            onDelete={(id) => this.deleteNote(id)}
          />
        ))}
      </div>
    );
  }
}
export default ToDoList;
