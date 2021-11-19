
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyB1AcWTPDCUXHey_4cmYE93QchonI72fR0",
    authDomain: "clone-89e8c.firebaseapp.com",
    projectId: "clone-89e8c",
    storageBucket: "clone-89e8c.appspot.com",
    messagingSenderId: "820004084886",
    appId: "1:820004084886:web:e606e04ab035969659f6b7"
};

const test = () => {
 return console.log('This is a test function');
}

const firebaseApp =initializeApp(firebaseConfig);

const db = getFirestore(firebaseApp);
const auth = getAuth();

export { db ,auth , test};


