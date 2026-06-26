import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import styles from "../../styles/notes.module.css";

const Dialog = ({ editNote, updateNote, addNote, show, onClose }) => {
  const [form, setForm] = useState({
    title: "",
    message: "",
  });
  const handleInput = (e) => {
    const eleName = e.target.name;
    const value = e.target.value;

    setForm({ ...form, [eleName]: value });
  };

  const submitHandler = () => {
    if (editNote) {
      updateNote(form);
    } else {
      addNote(form);
    }
    setForm({ title: "", message: "" });
    onClose();
  };
  useEffect(() => {
    if (editNote) {
      setForm(editNote);
    } else {
      setForm({ title: "", message: "" });
    }
  }, [editNote]);

  return (
    <div
      onClick={onClose}
      className={styles.dialog}
      style={{ opacity: show ? 1 : 0, visibility: show ? "visible" : "hidden" }}
    >
      <div
        className={styles.dialog_content}
        onClick={(e) => e.stopPropagation()}
      >
        <h1>{editNote ? "Edit " : "Add "}Dialog</h1>
        <div>
          <div className={styles.Form_container}>
            <input
              value={form.title}
              name="title"
              type="title"
              placeholder="Enter the title"
              onChange={handleInput}
            />
            <textarea
            rows={6}
              value={form.message}
              name="message"
              type="textarea"
              placeholder="Enter the message"
              onChange={handleInput}
            ></textarea>
            <button onClick={submitHandler}>
              {editNote ? "Update" : "save"}
            </button>
          </div>
        </div>
        <button className={styles.close_button} onClick={onClose}>
          x
        </button>
      </div>
    </div>
  );
};

export default Dialog;
