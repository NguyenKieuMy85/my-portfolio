import React from "react";
import Navbar from "./components/common/Navbar";
import Home from "./components/Home/Home";
import "./style.css";

function App() {
  return (
    
    <div style={{ backgroundColor: "#0a0f1f", minHeight: "100vh", color: "white" }}>
      <Navbar />
      <Home />
    </div>
  );
}

export default App;
