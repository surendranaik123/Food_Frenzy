import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../Styles/signup.css";
import signupVideo from "../Assets/signup.mp4";

const Signup = () => {
  const [formValues, setFormValues] = useState({
    email: "",
    firstName: "",
    lastName: "",
    password: "",
    confirmPassword: "",
  });

  const [formErrors, setFormErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const validate = () => {
    let errors = {};
    if (!formValues.email) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formValues.email)) {
      errors.email = "Email address is invalid";
    }
    if (!formValues.firstName) {
      errors.firstName = "First name is required";
    }
    if (!formValues.lastName) {
      errors.lastName = "Last name is required";
    }
    if (!formValues.password) {
      errors.password = "Password is required";
    } else if (formValues.password.length < 6) {
      errors.password = "Password must be at least 6 characters";
    }
    if (!formValues.confirmPassword) {
      errors.confirmPassword = "Confirm password is required";
    } else if (formValues.confirmPassword !== formValues.password) {
      errors.confirmPassword = "Passwords do not match";
    }
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
  };

  return (
    <div>
    
    <div className="signup-page">
      
      <div className="video-background">
        <video autoPlay loop muted>
          <source src={signupVideo} type="video/mp4" />
          Sorry, your browser doesn't support videos.
        </video>
      </div>
      <div className="form-container">
        <form onSubmit={handleSubmit} className="signup-form">
          <h1 className="signup-heading">Signup</h1>
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
              type="text"
              name="firstName"
              className="form-control"
              placeholder="First Name"
              value={formValues.firstName}
              onChange={handleChange}
            />
            {formErrors.firstName && (
              <span className="error">{formErrors.firstName}</span>
            )}
          </div>

          <div className="form-group">
            <input
              type="text"
              name="lastName"
              className="form-control"
              placeholder="Last Name"
              value={formValues.lastName}
              onChange={handleChange}
            />
            {formErrors.lastName && (
              <span className="error">{formErrors.lastName}</span>
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

          <div className="form-group confirm-password">
            <input
              type="password"
              name="confirmPassword"
              className="form-control"
              placeholder="Confirm password"
              value={formValues.confirmPassword}
              onChange={handleChange}
            />
            {formErrors.confirmPassword && (
              <span className="error">{formErrors.confirmPassword}</span>
            )}
          </div>

          <button type="submit" className="signup-btn">
            Submit
          </button>
          <div className="signup-link">
            Already Registered? <Link to="/signin">Sign In</Link>
          </div>
        </form>
      </div>
    </div>
    </div>
  );
};

export default Signup;
