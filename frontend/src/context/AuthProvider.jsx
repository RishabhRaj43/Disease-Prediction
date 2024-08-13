import { createContext, useContext, useState } from "react";

export const AuthContext = createContext();

const Authprovider = ({ children }) => {
  const intialAuthUser = localStorage.getItem("User");
  const [authUser, setAuthUser] = useState(
    intialAuthUser ? JSON.parse(intialAuthUser) : undefined
  );

  return (
    <AuthContext.Provider value={[authUser, setAuthUser ]}>
      {children}
    </AuthContext.Provider>
  );
};

export default Authprovider;


export const useAuth =()=> useContext(AuthContext)