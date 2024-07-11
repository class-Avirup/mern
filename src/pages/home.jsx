import React from "react";
import Navbar from "../components/Navbar.jsx";
import LandingPage from "../components/LandingPage.jsx";
import Marquee from "../components/marquee.jsx";
import About from "../components/About.jsx";
import Eyes from "../components/eyes.jsx";
import { motion } from "framer-motion";
import Featured from "../components/featured.jsx";

import Reviews from "../components/reviews.jsx";
import Footer from "../components/footer.jsx";

const Home = () => {
  return (
    <div className="w-full min-h-screen bg-zinc-900 text-white">
      <Navbar />
      <LandingPage />

      <div>
        <Marquee />
        <About />
      </div>

      <Eyes />
      <Featured />
      <Reviews />

      <Footer />
    </div>
  );
};

export default Home;
