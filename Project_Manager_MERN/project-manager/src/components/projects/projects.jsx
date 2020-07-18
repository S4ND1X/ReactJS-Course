import React from "react";

// Component imports

import Sidebar from "../layout/Sidebar";

export default function Projects() {
  return (
    <div className="contenedor-app">
      <Sidebar />
      <div className="seccion-principal">
        <main>
          <div className="contenedor-tareas"></div>
        </main>
      </div>
      <h1>Projects</h1>
    </div>
  );
}
