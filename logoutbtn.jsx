import React from "react";
import { useState } from "react";
import { Navigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
const Logoutbtn = ({ logged }) => {
  const [user, setUser] = useState(localStorage.getItem("token"));

  const logout = () => {
    setUser("");
    <Navigate to="http://localhost:5173/" />;
    toast.success("logout successful!");
    localStorage.setItem("user", false);
    localStorage.setItem("username", "");
    localStorage.setItem("email", "");
    return localStorage.removeItem("token");
  };
  return (
    <button
      className={`rounded-full border-2 border-white text-white p-2  ${
        logged === "false" && "hidden"
      } `}
      onClick={logout}
    >
      logout
    </button>
  );
};

export default Logoutbtn;
