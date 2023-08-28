// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-analytics.js";
import { getDatabase, set, ref, update } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-database.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAUZyBUyXyQHyid28rNpKDdvwE3NNIOHvo",
    authDomain: "fireplan-43f8d.firebaseapp.com",
    databaseURL: "https://fireplan-43f8d-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "fireplan-43f8d",
    storageBucket: "fireplan-43f8d.appspot.com",
    messagingSenderId: "610229428470",
    appId: "1:610229428470:web:b523a6828d8d891fc54cd7",
    measurementId: "G-JMV2VVCG1X"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const database = getDatabase(app);
const auth = getAuth();

signup.addEventListener('click',(e) => {
 
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var username = document.getElementById('username').value;
 
    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
 
        set(ref(database, 'users/' + user.uid),{
            username: username,
            email: email,
        }).then( () => {
            window.location.href = "./"; 
        }   
        );
        
        // ...
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
 
        alert('errorMessage: ' + errorMessage + 'errorCode: '+ errorCode);
        // ..
    });
})

login.addEventListener('click',(e) => {

    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var username = document.getElementById('username').value;

    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;

        const dt = new Date();

        update(ref(database, 'users/' + user.uid),{
            last_login: dt
        }).then(() => {
            window.location.href = "./"; 
        }
        );

        
        // ...
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert('errorMessage: ' + errorMessage + 'errorCode: '+ errorCode);
    });
});

const user = auth.currentUser;

logout.addEventListener('click',(e) => {
    const auth = getAuth();
    signOut(auth).then(() => {
    // Sign-out successful.
    alert('loged out');
}).catch((error) => {
    // An error happened.
    alert('error with logging out');
});
});

function onLoad() {
    //some funcitons here...
    console.log('Website Loaded.');
    if (auth.currentUser) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const uid =  auth.currentUser.uid;
        window.location.href = "./";
        // ...
    } else {
        // User is signed out
    }
}
window.onload = onLoad;