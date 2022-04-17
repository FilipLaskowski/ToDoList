import React from "react";

const DeleteButton = ({ tasks, setTasks }) => {
  const deleteCompletedTasks = () => {
    setTasks(tasks.filter((task) => task.done !== true));
  };
  return (
    <button className="delete-btn" onClick={deleteCompletedTasks}>
      Delete completed tasks
    </button>
  );
};
export default DeleteButton;
