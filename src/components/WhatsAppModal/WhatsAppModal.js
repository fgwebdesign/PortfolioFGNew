import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import { useTranslation } from 'react-i18next';
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

const ScheduleInfo = styled.div`
  margin: 10px 0;
  padding: 8px;
  background-color: rgba(37, 211, 102, 0.1);
  border-radius: 8px;
  border: 1px solid rgba(37, 211, 102, 0.2);
`;

const ScheduleText = styled.p`
  color: #fff;
  font-size: 12px;
  margin: 2px 0;
  text-align: center;
  opacity: 0.9;
`;

const ScheduleTitle = styled.p`
  color: #25D366;
  font-size: 13px;
  font-weight: 700;
  margin: 0 0 5px 0;
  text-align: center;
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
  opacity: 0;
  visibility: hidden;
  transform: translateY(20px);
  transition: all 0.3s ease-out;
  z-index: 250;
  
  &.open {
    opacity: 1;
    visibility: visible;
    transform: translateY(0);
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
    const { t } = useTranslation();

    const sendMessage = () => {
        const whatsappURL = `https://wa.me/59892033831?text=${encodeURIComponent(message)}`;
        window.open(whatsappURL, '_blank');
        onClose();
    };

    useEffect(() => {
      let timer;
      if (isOpen) {
        timer = setTimeout(() => {
          try {
            const audio = new Audio(require('../WhatsAppButton/whatsapp.mp3'));
            audio.volume = 0.5; // Reducimos el volumen a la mitad
            audio.play();
          } catch (error) {
            console.error('Error playing sound:', error);
          }
        }, 500); // Reducimos el tiempo de espera
      }
      return () => {
        if (timer) clearTimeout(timer);
      };
    }, [isOpen]);



    return (
        <ModalContainer className={isOpen ? 'open' : ''}>
            <RobotImage src={robotProfilePic} alt="Chatbot" />
            <CloseButton onClick={onClose}>×</CloseButton>
            <TypingHeader>{t('whatsapp_contact')}</TypingHeader>
            <ScheduleInfo>
                <ScheduleTitle>🕒 {t('whatsapp_schedule')}</ScheduleTitle>
                <ScheduleText>{t('whatsapp_days')}</ScheduleText>
                <ScheduleText>{t('whatsapp_hours')}</ScheduleText>
            </ScheduleInfo>
            <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder={t('whatsapp_placeholder')}
                rows="2"
                style={{
                    width: '100%',
                    padding: '10px',
                    margin: '10px 0',
                    borderRadius: '8px',
                    border: '1px solid #ddd',
                    resize: 'none',
                    backgroundColor: '#f5f5f5',
                    fontSize: '14px'
                }}
            />
            <button 
                onClick={sendMessage} 
                style={{
                    width: '100%',
                    padding: '10px',
                    fontSize: '16px',
                    backgroundColor: '#25D366',
                    color: 'white',
                    border: 'none',
                    borderRadius: '8px',
                    cursor: 'pointer',
                    transition: 'background-color 0.3s ease',
                    fontWeight: 'bold',
                    marginTop: '10px'
                }}
                onMouseOver={(e) => e.target.style.backgroundColor = '#128C7E'}
                onMouseOut={(e) => e.target.style.backgroundColor = '#25D366'}
            >
                {t('whatsapp_send')}
            </button>
        </ModalContainer>
    );
};

export default WhatsAppModal;

