import React, { useState } from "react";

import { Link } from "react-router-dom";

export default function Login() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const { email, password } = user;

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    //Validate inputs

    //Pass the action
    console.log("oa");
  };

  return (
    <div className="form-usuario">
      <div className="contenedor-form sombra-dark">
        <h1>Log In</h1>

        <form onSubmit={handleSubmit}>
          <div className="campo-form">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Your Email"
              onChange={handleChange}
              value={email}
            />
          </div>
          <div className="campo-form">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="*******"
              onChange={handleChange}
              value={password}
            />
          </div>
          <div className="campo-form">
            <input
              type="submit"
              className="btn btn-primario btn-block "
              value="Enter"
            />
          </div>
        </form>

        <Link to={"/sign-in"} className="enlace-cuenta">
          Sign In
        </Link>
      </div>
    </div>
  );
}
