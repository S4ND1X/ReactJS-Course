import React, { useState } from "react";
import { Link } from "react-router-dom";

function Login() {
  // Set the user empty at start
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const { email, password } = user;

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
        <h1>Login Into Your Account</h1>

        <form onSubmit={onSubmit}>
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
          <div className="campo-form">
            <input
              type="submit"
              className="btn btn-primario btn-block"
              value="Login"
            />
          </div>
        </form>

        {/* Link to established rout on main switch */}

        <Link to={"/signin"} className="enlace-cuenta">
          Sign Up
        </Link>
      </div>
    </div>
  );
}

export default Login;
