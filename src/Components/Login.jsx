// Login.jsx
import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../Firebase"; // Asegúrate que tu archivo sea "Firebase.js" con F mayúscula

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleLogin = async (e) => {
    e.preventDefault();
    setError(null);

    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      console.log("Usuario autenticado:", user);
      // Aquí puedes redireccionar a otra vista si el login fue exitoso
    } catch (err) {
      console.error("Error al iniciar sesión:", err.message);
      setError("Correo o contraseña incorrectos");
    }
  };

  return (
    <div className="login-card p-4">
      <h3 className="mb-4 text-center">Iniciar Sesión</h3>

      <form onSubmit={handleLogin}>
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

        {error && <div className="alert alert-danger py-1">{error}</div>}

        <button
          type="submit"
          className="btn btn-success rounded-pill w-100 mt-2"
        >
          Ingresar
        </button>
      </form>
    </div>
  );
}

export default Login;
