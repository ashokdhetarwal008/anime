import React from 'react';

const Modal = ({ show, onClose, children }) => {
  if (!show) return null;
  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100vw',
      height: '100vh',
      background: 'rgba(38, 35, 35, 0.53)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 9999
    }} >
      <div style={{
        background: '#fff',
        padding: '2rem',
        borderRadius: '12px',
        boxShadow: '0 2px 16px rgba(0,0,0,0.2)',
        fontFamily: 'Arial, sans-serif',
        maxWidth: '500px',
        
        minWidth: '500px',
        textAlign: 'center'
      }} >
        {children}
        <button style={{
          marginTop: '1rem',
          padding: '0.5rem 1rem',
          background: '#007BFF',
          color: '#fff',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer'
        }} onClick={onClose}>Close</button>
        
      </div>
    </div>
  );
};

export default Modal;
