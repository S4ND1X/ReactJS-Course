import React from "react";

import Sidebar from "../layout/Sidebar";

import HeaderBar from "../layout/HeaderBar";

import TaskForm from "../tasks/TaskForm";

import TasksList from "../tasks/TasksList";

function Dashboard() {
  //Main container of the whole app
  return (
    <div className="contenedor-app">
      <Sidebar />

      <div className="seccion-principal">
        <HeaderBar />
        <main>
          <TaskForm />
          <div className="contenedor-tareas">
            <TasksList />
          </div>
        </main>
      </div>
    </div>
  );
}

export default Dashboard;
