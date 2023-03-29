import React, { createContext, useEffect, useState } from "react";

import {

  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  sendEmailVerification,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  updateProfile,
  signInWithPopup,
  signOut,
  
} from "firebase/auth";

import app from "../../../Firebase/Firebase.config";



export const AuthContext = createContext();

const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const [loading, setLoading] = useState(true);

  const googleProvider = (provider) => {
    setLoading(true);
    return signInWithPopup(auth, provider);
  };

  const signUpUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const loginUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const setProfile = (profile) => {
    return updateProfile(auth.currentUser, profile);
  };

  const emailVerification = () => {
    return sendEmailVerification(auth.currentUser);
  };

  const forgatPassword = (userEmailForForgetPassword) => {

    return sendPasswordResetEmail(auth, userEmailForForgetPassword);
    
  };

  const logOut = () => {

    setLoading(true);

     localStorage.removeItem("omarToken");

    return signOut(auth);

  };

  useEffect(() => {

    const unsubcribe = onAuthStateChanged(auth, (currentUser) => {

      setUser(currentUser);

      setLoading(false);

    });

    return unsubcribe();

  }, []);

  const authInfo = {
    user,
    loading,
    setLoading,
    signUpUser,
    loginUser,
    setProfile,
    emailVerification,
    forgatPassword,
    googleProvider,
    logOut,
  };


  return (

    <div>

      <AuthContext.Provider value={authInfo}>
        {children}
      </AuthContext.Provider>


    </div>

  );

};

export default AuthProvider;