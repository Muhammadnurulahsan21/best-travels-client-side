import { useEffect, useState } from "react";
import {
  sendEmailVerification,
  updateProfile,
  createUserWithEmailAndPassword,
  FacebookAuthProvider,
  GithubAuthProvider,
  signOut,
  getAuth,
  onAuthStateChanged,
  signInWithPopup,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
} from "firebase/auth";
import initializeAuthentication from "../Firebase/firebase.init";

initializeAuthentication();

// Providers
const googleProvider = new GoogleAuthProvider();
const gitHubProvider = new GithubAuthProvider();
const fbProvider = new FacebookAuthProvider();

const auth = getAuth();

const useFirebase = () => {
  const [user, setUser] = useState({});
  const [error, setError] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setError("");
    }, 5000);
  }, [error]);

  function signInWithGoogle() {
    return signInWithPopup(auth, googleProvider);
  }

  function signInWithGithub() {
    return signInWithPopup(auth, gitHubProvider);
  }

  function signInWithFacebook() {
    return signInWithPopup(auth, fbProvider);
  }

  function signInWithEmail() {
    return signInWithEmailAndPassword(auth, email, password);
  }

  function setNameAndImage() {
    updateProfile(auth.currentUser, {
      displayName: name,
    })
      .then(() => {
        window.location.reload();
      })
      .catch((error) => {
        setError(error.message);
      });
  }

  function emailVerify() {
    sendEmailVerification(auth.currentUser).then(() => {
      alert(`An Verification mail has been set to ${email}`);
    });
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (signedInUser) => {
      if (signedInUser) {
        setUser(signedInUser);
      } else {
        setUser({});
      }
      setLoading(false);
    });
    return () => unsubscribe;
  }, []);

  function logOut() {
    signOut(auth)
      .then((res) => {
        setUser({});
      })
      .catch((error) => {
        setError(error.message);
      });
  }

  function register(e) {
    e.preventDefault();

    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        setNameAndImage();
        emailVerify();
        alert("user has been created");
      })
      .catch((err) => {
        setError(err.message);
      });
  }

  function getName(e) {
    setName(e?.target?.value);
  }

  function getEmail(e) {
    setEmail(e?.target?.value);
  }

  function getPassword(e) {
    setPassword(e?.target?.value);
  }

  return {
    signInWithEmail,
    signInWithFacebook,
    signInWithGithub,
    logOut,
    signInWithGoogle,
    user,
    setUser,
    error,
    setError,
    getPassword,
    getEmail,
    register,
    getName,
    loading,
  };
};

export default useFirebase;
