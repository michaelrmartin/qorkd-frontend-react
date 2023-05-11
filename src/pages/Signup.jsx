import axios from "axios";
import { useState } from "react";
import "./Signup.css"

export function Signup() {
  const [errors, setErrors] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors([]);
    const params = new FormData(event.target);
    axios
      .post("http://qorkd.fly.dev/users", params)
      .then((response) => {
        console.log(response.data);
        event.target.reset();
        window.location.href = "/"; // Change this to hide a modal, redirect to a specific page, etc.
      })
      .catch((error) => {
        console.log(error.response.data.errors);
        setErrors(error.response.data.errors);
      });
  };

  return (
    <div className="container">
      <div id="signup">
      <h1>Signup</h1>
      <ul>
        {errors.map((error) => (
          <li key={error}>{error}</li>
        ))}
      </ul>
      <form onSubmit={handleSubmit}>
        <div>
          <label className="form-label">Username</label> 
          <input name="username" className="form-control" type="text" />
        </div>
        <div>
        <label className="form-label">Email</label> 
          <input name="email" className="form-control" type="email" />
        </div>
        <div>
        <label className="form-label">Password</label> 
          <input name="password" className="form-control" type="password" />
        </div>
        <div>
        <label className="form-label">Password Confirmation</label> 
          <input name="password_confirmation" className="form-control" type="password" />
        </div>
        <button type="submit" className="btn btn-primary">Signup</button>
      </form>
      </div>
    </div>
  );
}