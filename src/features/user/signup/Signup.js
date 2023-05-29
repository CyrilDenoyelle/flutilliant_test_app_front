import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signup } from "./signupAPI";

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [alert, setAlert] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const success = await signup(email, password);
      if (success) {
        navigate("/login");
        return
      }
      throw new Error("Erreur lors de l'inscription");
    } catch (error) {
      console.error(error);
      setAlert('echec de l\'inscription')
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
      <h2>Inscription</h2>
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
          S'inscrire
        </button>
      </form>
    </div>
  );
}

export default Signup;
