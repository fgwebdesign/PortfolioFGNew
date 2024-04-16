import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import robotProfilePic from '../../images/roboticon.png';

const floatAnimation = keyframes`
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const typingAnimation = keyframes`
  from { 
    width: 0;
    border-right: 3px solid white;
  }
  to { 
    width: 100%;
    border-right: 3px solid transparent; 
  }
`;

const TypingHeader = styled.h2`
  overflow: hidden; 
  width: 100%;
  padding-top: 10px;
  color: white;
  font-size: 13px;
  font-weight: 400;
  border-right: 3px solid transparent;
  white-space: nowrap; 
  width: 0; 
  animation: ${typingAnimation} 2s steps(40, end) forwards;
  @keyframes blinkCursor {
    from { border-right-color: transparent; }
    to { border-right-color: white; } 
  }
`;


const ModalContainer = styled.div`
  border: 2px solid orange;
  position: fixed;
  bottom: 100px; 
  right: 20px;
  background-color: rgb(25, 25, 36);
  padding: 20px;
  border-radius: 20px; 
  box-shadow: 0 4px 8px rgba(0,0,0,0.2);
  width: 250px;
  visibility: hidden;
  opacity: 0; 
  visibility: hidden;
  transform: translateY(20px);
  transition: opacity 0.3s ease-out, transform 0.3s ease-out;
  z-index: 250;
  &.open {
    visibility: visible;
    animation: ${fadeIn} 0.3s ease-out forwards;
  }
`;

const RobotImage = styled.img`
  width: 60px;
  height: 60px; 
  border-radius: 50%; 
  margin-top: -40px;
  border: 2px solid orange;
  box-shadow: 0 2px 4px rgba(0,0,0,0.15);
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px; 
  right: 10px; 
  padding: 5px;
  border: none;
  background-color: #ff4d4d;
  color: white; 
  border-radius: 50%;
  font-size: 20px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 20px; 
  width: 20px;
  line-height: 1;

  &:hover {
    background-color: #ff3333;
  }
`;


const WhatsAppModal = ({ isOpen, onClose }) => {
    const [message, setMessage] = useState('');

    const sendMessage = () => {
        const whatsappURL = `https://wa.me/59892033831?text=${encodeURIComponent(message)}`;
        window.open(whatsappURL, '_blank');
        onClose();
    };

    return (
        <ModalContainer className={isOpen ? 'open' : ''}>
            <RobotImage src={robotProfilePic} alt="Chatbot" />
            <CloseButton onClick={onClose}>×</CloseButton>
            <TypingHeader>Contactanos por WhatsApp</TypingHeader>
            <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows="1"
                style={{ width: '100%', padding: '10px', margin: '10px 0',  }}
            />
            <button onClick={sendMessage} style={{ width: '50%', padding: '6px', fontSize: '16px', backgroundColor: '#25D366', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
                Enviar
            </button>
        </ModalContainer>
    );
};

export default WhatsAppModal;

