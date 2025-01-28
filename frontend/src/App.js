import React, { useState } from "react";
import Modal from "./Components/Modal"; 
import Navbar from "./Components/Navbar";
import "./App.css";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <div className="home">
      <Navbar />
      <div className="box">
        <h1>Welcome to StreakHub</h1>
        <button className="button" onClick={() => setIsModalOpen(true)}>Learn More</button>
      </div>
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title="Nuh uh">
        <p>This project is underdevelopment stay tuned!!</p>
      </Modal>
    </div>
  );
}

export default App;
