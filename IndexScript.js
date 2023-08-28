// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-analytics.js";
import { getDatabase, set, ref, get, update } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-database.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-auth.js";
import { push } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-database.js";
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

const user = auth.currentUser;

onAuthStateChanged(auth, (user) => {
    if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const uid = user.uid;
        // ...
    } else {
        // User is signed out
        // ...
        window.location.href = "./signup.html";
    }
});

logout.addEventListener('click',(e) => {
    const auth = getAuth();
    signOut(auth).then(() => {
    // Sign-out successful.
}).catch((error) => {
    // An error happened.
    alert('error with logging out');
});
});

export async function myFunction(CreateId) {
    console.log(CreateId);

    const user = getAuth().currentUser;
    if (user) {
        const userId = user.uid;
        const db = getDatabase();
        
        // Get the current count of plans for the user
        const userSnapshot = await get(ref(db, 'users/' + userId));
        const currentPlanKeys = userSnapshot.exists()
            ? Object.keys(userSnapshot.val()).filter(key => key.startsWith('plan_'))
            : [];
        const currentPlanCount = currentPlanKeys.length;
        
        // Generate the new plan ID with sequential numbering
        const newPlanId = `plan_${currentPlanCount + 1}`;
        
        // Set the data using the new plan ID
        set(ref(db, 'users/' + userId + '/' + newPlanId), {
            ID: CreateId
        });
    } else {
        console.log('User is not signed in');
    }
}

async function loadPlanIds() {
    const user = getAuth().currentUser;
    if (user) {
        const userId = user.uid;
        const db = getDatabase();
        
        const userSnapshot = await get(ref(db, 'users/' + userId));
        const planData = userSnapshot.exists() ? userSnapshot.val() : {};
        const planIdsWithData = Object.entries(planData)
            .filter(([key, value]) => key.startsWith('plan_') && value.ID)
            .map(([key, value]) => value.ID);
        
        return planIdsWithData;
    } else {
        return [];
    }
}

window.onload = async () => {
    window.onLoad();
    onAuthStateChanged(auth, async (user) => {
        if (user) {
            const planIds = await loadPlanIds();
            //console.log('Loaded Plan IDs with Data:', planIds);
            window.GetData(planIds); // Call the function from the imported script
        } else {
            console.log('User is not signed in');
        }
    });
};