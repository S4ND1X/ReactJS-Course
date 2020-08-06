import React, { Fragment } from "react";

function Task({ name, completed }) {
  return (
    //If task is completed then render a green badge if not a red one
    <Fragment>
      <li className="tarea sombra">
        <p>{name}</p>
        <div className="estado">
          {completed ? (
            <button type="button" className="completo">
              Completed
            </button>
          ) : (
            <button type="button" className="incompleto">
              Uncompleted
            </button>
          )}
        </div>
        {/* Badge container */}

        <div className="acciones">
          <button type="button" className="btn btn-primario">
            Edit
          </button>
          {/* Edit button */}
          <button type="button" className="btn btn-secundario">
            Delete
          </button>
          {/* Delete button */}
        </div>
        {/* Task buttons */}
      </li>
    </Fragment>
  );
}

export default Task;
