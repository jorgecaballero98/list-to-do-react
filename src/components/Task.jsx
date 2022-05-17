import React, { useState } from "react";

const Task = ({ item, onUpdate, onDelete }) => {
  const [isEdit, setIsEdit] = useState(false);

  const FormEdit = () => {
    const [newValue, setNewValue] = useState(item.title);

    const handleSubmit = (e) => {
      e.preventDefault();
    };

    const handleChange = (e) => {
      const value = e.target.value;
      setNewValue(value);
    };

    const handleClickUpdate = (e) => {
      onUpdate(item.id, newValue);
      setIsEdit(false);
    };

    return (
      <form className="task__form-update" onSubmit={handleSubmit}>
        <input
          type="text"
          className="task__input"
          onChange={handleChange}
          value={newValue}
        />
        <button className="button" onClick={handleClickUpdate}>
          Editar
        </button>
      </form>
    );
  };

  const TaskElement = ({ item }) => {
    return (
      <div className="task__info">
        <span className="todo__title">{item.title}</span>
        <button className="button" onClick={() => setIsEdit(true)}>
          Editar
        </button>
        <button className="button__delete" onClick={(e) => onDelete(item.id)}>
          Eliminar
        </button>
      </div>
    );
  };

  return (
    <>
      <div className="task">
        {isEdit ? (
          <FormEdit item={item} />
        ) : (
          <TaskElement item={item} setIsEdit={setIsEdit} />
        )}
      </div>
    </>
  );
};

export default Task;
