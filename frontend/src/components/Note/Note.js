import React, { useState } from "react";
import { AiFillCaretDown, AiFillCaretUp } from "react-icons/ai";
// import toDoList from "../notes/toDoList";

function Note(props) {
  const [showDesc, setShowDesc] = useState(false);

  const toggleDesc = () => {
    setShowDesc(!showDesc);
  };

  return (
    <div className="note">
      <p onClick={() => toggleDesc()}>{props.title}</p>
      {showDesc && <div className="description">{props.body}</div>}

      <button>edytuj</button>
      <button className="delete" onClick={() => props.onDelete(props.id)}>
        usuń
      </button>
      <button onClick={() => setShowDesc(!showDesc)}>
        {showDesc ? <AiFillCaretUp /> : <AiFillCaretDown />}
      </button>
    </div>
  );
}

export default Note;
