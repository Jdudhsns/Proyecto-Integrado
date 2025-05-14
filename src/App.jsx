import React, { useEffect } from "react";
import app from "./Firebase";

function App() {
  useEffect(() => {
    console.log("Firebase inicializado", app);
  }, []);

  return <h1>App funcionando con Firebase</h1>;
}

export default App;
