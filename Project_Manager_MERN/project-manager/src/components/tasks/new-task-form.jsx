import React from "react";

export default function NewTaskForm() {
  return (
    <div className="formulario">
      <form>
        <div className="contenedor-input">
          <input
            type="text"
            className="input-text"
            placeholder="Task"
            name="task"
          />
        </div>
        <div className="contenedor-input">
          <input
            type="submit"
            className="btn btn-primario btn-block btn-submit"
            value="Add task"
          />
        </div>
      </form>
    </div>
  );
}
