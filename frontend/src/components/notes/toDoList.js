import React from "react";
import "./Notes.css";
import Note from "../Note/Note";
import NewNote from "../NewNote/NewNote";
import EditNote from "../EditNote/EditNote";
import Modal from "react-modal";
import axios from "axios";

class ToDoList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: [],
      showEditModal: false,
      editNote: {},
    };
  }

  componentDidMount() {
    this.fetchNotes();
  }

  async fetchNotes() {
    const res = await axios.get("http://localhost:3001/api/notes");
    const notes = res.data;
    this.setState({ notes });
    // console.log(res);
  }

  //usuwanie notatki
  async deleteNote(id) {
    console.log("usuwanie notatki", id);
    const notes = [...this.state.notes].filter((note) => note._id !== id);
    await axios.delete("http://localhost:3001/api/notes/" + id);
    this.setState({ notes });
  }

  //usuwanie notatki
  async addNote(note) {
    const notes = [...this.state.notes];
    await axios.post("http://localhost:3001/api/notes", note);
    notes.push(note);
    this.setState({ notes });
  }

  editNote(note) {
    const notes = [...this.state.notes];
    const index = notes.findIndex((x) => x._id === note._id);
    if (index >= 0) {
      notes[index] = note;
      this.setState({ notes });
    }
    this.toggleModal();
  }

  toggleModal() {
    this.setState({ showEditModal: !this.state.showEditModal });
  }

  editNoteHandler(note) {
    this.toggleModal();
    this.setState({ editNote: note });
  }

  render() {
    // const ToDoList = () => {
    return (
      <div>
        <header>
          <p>Moje notatki:</p>
        </header>

        <NewNote onAdd={(note) => this.addNote(note)} />

        <Modal isOpen={this.state.showEditModal} contentLabel="Edytuj notatkę">
          <EditNote
            title={this.state.editNote.title}
            body={this.state.editNote.body}
            id={this.state.editNote._id}
            onEdit={(note) => this.editNote(note)}
          />
          <button onClick={() => this.toggleModal()}>Anuluj</button>
        </Modal>

        {this.state.notes.map((note, index) => (
          <Note
            key={note._id ?? index}
            title={note.title}
            body={note.body}
            id={note._id}
            onEdit={(note) => this.editNoteHandler(note)}
            onDelete={() => this.deleteNote(note._id)}
          />
        ))}
      </div>
    );
  }
}
export default ToDoList;
