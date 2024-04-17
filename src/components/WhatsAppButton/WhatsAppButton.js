import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import useSound from 'use-sound';
import boopSfx from './whatsapp.mp3';
import WhatsAppModal from '../WhatsAppModal/WhatsAppModal';
import logoWpp from '../../images/whatsapp.png';


const ButtonContainer = styled.div`
  position: fixed;
  bottom: 20px;
  right: 20px;
  display: flex;
  align-items: center;
  z-index: 100;
`;

const Button = styled.button`
  background-color: transparent;
  color: white;
  border: none;
  border-radius: 50%;
  width: 60px;
  height: 60px;
  font-size: 30px;
  cursor: pointer;
  box-shadow: 0 2px 10px rgba(0,0,0,0.15);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  &:hover {
    transform: scale(1.1);
    box-shadow: 0 4px 20px rgba(0,255,0,0.5);
  }
`;

const WhatsAppButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [play, { stop }] = useSound(boopSfx, { volume: 0.7 });

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100 && !isOpen) {
        setIsOpen(true);
        play(); 
      }
    };

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isOpen, play]);

  return (
      <ButtonContainer>
          <Button onClick={() => {
              setIsOpen(true);
              play();
          }}>
              <img src={logoWpp} alt="WhatsApp" style={{ width: '80%', height: '80%' }} />
          </Button>
          {isOpen && <WhatsAppModal isOpen={isOpen} onClose={() => setIsOpen(false)} />}
      </ButtonContainer>
  );
};

export default WhatsAppButton;

