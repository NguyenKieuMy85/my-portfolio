import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/common/Navbar";
import Home from "./components/Home/Home";
// import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Resume from "./components/Resume/Resume";
// import Blogs from "./components/Blogs/Blogs";
import "./style.css";

function App() {
  return (
    <Router>
      <div
        style={{
          backgroundColor: "#0a0f1f",
          minHeight: "100vh",
          color: "white",
        }}
      >
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/about" element={<About />} /> */}
          <Route path="/projects" element={<Projects />} />
          <Route path="/resume" element={<Resume />} />
          {/* <Route path="/blogs" element={<Blogs />} /> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
