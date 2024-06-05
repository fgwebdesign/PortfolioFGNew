import React, { useState } from 'react';
import { useSpring, animated } from '@react-spring/web';
import styled from 'styled-components';

const FAQItemContainer = styled.div`
  width: 100%;
  margin: 20px 0;
  cursor: pointer;
  border: 2px solid #ff8c00;
  padding: 15px;
  border-radius: 10px;
  transition: box-shadow 0.3s ease-in-out, transform 0.3s ease-in-out;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  }
`;

const Question = styled.div`
  font-size: 24px;
  color: #fff;
  margin: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Icon = styled.span`
  color: #ff8c00;
  font-size: 24px;
`;

const Answer = styled(animated.div)`
  overflow: hidden;
  color: #cbd5e0;
  font-size: 18px;
  line-height: 1.5;
  padding: 10px 20px;
`;

const FAQItem = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);
    const expand = useSpring({
        height: isOpen ? 'auto' : 0,
        opacity: isOpen ? 1 : 0,
        from: { height: 0, opacity: 0 },
        config: { duration: 300 }
    });

    return (
        <FAQItemContainer onClick={() => setIsOpen(!isOpen)}>
            <Question>
                {question}
                <Icon>{isOpen ? '-' : '+'}</Icon>
            </Question>
            <Answer style={expand}>
                <p>{answer}</p>
            </Answer>
        </FAQItemContainer>
    );
};

export default FAQItem;
