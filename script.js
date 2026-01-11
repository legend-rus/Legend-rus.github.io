import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "API_KEY",
  authDomain: "PROJECT_ID.firebaseapp.com",
  projectId: "PROJECT_ID",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// تسجيل
window.register = function(email, password){
  createUserWithEmailAndPassword(auth, email, password)
  .then(()=>alert("Account created"))
  .catch(err=>alert(err.message));
}

// دخول
window.login = function(email, password){
  signInWithEmailAndPassword(auth, email, password)
  .then(()=>alert("Logged in"))
  .catch(err=>alert(err.message));
}
