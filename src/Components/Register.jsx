// Register.jsx
import React, { useState } from "react";
import { registerUser } from "../firebase/auth";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (password !== confirm) {
      setError("Las contraseñas no coinciden");
      return;
    }

    try {
      await registerUser(email, password);
      setSuccess("Usuario registrado correctamente");
      setEmail("");
      setPassword("");
      setConfirm("");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="login-card p-4">
      <h3 className="mb-4 text-center">Crear Cuenta</h3>

      <form onSubmit={handleRegister}>
        <div className="mb-3">
          <input
            type="email"
            className="form-control rounded-pill"
            placeholder="Correo electrónico"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="mb-3">
          <input
            type="password"
            className="form-control rounded-pill"
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <div className="mb-3">
          <input
            type="password"
            className="form-control rounded-pill"
            placeholder="Confirmar contraseña"
            value={confirm}
            onChange={(e) => setConfirm(e.target.value)}
            required
          />
        </div>

        {error && <div className="alert alert-danger py-1">{error}</div>}
        {success && <div className="alert alert-success py-1">{success}</div>}

        <button
          type="submit"
          className="btn btn-primary rounded-pill w-100 mt-2"
        >
          Registrarse
        </button>
      </form>
    </div>
  );
}

export default Register;
