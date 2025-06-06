import React, { useState } from "react";
import Modal from "./Components/Modal/Modal"; 
import Navbar from "./Components/Navbar/Navbar";
import Button from "./Components/Button/Button";
import "./App.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <div className="app-container">
      <Navbar className="navBar" />
      <div className="box">
        <h1>Welcome to StreakHub</h1>
        <button className="button" onClick={() => setIsModalOpen(true)}>Learn More</button>
        <Button onClick={() => setIsModalOpen(true)}>Learn More</Button>
      </div>
    </div>
  );
}

export default App;