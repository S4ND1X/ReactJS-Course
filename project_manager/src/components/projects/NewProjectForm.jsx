import React, { Fragment, useState } from "react";

function NewProjectForm() {
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
      <button type="button" className="btn btn-primario btn-block">
        New Project
      </button>
      {/* Create project */}
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
      {/* Project form */}
    </Fragment>
  );
}

export default NewProjectForm;
