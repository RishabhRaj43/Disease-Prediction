import React from "react";
import { useAuth } from "../context/AuthProvider.jsx";
import toast from "react-hot-toast";

const Logout = () => {

  const [authUser,setAuthUser] = useAuth();
  const handleLogout = () => {
    try {
      setAuthUser({
        ...authUser,
        user:null
      })
      localStorage.removeItem('User')
      toast.success("Logout Successful");
      window.location.reload();
    } catch (error) {
      toast.error(error.message);
    }
  };
  return (
    <div>
      <button className="btn btn-secondary px-6" 
      onClick={handleLogout}
      >
        Logout
      </button>
    </div>
  );
};

export default Logout;
