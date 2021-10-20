import {
  getAuth,
  signInWithPopup,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../Firebase/firebase.init";

initializeAuthentication();

const useFirebase = () => {
  const [user, setUser] = useState({});
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();

  const handelEmailChange = e => {
    setEmail(e.target.value);
  };
  const handelPassChange = e => {
    setPassword(e.target.value);
  };

  const handelRegistration = e => {
    // console.log("paisi");
    e.preventDefault();
    if (password.length < 6) {
      setError("Passworld shoudl be at least 6 characters");
      return;
    }
    createUserWithEmailAndPassword(auth, email, password).then(result => {
      const user = result.user;
    });
  };

  const signInUsingGoogle = () => {
    signInWithPopup(auth, googleProvider).then(result => {
      //   setUser(result.user);
      console.log(result.user);
    });
  };

  const logOut = () => {
    signOut(auth).then(() => {
      setUser({});
    });
  };
  useEffect(
    () =>
      onAuthStateChanged(auth, user => {
        if (user) {
          setUser(user);
        }
      })
    // []
  );

  return {
    user,
    signInUsingGoogle,
    handelEmailChange,
    handelPassChange,
    handelRegistration,
    error,
    logOut,
  };
};

export default useFirebase;
