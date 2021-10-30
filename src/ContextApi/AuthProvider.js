import React, { createContext } from "react";
import useFireBase from "../UseFirebase/UseFireBase";



export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  // const {children} = props;
  const allContexts = useFireBase();
  return <AuthContext.Provider value={allContexts}>
      {children}
      </AuthContext.Provider>;
};

export default AuthProvider;
