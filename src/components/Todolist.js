import React from "react";
import { BsCheckLg, BsReply } from "react-icons/bs";

const Todolist = ({ tasks, setTasks }) => {
  let currentDate = new Date();

  const doneHandle = (key) => {
    setTasks(
      tasks.map((task) => {
        if (key === task.key) {
          return { ...task, done: !task.done };
        }
        return task;
      })
    );
  };

  return (
    <div className="tasks-container">
      {tasks.map((task) => {
        const { title, date, key, done } = task;
        let daysLeft = Math.round(
          ((currentDate - date) / (1000 * 60 * 60 * 24)) * -1
        );
        let daysColor = () => {
          if (daysLeft < 0) {
            return "red";
          }
          return "black";
        };
        let daysCount = () => {
          if (daysLeft === -1) {
            return "Yesterday";
          }
          if (daysLeft < -1) {
            return `${daysLeft * -1} days ago`;
          }
          if (daysLeft === 0) {
            return "Today";
          }
          if (daysLeft > 1) {
            return `${daysLeft} days left`;
          }
          if (daysLeft === 1) {
            return `Tommorow`;
          }
        };
        return (
          <div
            className={done ? "task-element border-done " : "task-element"}
            key={key}
          >
            {done ? (
              <div
                className="task-check done-true"
                onClick={() => doneHandle(key)}
              >
                <BsReply />
              </div>
            ) : (
              <div
                className="task-check done-false"
                onClick={() => doneHandle(key)}
              >
                <BsCheckLg />
              </div>
            )}
            <div className="task-info">
              <h4 className={done ? "task-info-done" : ""}>{title}</h4>
              {done ? "" : <p style={{ color: daysColor() }}>{daysCount()}</p>}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Todolist;
