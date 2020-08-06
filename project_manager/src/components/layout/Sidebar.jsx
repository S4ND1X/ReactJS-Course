import React from "react";

import NewProjectForm from "../projects/NewProjectForm";

import ProjectsList from "../projects/ProjectsList";

function Sidebar() {
  return (
    //Aside with all inputs an content needed to display current project or add new ones
    <aside>
      <h1>
        Project<span>Manager</span>
      </h1>

      <NewProjectForm />

      <div className="proyectos">
        <h2>Your Projects</h2>
        <ProjectsList />
      </div>
    </aside>
  );
}

export default Sidebar;
