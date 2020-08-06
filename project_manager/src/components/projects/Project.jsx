import React from "react";

function Project({ name }) {
  //Receives the name of the project and display it as a button
  return (
    <li>
      <button type="button" className="btn btn-blank">
        {name}
      </button>
    </li>
  );
}

export default Project;
