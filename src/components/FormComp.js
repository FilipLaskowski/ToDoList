import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { AiOutlinePlus } from "react-icons/ai";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const FormComp = ({ setTasks, tasks, setTaskModal, setModalButton }) => {
  const [startDate, setStartDate] = useState(new Date());
  const [taskValue, setTaskValue] = useState("");
  const [descValue, setDescValue] = useState("");
  const [dateCheckbox, setDateCheckbox] = useState(false);
  const changeValue = (e) => {
    setTaskValue(e.target.value);
  };
  const changeValueDesc = (e) => {
    setDescValue(e.target.value);
  };
  const formHandler = (e) => {
    e.preventDefault();
    let taskObject = {
      title: taskValue,
      desc: descValue,
      key: Math.random(),
      date: startDate,
      done: false,
    };
    setTasks([...tasks, taskObject]);
    setTaskValue("");
    setDescValue("");
    setTaskModal(false);
    setModalButton(true);
  };
  const checkboxHandler = () => {
    setDateCheckbox(!dateCheckbox);
  };
  return (
    <form className="task-form" onSubmit={formHandler}>
      <h1>New Task</h1>
      <label for="taskTitle">Task name:</label>
      <input
        name="taskTitle"
        type="text"
        placeholder="Enter Title..."
        maxLength="25"
        value={taskValue}
        onChange={changeValue}
        minlength="3"
        required
      />
      <label for="taskDesc">Task description:</label>
      <textarea
        className="task-desc"
        name="taskDesc"
        type="text"
        placeholder="Enter description..."
        value={descValue}
        onChange={changeValueDesc}
      />
      <div className="date-checkbox-row">
        <label for="date-disable">Enable due date</label>
        <input type="checkbox" name="date-disable" onChange={checkboxHandler} />
      </div>
      {dateCheckbox ? (
        <div className="task-date-row">
          <label for="calendar">Due date: </label>
          <DatePicker
            name="calendar"
            selected={startDate}
            onChange={(date) => setStartDate(date)}
          />
        </div>
      ) : (
        <div className="task-date-row">
          <label for="calendar" className="crossed">
            Due date:
          </label>
          <DatePicker
            name="calendar"
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            disabled
            placeholder="This is disabled"
          />
        </div>
      )}

      <Button type="submit">Add</Button>
    </form>
  );
};

export default FormComp;
