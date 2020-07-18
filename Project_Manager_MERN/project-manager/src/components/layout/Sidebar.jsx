import React from "react";

// Custom components
import NewProjectForm from "../projects/new-project-form";

export default function Sidebar() {
  return (
    <aside>
      <h1>
        MERN<span>Tasks</span>
      </h1>

      <NewProjectForm />

      <div className="proyectos">
        <h2>Projects</h2>
      </div>
    </aside>
  );
}
