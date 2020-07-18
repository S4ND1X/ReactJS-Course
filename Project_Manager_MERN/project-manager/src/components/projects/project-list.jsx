import React from "react";

// Custom components
import Project from "./project";

export default function ProjectList() {
  const projects = [
    { name: "prueba 1" },
    { name: "prueba 2" },
    { name: "prueba 3" },
  ];

  return (
    <ul className="lista-proyectos">
      {projects.map((project) => (
        <Project project={project} />
      ))}
    </ul>
  );
}
