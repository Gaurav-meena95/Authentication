'use client';
import React, { createContext, useContext, useEffect, useState } from 'react';
import { auth } from './firebase';
import { GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from 'firebase/auth';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isloading, setIsloading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user ?? null);
      setIsloading(false);
    });
    return () => unsubscribe();
  }, []);

  async function handelGoogleSingUp() {
    setIsloading(true);
    try {
      await signInWithPopup(auth, new GoogleAuthProvider());
    } catch (error) {
      setError(error.message);
    }
    setIsloading(false);
  }

  async function handelLogout() {
    setIsloading(true);
    try {
      await signOut(auth);
    } catch (error) {
      setError(error.message);
    }
    setIsloading(false);
  }

  return (
    <AuthContext.Provider
      value={{ user, isloading, error, handelGoogleSingUp, handelLogout }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
export const useAuth = () => useContext(AuthContext);
