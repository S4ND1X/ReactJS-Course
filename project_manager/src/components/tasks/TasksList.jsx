import React, { Fragment } from "react";

import Task from "./Task";

function TasksList() {
  const tasks = [
    { name: "tarea 1", id: 1, completed: true },
    { name: "tarea 2", id: 2, completed: true },
    { name: "tarea 3", id: 3, completed: true },
    { name: "tarea 4", id: 4, completed: true },
  ];
  return (
    //If the project has tasks, display them else display a message
    <Fragment>
      <h2>Proyecto 1</h2>

      <ul className="listado-tareas">
        {tasks.length === 0 ? (
          <li className="tarea">Empty</li>
        ) : (
          tasks.map((task) => (
            <Task name={task.name} completed={task.completed} key={task.id} />
          ))
        )}
      </ul>
      <button type="button" className="btn btn-eliminar">
        Delete Project &times;
      </button>
      {/* Delete project */}
    </Fragment>
  );
}

export default TasksList;
