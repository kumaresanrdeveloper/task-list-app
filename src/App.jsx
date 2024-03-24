import { useState } from "react";
import AddTask from "./AddTask";
import TaskList from "./TaskList";

export default function TaskApp() {
  const [tasks, setTasks] = useState([]);

  function handleAddTask(text) {
    setTasks([
      ...tasks,
      {
        id: nextId++,
        text: text,
        done: false,
      },
    ]);
  }

  function handleChangeTask(task) {
    setTasks(
      tasks.map((t) => {
        if (t.id === task.id) {
          return task;
        } else {
          return t;
        }
      })
    );
  }

  function handleDeleteTask(taskId) {
    setTasks(tasks.filter((t) => t.id !== taskId));
  }

  return (
    <div className="container">
      <h1>Task List</h1>
      <AddTask tasks={tasks} handleAddTask={handleAddTask} />
      <TaskList
        tasks={tasks}
        handleChangeTask={handleChangeTask}
        handleDeleteTask={handleDeleteTask}
      />
    </div>
  );
}

let nextId = 1;

// you Pass the InitialTask aslo
const initialTasks = [
  { id: 0, text: "Welcome back ! add task list to do", done: true },
];
