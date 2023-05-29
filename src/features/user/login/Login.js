import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { connectUser } from '../userSlice';
import { login } from "./loginAPI";

function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [alert, setAlert] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const user = await login(email, password);
      if (user) {
        dispatch(connectUser(user));
        navigate("/");
        return
      }
      throw new Error('echec de connection');
    } catch (error) {
      console.error(error);
      setAlert('echec de connection')

    }
  };

  return (
    <div className="container">
      {
        alert ?
          <div className="alert alert-danger" role="alert">
            {alert}
          </div>
          : null

      }
      <h2>Connection</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Mot de passe:</label>
          <input
            type="password"
            className="form-control"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Connection
        </button>
      </form>
    </div>
  );
}

export default Login;
