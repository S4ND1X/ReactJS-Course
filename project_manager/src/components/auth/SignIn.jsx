import React, { useState } from "react";
import { Link } from "react-router-dom";

function Signin() {
  // Set the user empty at start
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
    confirm: "",
  });

  //   Extracting attributes from object
  const { username, email, password, confirm } = user;

  //   Set user info based on form
  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    // No empty fields
  };

  return (
    // Simple login form
    <div className="form-usuario">
      <div className="contenedor-form sombra-dark">
        <h1>Create Account</h1>

        <form onSubmit={onSubmit}>
          <div className="campo-form">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              name="username"
              placeholder="e.g Messi220"
              onChange={handleChange}
            />
          </div>
          {/* Username*/}
          <div className="campo-form">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Your Email"
              onChange={handleChange}
            />
          </div>
          {/* Email*/}
          <div className="campo-form">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="********"
              onChange={handleChange}
            />
          </div>
          {/* Password*/}
          <div className="campo-form">
            <label htmlFor="confirm">Confirm Password</label>
            <input
              type="password"
              id="confirm"
              name="confirm"
              placeholder="Repeat password"
              onChange={handleChange}
            />
          </div>
          {/* Confirm password*/}
          <div className="campo-form">
            <input
              type="submit"
              className="btn btn-primario btn-block"
              value="Create Account"
            />
          </div>
          {/* Submit btn */}
        </form>

        {/* Link to established rout on main switch */}

        <Link to={"/"} className="enlace-cuenta">
          Back to login
        </Link>
      </div>
    </div>
  );
}

export default Signin;
