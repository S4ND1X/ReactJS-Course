import React, { useState } from "react";

import { Link } from "react-router-dom";

export default function SignIn() {
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
    password_confirm: "",
  });

  const { username, email, password, password_confirm } = user;

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    //Validate inputs

    //Minimun 6 characters

    // password are equal

    //Pass the action
    console.log("oa");
  };

  return (
    <div className="form-usuario">
      <div className="contenedor-form sombra-dark">
        <h1>Create Account</h1>

        <form onSubmit={handleSubmit}>
          <div className="campo-form">
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              name="username"
              placeholder="Username"
              onChange={handleChange}
              value={username}
            />
          </div>
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
            <label htmlFor="password_confirm">Confirm password:</label>
            <input
              type="password"
              id="password_confirm"
              name="password_confirm"
              placeholder="*******"
              onChange={handleChange}
              value={password_confirm}
            />
          </div>
          <div className="campo-form">
            <input
              type="submit"
              className="btn btn-primario btn-block "
              value="Create account"
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
