// Import the functions you need from the SDKs you need

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAuth, onAuthStateChanged  } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries



// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyB1w3jEpd_6esX3uvEBTs8DGxtIVm4uK10",
  authDomain: "swiggy-loginpage.firebaseapp.com",
  projectId: "swiggy-loginpage",
  storageBucket: "swiggy-loginpage.appspot.com",
  messagingSenderId: "1084226697439",
  appId: "1:1084226697439:web:c89b591df3a8fec4b3916a",
  measurementId: "G-QME0GR0ND6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);


  // Add your code to send the email verification code here
  function signIn() {onAuthStateChanged (auth, email)
  .then(() => {
    // Signed up 
    alert("A password reset link has been sent to your email address.")
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
    alert(errorMessage);
  email.addEventListener("click",function(event){
    
  });
  });
}



