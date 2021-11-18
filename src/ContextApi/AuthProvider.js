import React, { createContext } from "react";
import useFirebase from "../UseFirebase/UseFirebase";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  // const {children} = props;
  const allContexts = useFirebase();
  return (
    <AuthContext.Provider value={allContexts}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
