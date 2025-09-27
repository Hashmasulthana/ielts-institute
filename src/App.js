import React from "react";
import NavigationBar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <NavigationBar />
      <Hero />
      <Features />
      <Testimonials />
      <Footer />
    </>
  );
}

export default App;
