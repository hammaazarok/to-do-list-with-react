import React, { useState } from "react";
import styles from "./TodoItem.module.css";
function TodoItem(props) {
  const edit = {
    editing: false,
  };
  const [state, handleEditing] = useState(edit);
  const completedStyle = {
    fontStyle: "italic",
    color: "#595959",
    opacity: 0.4,
    textDecoration: "line-through",
  };
  const { completed, id, title } = props.todo;

  let viewMode = {};
  let editMode = {};

  if (state.editing) {
    viewMode.display = "none";
  } else {
    editMode.display = "none";
  }
  const handleUpdatedDone = (event) => {
    if (event.key === "Enter") {
      handleEditing({ editing: false })
    }
  };
  return (
    <li className={styles.item}>
      <div
        onDoubleClick={() => handleEditing({ editing: true })}
        style={viewMode}
      >
        <input
          type="checkbox"
          checked={completed}
          onChange={() => props.handleChangeProps(id)}
        />
        <span style={completed ? completedStyle : null}>{title}</span>
        <button onClick={() => props.deleteTodoProps(id)}>Delete</button>
      </div>
      <input
        type="text"
        style={editMode}
        className={styles.textInput}
        value={title}
        onChange={(e) => {
          props.setUpdate(e.target.value, id);
        }}
        onKeyDown={handleUpdatedDone}
      />
    </li>
  );
}

export default TodoItem;
