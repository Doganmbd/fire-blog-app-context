import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  signOut,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
  sendPasswordResetEmail,
} from "firebase/auth";

import {
  getDatabase,
  ref,
  set,
  push,
  onValue,
  remove,
  update,
} from "firebase/database";
import { useEffect, useState } from "react";

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

export const createUser = async (email, password, displayName) => {
  try {
    await createUserWithEmailAndPassword(auth, email, password);
    await updateProfile(auth.currentUser, {
      displayName: displayName,
      photoURL: "",
    });
  } catch (error) {
    alert(error.message);
  }
};

export const signIn = async (email, password, navigate) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (err) {
    alert(err.message);
  }
};

export const logOut = () => {
  signOut(auth);
};

export const userObserver = (setCurrentUser) => {
  onAuthStateChanged(auth, (currentUser) => {
    if (currentUser) {
      setCurrentUser(currentUser);
    } else {
      // User is signed out
      setCurrentUser(false);
    }
  });
};

export const signUpProvider = (navigate) => {
  const provider = new GoogleAuthProvider();

  signInWithPopup(auth, provider)
    .then((result) => {
      console.log(result);
      navigate("/");
    })
    .catch((error) => {
      console.log(error);
    });
};

export const forgotPassword = (email) => {
  // Email yoluyla şifre sıfırlama için kullanılan firebase metodu
  sendPasswordResetEmail(auth, email)
    .then(() => {
      alert("Please check your mail box!");
    })
    .catch((err) => {
      alert(err.message);
    });
};

//! --- firebase realtime read and write data ------

//! bilgi ekleme işlemi
export const AddBlog = (info, currentUser) => {
  const db = getDatabase();
  const blogRef = ref(db, "blogs");
  const newBlogRef = push(blogRef);

  set(newBlogRef, {
    title: info.title,
    imgUrl: info.imgUrl,
    content: info.content,
    date: info.date,
    likes: 0,
    user: currentUser.email,
  });
};

//!Bilgi çağırma işlemi
export const useFetch = () => {
  const [isLoading, setIsLoading] = useState();
  const [blogList, setBlogList] = useState();

  useEffect(() => {
    setIsLoading(true);

    const db = getDatabase();
    const blogRef = ref(db, "blogs");

    onValue(blogRef, (snapshot) => {
      const data = snapshot.val();
      const blogsArray = [];

      for (let id in data) {
        blogsArray.push({ id, ...data[id] });
      }
      setBlogList(blogsArray);
      setIsLoading(false);
    });
  }, []);
  return { isLoading, blogList };
};

//!Bilgi silme işlemi
export const DeleteBlog = (id) => {
  const db = getDatabase();
  remove(ref(db, "/blogs/" + id));

  
};

//!Bilgi Değiştirme işlemi
export const EditUser = (info) => {
  const db = getDatabase();
  const updates = {};

  updates["/blogs/" + info.id] = info;
  return update(ref(db), updates);
};