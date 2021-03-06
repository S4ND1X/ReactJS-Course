import React from "react";

// Component imports

import Sidebar from "../layout/Sidebar";
import Header from "../layout/header";
import NewFormTask from "../tasks/new-task-form";
import TaskList from "../tasks/task-list";

export default function Projects() {
  return (
    <div className="contenedor-app">
      <Sidebar />
      <div className="seccion-principal">
        <Header />
        <main>
          <NewFormTask />
          <div className="contenedor-tareas">
            <TaskList />
          </div>
        </main>
      </div>
    </div>
  );
}
