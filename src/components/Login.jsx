import { useForm } from 'react-hook-form';
import React from 'react';
import './Login.css';
import { Link } from 'react-router-dom';
import axios from 'axios';


const Login = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log("Form data:", data);
    axios.post("http://localhost:3000/users/login",data)
    .then(response=>{
      console.log(response.data);
      alert("Login Success")
    })
    .catch(error=>console.log(error))
    
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h2>Login</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              {...register('email', { required: "Email is required" })}
              type="email"
              id="email"
              placeholder="Enter your email"
              className="form-control"
            />
            {errors.email && <p className="error-message">{errors.email.message}</p>}
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              {...register('password', {
                required: "Password is required",
                // minLength: { value: 8, message: "Password must be at least 8 characters" }
              })}
              type="password"
              id="password"
              placeholder="Enter your password"
              className="form-control"
            />
            {errors.password && <p className="error-message">{errors.password.message}</p>}
          </div>

          <button type="submit" className="login-btn">Login</button>
          <br /><br />
          <p>Don't have an account? <Link to="/signup">Sign Up</Link></p>

        </form>
      </div>
    </div>
  );
};

export default Login;
