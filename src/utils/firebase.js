import { initializeApp } from "firebase/app";
import { getAuth ,createUserWithEmailAndPassword,signInWithEmailAndPassword, updateProfile } from "firebase/auth";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_apiKey,
  authDomain: process.env.REACT_APP_authDomain,
  projectId: process.env.REACT_APP_projectId,
  storageBucket: process.env.REACT_APP_storageBucket,
  messagingSenderId: process.env.REACT_APP_messagingSenderId,
  appId: process.env.REACT_APPappId,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

// register sayfasından email ve passwordu çekmek için 

export const createUser = async(email,password,displayName)=> {
    try {
        await
        createUserWithEmailAndPassword(auth, email, password)
          await updateProfile(auth.currentUser, {
            displayName: displayName, photoURL: ""
          });
        }
          catch(error){
            alert(error.message)
          }
}


export const signIn = async (email, password, navigate) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
   
  } catch (err) {
    alert(err.message);
  }
};