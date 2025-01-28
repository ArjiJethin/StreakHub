import React, { useState } from "react";
import Modal from "./Components/Modal"; 
import Navbar from "./Components/Navbar";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div style={{ display: "flex", alignItems: "center", justifyContent: "center", textAlign: "center", paddingTop: "50px", height: "100vh" }}>
      <Navbar />
      <div style={{ border: "2px solid #007bff", padding: "20px", boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)", borderRadius: "10px" }}>
      <h1 style={{color: "#007bff"}}>Welcome to StreakHub</h1>
      <button
        onClick={() => setIsModalOpen(true)}
        style={{
          background: "#007bff",
          color: "white",
          padding: "10px 20px",
          margin: "10px",
          fontSize: "16px",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
          transition: "0.2s ease-in-out",
        }}
        onMouseOver={(e) => (e.target.style.background = "#0056b3")}
        onMouseOut={(e) => (e.target.style.background = "#007bff")}
      >Learn More</button>
      </div>
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title="Hello, World!">
        <p>This is a beautiful modal with a clean design.</p>
      </Modal>
    </div>
  );
}

export default App;
