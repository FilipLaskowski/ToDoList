import React, { useState } from "react";
import Todolist from "./components/Todolist";
import Menu from "./components/Menu";
import DeleteButton from "./components/DeleteButton";
import FormComp from "./components/FormComp";
import { BsPlusLg } from "react-icons/bs";

function App() {
  const [tasks, setTasks] = useState([]);
  const [taskModal, setTaskModal] = useState(false);
  const [modalButton, setModalButton] = useState(true);
  return (
    <main className="d-flex flex-column align-items-center">
      <Menu tasks={tasks} setTasks={setTasks} />
      <Todolist tasks={tasks} setTasks={setTasks} />
      {tasks.length > 0 ? (
        <DeleteButton tasks={tasks} setTasks={setTasks} />
      ) : (
        "There is no tasks"
      )}
      {taskModal ? (
        <FormComp
          tasks={tasks}
          setTasks={setTasks}
          setTaskModal={setTaskModal}
          setModalButton={setModalButton}
        />
      ) : (
        ""
      )}
      {modalButton ? (
        <button
          className="modal-btn"
          onClick={() => {
            setTaskModal(true);
            setModalButton(false);
          }}
        >
          Add new task
        </button>
      ) : (
        <button
          className="modal-btn"
          onClick={() => {
            setTaskModal(false);
            setModalButton(true);
          }}
        >
          Discard Task
        </button>
      )}
    </main>
  );
}

export default App;
