// Modal.js
import React from 'react';
import '../styles/Modal.css';

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null; // Don't render modal if not open

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose}>X</button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
