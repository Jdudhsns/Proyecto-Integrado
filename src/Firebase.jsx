// Importamos la función necesaria de Firebase
import { initializeApp } from "firebase/app";

// Configuración proporcionada por Firebase
const firebaseConfig = {
  apiKey: "AIzaSyA1NaKDFoc9fDDWtI_HxJ8F0fQNBh-Sa0Y",
  authDomain: "proyecto-integrador-5f0b8.firebaseapp.com",
  projectId: "proyecto-integrador-5f0b8",
  storageBucket: "proyecto-integrador-5f0b8.appspot.com",
  messagingSenderId: "602567766345",
  appId: "1:602567766345:web:0249638726044cbfe3ea98",
};

// Inicializa la app con la configuración
const app = initializeApp(firebaseConfig);

export default app;
