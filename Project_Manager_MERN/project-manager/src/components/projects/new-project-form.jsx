import React, { Fragment, useState } from "react";

export default function NewProjectForm() {
  const [project, setProject] = useState({
    name: "",
  });

  const onProjectChange = (e) => {
    setProject({
      ...project,
      [e.target.name]: e.target.value,
    });
  };

  const onProjectSubmit = (e) => {
    e.preventDefault();

    //Validate state

    //Add project

    //Reset project
  };

  const { name } = project;

  return (
    <Fragment>
      <button type="button" className="btn btn-block btn-primario">
        New project
      </button>

      <form className="formulario-nuevo-proyecto" onSubmit={onProjectSubmit}>
        <input
          type="text"
          className="input-text"
          placeholder="Project Name"
          name="name"
          value={name}
          onChange={onProjectChange}
        />

        <input
          type="submit"
          className="btn btn-block btn-primario"
          value="Add project"
        />
      </form>
    </Fragment>
  );
}
