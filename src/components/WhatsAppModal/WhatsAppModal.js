import React, { useState } from 'react';
import styled from 'styled-components';

const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 200;
`;

const ModalContainer = styled.div`
  background: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.3);
  width: 90%;
  max-width: 400px;
`;

const CloseButton = styled.button`
  float: right;
  border: none;
  background: none;
  font-size: 20px;
  cursor: pointer;
`;

const WhatsAppModal = ({ onClose }) => {
    const [message, setMessage] = useState('');

    const sendMessage = () => {
        const whatsappURL = `https://wa.me/yourphonenumber?text=${encodeURIComponent(message)}`;
        window.open(whatsappURL, '_blank');
        onClose();
    };

    return (
        <Backdrop>
            <ModalContainer>
                <CloseButton onClick={onClose}>×</CloseButton>
                <h2>Enviar mensaje</h2>
                <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    rows="4"
                    style={{ width: '100%', padding: '10px', margin: '10px 0', boxSizing: 'border-box' }}
                />
                <button onClick={sendMessage} style={{ width: '100%', padding: '10px', fontSize: '16px', backgroundColor: '#25D366', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
                    Enviar
                </button>
            </ModalContainer>
        </Backdrop>
    );
};

export default WhatsAppModal;
