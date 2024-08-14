import React, { createContext, useEffect, useState } from "react";
import {
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { app } from "../../firebase/firebase.config";

export const AuthContext = createContext(null);
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [dbUser, setDbUser] = useState("");
  const [loading, setLoading] = useState(true);

  /**
   * Log in by gmail
   */
  const googleProvider = new GoogleAuthProvider();
  const handleLogIn = (email) => {
    return signInWithPopup(auth, googleProvider);
  };

  /**
   * Log Out
   */
  const handleLogOut = () => {
    setLoading(true);
    signOut(auth)
      .then(() => {
        console.log("SignOut Successfully");
      })
      .catch((error) => {
        console.log("Log Out error: ", error);
      });
  };

  /**
   * Check Current User start
   */
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => {
      return unSubscribe();
    };
  }, []);
  //   console.log("current user: ", user);

  /**
   * Check Current User end
   */

  /**Dark Light Mode start */
  const [colorDep, setColorDep] = useState(true);
  const [color, setColor] = useState("dark");
  useEffect(() => {
    const mode = localStorage.getItem("mode");
    // console.log("mode: ", mode);
    if (mode == "light") {
      setColor("light");
    }
    if (mode == "dark") {
      setColor("dark");
    }
  }, [colorDep]);

  const handleSetDarkMode = () => {
    localStorage.setItem("mode", "dark");
    setColorDep(!colorDep);
  };
  const handleSetLightMode = () => {
    localStorage.setItem("mode", "light");
    setColorDep(!colorDep);
  };
  /**Dark Light Mode end */

  const authInfo = {
    user,
    handleLogIn,
    handleLogOut,
    handleSetDarkMode,
    handleSetLightMode,
    color,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
