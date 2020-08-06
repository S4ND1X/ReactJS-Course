import React, { Fragment, useState, useContext } from "react";

import projectContext from "../../context/projects/projectContext";

function NewProjectForm() {
  //Get global state by getting the context and then getting the atrributes of that state
  const projectsContext = useContext(projectContext);
  const { create, showForm } = projectsContext;

  //Component state
  const [project, setProject] = useState({
    name: "",
  });

  //   Extracting attributes from object
  const { name } = project;

  //   Set project info based on form
  const handleChange = (e) => {
    setProject({
      ...project,
      [e.target.name]: e.target.value,
    });
  };

  //When form is submitted
  const onSubmit = (e) => {
    e.preventDefault();

    // No empty fields
  };

  return (
    <Fragment>
      <button
        type="button"
        className="btn btn-primario btn-block"
        onClick={() => showForm()}
      >
        New Project
      </button>
      {/* Create project */}
      {create ? (
        <form className="formulario-nuevo-proyecto" onSubmit={onSubmit}>
          <input
            type="text"
            className="input-text"
            placeholder="Project Name"
            name="name"
            value={name}
            onChange={handleChange}
          />
          {/* Project Name */}
          <input
            type="submit"
            className="btn btn-primario btn-block"
            value="Add Project"
          />
          {/* Add new project */}
        </form>
      ) : null}
    </Fragment>
  );
}

export default NewProjectForm;
