import React from "react";

function TaskForm() {
  return (
    <div className="formulario">
      <form>
        <div className="contenedor-input">
          <input
            type="text"
            className="input-text"
            placeholder="Task Name"
            name="name"
          />
        </div>
        {/* Task name */}
        <div className="contenedor-input">
          <input
            type="submit"
            className="btn btn-primario btn-block"
            value="Add Task"
          />
        </div>
        {/*Submit button*/}
      </form>
      {/* Task form */}
    </div>
  );
}

export default TaskForm;
