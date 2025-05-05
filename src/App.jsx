import { useState } from "react";

//importando modulos de firebase
import appFirebase from "./credentials";
import { getAuth, onAuthStateChanged } from "firebase/auth";
const auth = getAuth(appFirebase);


// Importar nuestros componentes
import Login from ".Components/Login";
import Home from "./Components/Home";

import "./App.css";
function app() {
  console.log("✅ App.jsx está ejecutándose");

  const[usuario, setUsuario] = useState(null);

  onAuthStateChanged(auth, (usuarioFirebase) => {
    if (usuarioFirebase) {
      setUsuario(usuarioFirebase)     
    }
    else {
      // User is signed out
      setUsuario(null);
    }
  })
  return ( 
  <div>
    {usuario ? <Home correoUsuario = {usuario.email}/> : <Login/>}
  </div>

  )
}
export default app;
