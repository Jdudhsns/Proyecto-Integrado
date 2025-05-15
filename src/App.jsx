// App.jsx
import React, { useState } from "react";
import Login from "./Components/Login";
import Register from "./Components/Register";

function App() {
  const [isRegistering, setIsRegistering] = useState(false);

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-login">
      <div>
        {isRegistering ? (
          <>
            <Register />
            <p className="mt-3 text-center">
              ¿Ya tienes cuenta?{" "}
              <button
                className="btn btn-link p-0"
                onClick={() => setIsRegistering(false)}
              >
                Inicia sesión
              </button>
            </p>
          </>
        ) : (
          <>
            <Login />
            <p className="mt-3 text-center">
              ¿No tienes cuenta?{" "}
              <button
                className="btn btn-link p-0"
                onClick={() => setIsRegistering(true)}
              >
                Regístrate aquí
              </button>
            </p>
          </>
        )}
      </div>
    </div>
  );
}

export default App;
