import React from "react";
import "./Modal.css"; 

const Modal = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="modal-close" onClick={onClose}>
          &times;
        </button>
        <h2 className="modal-title">{title}</h2>
        <div className="modal-body">{children}</div>
        <div className="modal-footer">
          <button className="modal-button cancel" onClick={onClose}>
            Cancel
          </button>
          <button className="modal-button confirm" onClick={onClose}>
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
