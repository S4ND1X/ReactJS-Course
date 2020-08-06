import React from "react";

function HeaderBar() {
  //Receives name of the user and display it inside the span
  return (
    <header className="app-header">
      <p className="nombre-usuario">
        Welcome <span>Jorge Sanchez</span>
      </p>
      <nav className="nav-principal">
        <a href="#!">Log out </a>
      </nav>
    </header>
  );
}

export default HeaderBar;
