import React from "react";
import Dialog from "./Dialog";
import styles from "../../styles/notes.module.css";
import { useState } from "react";
import { Pencil, Trash } from "lucide-react";

const colors = [
  "#FFFAFA",
  "#F5FFFA",
  "#F0F8FF",
  "#F0FFF0",
  "#E6E6FA",
  "#FFF5EE",
  "#FFFFF0",
  "#FFFFE0",
  "#F7E7CE",
  "#F5F5DC",
  "#F5F5F5",
  "#B0E0E6",
  "#FFDAB9",
  "#FFF8DC",
];

const Notes = () => {
  const [showForm, setShowForm] = React.useState(false);
  const [notes, setNotes] = useState([]);
  const [isEditing, setIsEditing] = useState(null);
  const [showMore, setShowMore] = useState(null);

  const addNote = (data) => {
    setNotes([...notes, data]);
  };

  const removeNote = (index) => {
    const newNotes = [...notes];
    newNotes.splice(index, 1);
    setNotes(newNotes);
  };
  const editNote = (index) => {
    setIsEditing(index);
    setShowForm(true);
  };
  const updateNote = (data) => {
    const newNotes = [...notes];
    newNotes[isEditing] = data;
    setNotes(newNotes);
  };

  const onClose = () => {
    setShowForm(false);
    setIsEditing(null);
  };

  return (
    <div className={styles.notes}>
      <div className={styles.header}>
        <h2>Notes App</h2>
        <button onClick={() => setShowForm(!showForm)}>
          {showForm ? "close Form" : "Add Note"}
        </button>
      </div>
      <Dialog
        editNote={notes[isEditing]}
        updateNote={updateNote}
        addNote={addNote}
        show={showForm}
        onClose={onClose}
      />
      <div className={styles.notes_container}>
        {notes.map((note, index) => (
          <div
            key={index}
            className={styles.note}
            style={{ backgroundColor: colors[index % colors.length] }}
          >
            <h1>{note.title}</h1>
            <p className={showMore == index ? "" : styles.line_clamp_3}>
              {note.message}
            </p>
            <button
              onClick={() => setShowMore(showMore == index ? null : `${index}`)}
              style={{ display: note.message.length > 103 ? "block" : "none" }}
            >
              Show {showMore === index ? "less" : "more"}
            </button>

            <Pencil onClick={() => editNote(index)} />
            <Trash onClick={() => removeNote(index)} />
          </div>
        ))}
      </div>
    </div>
  );
};
export default Notes;
