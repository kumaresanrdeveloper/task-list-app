import { useState } from "react";

export default function AddTask(props) {
  const [text, setText] = useState("");

  const handleChange = (e) => {
    setText(e.target.value);
  };
  return (
    <div className="newtask">
      <input placeholder="Add task" value={text} onChange={handleChange} />
      <button
        onClick={() => {
          setText("");
          props.handleAddTask(text);
        }}
        className={text.length == 0 ? "button-disabled" : null}
        disabled={text.length == 0}
      >
        Add
      </button>
    </div>
  );
}
