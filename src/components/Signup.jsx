import React from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Login.css'; // Reuse Login.css for consistent styling


const Signup = () => {
  const { register, handleSubmit, formState: { errors }, watch } = useForm();
  const password = watch("password");

  const onSubmit = (data) => {
    console.log("Form data:", data);
    axios
      .post("http://localhost:3000/users/", data)
      .then((response) => {
        console.log(response.data);
        alert("Sign-Up Successful!");
      })
      .catch((error) => {
        console.error(error);
        alert("An error occurred. Please try again.");
      });
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h2>Sign Up</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* Full Name Field */}
          <div className="form-group">
            <label htmlFor="name">Full Name</label>
            <input
              {...register("name", { required: "Full Name is required" })}
              type="text"
              id="name"
              placeholder="Enter your full name"
              className="form-control"
            />
            {errors.name && <p className="error-message">{errors.name.message}</p>}
          </div>

          {/* Email Field */}
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Invalid email address",
                },
              })}
              type="email"
              id="email"
              placeholder="Enter your email"
              className="form-control"
            />
            {errors.email && <p className="error-message">{errors.email.message}</p>}
          </div>

          {/* Username Field */}
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              {...register("username", { required: "Username is required" })}
              type="text"
              id="username"
              placeholder="Choose a username"
              className="form-control"
            />
            {errors.username && <p className="error-message">{errors.username.message}</p>}
          </div>

          {/* Password Field */}
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              {...register("password", {
                required: "Password is required",
                // minLength: { value: 8, message: "Password must be at least 8 characters" },
              })}
              type="password"
              id="password"
              placeholder="Create a password"
              className="form-control"
            />
            {errors.password && <p className="error-message">{errors.password.message}</p>}
          </div>

          {/* Confirm Password Field */}
          <div className="form-group">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              {...register("confirmPassword", {
                required: "Confirm Password is required",
                validate: (value) =>
                  value === password || "Passwords do not match",
              })}
              type="password"
              id="confirmPassword"
              placeholder="Confirm your password"
              className="form-control"
            />
            {errors.confirmPassword && (
              <p className="error-message">{errors.confirmPassword.message}</p>
            )}
          </div>

          {/* Submit Button */}
          <button type="submit" className="login-btn">Sign Up</button>

          {/* Redirect to Login */}
          <p>Already have an account? <Link to="/login">Login</Link></p>
        </form>
      </div>
    </div>
  );
};

export default Signup;
