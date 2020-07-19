import React, { Fragment } from "react";

//Custom components
import Task from './task'

export default function TaskList() {
  const tasks = [
    {
      name: "Crear header",
      completed: false,
    },
    {
      name: "Crear header",
      completed: false,
    },
    {
      name: "Crear header",
      completed: false,
    },
    {
      name: "Crear header",
      completed: false,
    },
  ];

  return (
    <Fragment>
      <h2>Proyecto: Dev George</h2>

      <ul className="listado-tareas">
        {tasks.length === 0 ? (
          <li className="tarea">
            <p>No hay tareas</p>
          </li>
        ) : (
          tasks.map((task) => <Task task={task} />)
        )}
      </ul>
    </Fragment>
  );
}
