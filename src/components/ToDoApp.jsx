import React, { useState } from "react";
import Task from "./Task";

const ToDoApp = () => {
  const [title, setTitle] = useState("");
  const [task, setTask] = useState([]);

  const handleChange = (e) => {
    const value = e.target.value;
    setTitle(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newTask = {
      id: crypto.randomUUID(),
      title: title,
      completed: false,
    };
    setTask([newTask, ...task]);
    setTitle("");
  };

  const handleUpdate = (id, value) => {
    const tempTask = [...task];
    const item = tempTask.find((item) => item.id === id);
    item.title = value;
    setTask(tempTask);
  };

  const handleDelete = (id) => {
    const tempTaskDelete = task.filter((item) => item.id !== id);
    setTask(tempTaskDelete);
  };

  return (
    <div className="todo__container">
      <div className="todo__header">
        <h1>Lista de tareas</h1>
      </div>
      <form action="" className="todo__create-form" onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          type="text"
          className="todo__create-input"
          value={title}
          placeholder="Agregar una tarea"
        />
        <input
          onClick={handleSubmit}
          type="submit"
          value="Crear tarea"
          className="todo__create-button"
          disabled={title === ""}
        />
      </form>

      <div className="todo__list">
        {task.map((item) => (
          <Task
            key={item.id}
            item={item}
            onUpdate={handleUpdate}
            onDelete={handleDelete}
          />
        ))}
      </div>
    </div>
  );
};

export default ToDoApp;
