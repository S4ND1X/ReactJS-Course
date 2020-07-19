import React from "react";

export default function task({ task }) {
  return (
    <li className="tarea sombra">
      <p>{task.name} </p>
      <div className="estado">
        {task.completed ? (
          <button type="button" className="completo">
            Completed
          </button>
        ) : (
          <button type="button" className="incompleto">
            Uncomplete
          </button>
        )}
      </div>

      <div className="acciones">
        <button type="button" className='btn btn-primario'>Editar</button>
        <button type="button" className='btn btn-secundario'>Eliminar</button>
      </div>
    </li>
  );
}
