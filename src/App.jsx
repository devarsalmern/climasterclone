import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Hero from "./components/Hero";
import RightSidebar from "./components/RightSidebar";
import PDFPage from "./components/PDFPage"; // Component for displaying PDF

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/" element={<Hero />} />

        <Route path="/" element={<RightSidebar />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/pdf" element={<PDFPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
