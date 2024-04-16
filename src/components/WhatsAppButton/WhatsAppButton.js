import React, { useState } from 'react';
import styled from 'styled-components';
import WhatsAppModal from './components/WhatsAppModal';

const Button = styled.button`
  position: fixed;
  bottom: 20px;
  right: 20px;
  background-color: #25D366;
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
  z-index: 100;
`;

const WhatsAppButton = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <Button onClick={() => setIsOpen(true)}>💬</Button>
            {isOpen && <WhatsAppModal isOpen={isOpen} onClose={() => setIsOpen(false)} />}
        </>
    );
};

export default WhatsAppButton;
