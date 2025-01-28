import React, { useState } from "react";
import Modal from "./Components/Modal"; 
import Navbar from "./Components/Navbar";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div style={{ display: "flex", alignItems: "center", justifyContent: "center", textAlign: "center", paddingTop: "50px", height: "90vh" }}>
      <Navbar />
      <div style={{ backgroundColor: "#007bff", border: "2px solid #007bff", padding: "20px", boxShadow: "0 2px 10px rgba(0, 99, 198, 0.85)", borderRadius: "15px", maxWidth: "250px" }}>
      <h1 style={{color: "white"}}>Welcome to StreakHub</h1>
      <button
        onClick={() => setIsModalOpen(true)}
        style={{
          background: "white",
          color: "#007bff",
          padding: "10px 20px",
          margin: "10px",
          fontSize: "16px",
          border: "none",
          borderRadius: "10px",
          cursor: "pointer",
          transition: "0.2s ease-in-out",
        }}
        onMouseOver={(e) => (e.target.style.background = "white")}
        onMouseOut={(e) => (e.target.style.background = "white")}
      >Learn More</button>
      </div>
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title="Hello, World!">
        <p>This is a beautiful modal with a clean design.</p>
      </Modal>
    </div>
  );
}

export default App;
