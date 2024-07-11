import React from "react";
import LocomotiveScroll from "locomotive-scroll";
import Home from "./pages/home.jsx";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import About from "./pages/about.jsx";
import Contact from "./pages/contact.jsx";
import Ecom from "./pages/ecom.jsx";
import Register from "./pages/register.jsx";
import Login from "./pages/login.jsx";
import Admin from "../server/admin.jsx";

import Error from "./components/error.jsx";
import { AuthProvider } from "../server/auth.jsx";
import Courses from "./pages/courses.jsx";
import toast, { Toaster } from "react-hot-toast";
import Account from "./components/Account.jsx";
import Insights from "./pages/insights.jsx";
const App = () => {
  const locomotiveScroll = new LocomotiveScroll();
  const isUser = localStorage.getItem("token");
  const isAdmin = localStorage.getItem("user");

  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/insights" element={<Insights />} />
          <Route path="/register" element={<Register />} />
          <Route path="/ecom" element={<Ecom />} />
          <Route path="/cart" element={<Account />} />
          <Route
            path="/courses"
            element={isUser ? <Courses /> : <Navigate to="/register" />}
          />
          <Route
            path="/admin"
            element={isAdmin === "true" ? <Admin /> : <Navigate to="/login" />}
          />

          {/* this is to make the courses page secure in order to enter th epage we need to signup */}
          <Route path="/error" element={<Error />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />

          <Route index element={<Home />} />
        </Routes>
        <Toaster />
      </BrowserRouter>
    </AuthProvider>
  );
};

export default App;
