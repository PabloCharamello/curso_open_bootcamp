import React from "react";
import { LEVELS } from "../../models/levels.enum";
import { Task } from "../../models/task.class";
import TaskComponent from "../pure/TaskComponent";

function TasklistComponent(props) {
  const changeState = (id) => {
    console.log("TODO: Cambiar estado de una tarea");
  };

  const DEFAULTTASK = new Task(
    "Example",
    "Default Description",
    false,
    LEVELS.NORMAL
  );

  return (
    <div>
      <div>
        <h1>Your tasks:</h1>
      </div>
      <TaskComponent task={DEFAULTTASK} />
    </div>
  );
}

export default TasklistComponent;
