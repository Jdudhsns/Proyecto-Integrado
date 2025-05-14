// src/firebase/auth.js
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { app } from "../Firebase"; // importa tu instancia de firebase

const auth = getAuth(app);

// REGISTRAR USUARIO
export const registerUser = async (email, password) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    return userCredential.user;
  } catch (error) {
    console.error("Error registrando usuario:", error.message);
    throw error;
  }
};

// INICIAR SESIÓN
export const loginUser = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    return userCredential.user;
  } catch (error) {
    console.error("Error iniciando sesión:", error.message);
    throw error;
  }
};

// 🔓 CERRAR SESIÓN
export const logoutUser = async () => {
  try {
    await signOut(auth);
  } catch (error) {
    console.error("Error cerrando sesión:", error.message);
    throw error;
  }
};
