import { useState } from "react";

export default function TaskList(props) {
  return (
    <ul>
      {props.tasks.map((task) => (
        <li key={task.id}>
          <Task
            task={task}
            onChange={props.handleChangeTask}
            onDelete={props.handleDeleteTask}
          />
        </li>
      ))}
    </ul>
  );
}

function Task(props) {
  const [isEditing, setIsEditing] = useState(false);
  let taskContent;
  if (isEditing) {
    taskContent = (
      <>
        <input
          value={props.task.text}
          onChange={(e) => {
            props.onChange({
              ...props.task,
              text: e.target.value,
            });
          }}
        />
        <button className="action-button" onClick={() => setIsEditing(false)}>
          Save
        </button>
      </>
    );
  } else {
    taskContent = (
      <>
        <label className="text" htmlFor={props.task.id}>
          {props.task.text}
        </label>
        <button className="action-button" onClick={() => setIsEditing(true)}>
          Edit
        </button>
      </>
    );
  }
  return (
    <div className="tasks">
      <input
        type="checkbox"
        checked={props.task.done}
        onChange={(e) => {
          props.onChange({
            ...props.task,
            done: e.target.checked,
          });
        }}
        id={props.task.id}
      />
      {taskContent}
      <button
        className="action-button"
        onClick={() => props.onDelete(props.task.id)}
      >
        Delete
      </button>
    </div>
  );
}
