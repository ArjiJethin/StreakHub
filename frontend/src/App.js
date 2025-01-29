import React, { useState } from "react";
import Modal from "./Components/Modal/Modal"; 
import Navbar from "./Components/Navbar/Navbar";
import Button from "./Components/Button/Button";
import "./App.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <div className="home">
      <div className="home-nav">
        <Navbar className="navBar" />
      </div>
      <div className="box">
        <h1>Welcome to StreakHub</h1>
        <button className="button" onClick={() => setIsModalOpen(true)}>Learn More</button>
        <Button onClick={() => setIsModalOpen(true)}>Learn More</Button>
      </div>
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title="Nuh uh">
        <p>This project is underdevelopment stay tuned!!</p>
      </Modal>
    </div>
  );
}

export default App;
