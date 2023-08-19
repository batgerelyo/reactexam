import React from 'react';
import Modal from 'react-modal';
import './LoginModal.css';

const LoginModal = ({ isOpen, onRequestClose }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      className="modal"
      overlayClassName="overlay"
    >
      <button className="close-button" onClick={onRequestClose}>
        &times;
      </button>
      <h2>Sign In Modal</h2>
      <p>This is the modal content.</p>
    </Modal>
  );
};

export default LoginModal;
