import React from "react";

import Project from "./Project";

function ProjectsList() {
  const projectList = [
    { name: "Proyecto 1" },
    { name: "Proyecto 2" },
    { name: "Proyecto 3" },
    { name: "Proyecto 4" },
  ];
  return (
    <ul className="listado-proyectos">
      {projectList.map((project) => (
        <Project name={project.name} />
      ))}
    </ul>
  );
}

export default ProjectsList;
