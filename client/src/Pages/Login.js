import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../Styles/Login.css";
import loginVideo from "../Assets/login.mp4";

const Login = () => {
  const [formValues, setFormValues] = useState({ email: "", password: "" });
  const [formErrors, setFormErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const validate = () => {
    const errors = {};
    if (!formValues.email) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formValues.email)) {
      errors.email = "Email address is invalid";
    }

    if (!formValues.password) {
      errors.password = "Password is required";
    } else if (formValues.password.length < 6) {
      errors.password = "Password must be at least 6 characters";
    }

    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
  };

  return (
    <div className="login-page">
      <div className="video-background">
        <video autoPlay loop muted>
          <source src={loginVideo} type="video/mp4" />
          Sorry, your browser doesn't support videos.
        </video>
      </div>
      <div className="form-container">
        <form onSubmit={handleSubmit} className="login-form">
          <h1 className="login-heading">Login</h1>
          <div className="form-group">
            <input
              type="email"
              name="email"
              className="form-control"
              placeholder="Enter email"
              value={formValues.email}
              onChange={handleChange}
            />
            {formErrors.email && (
              <span className="error">{formErrors.email}</span>
            )}
          </div>
          <div className="form-group">
            <input
              type="password"
              name="password"
              className="form-control"
              placeholder="Password"
              value={formValues.password}
              onChange={handleChange}
            />
            {formErrors.password && (
              <span className="error">{formErrors.password}</span>
            )}
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
          <div className="signup-link">
            New User? <Link to="/signup">Signup</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
