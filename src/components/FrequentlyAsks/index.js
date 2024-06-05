import React from 'react';
import { FAQData } from '../../data/constants';
import styled from 'styled-components';
import FAQItem from '../FaqsItem';
import FaqsImage from '../../images/faqs.png';

const MainContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 120px 30px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    margin: 60px 10px;
  }
`;

const FAQsContainer = styled.div`
  background-color: transparent;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 60%;

  @media (max-width: 768px) {
    width: 95%;
  }
`;

const ImageContainer = styled.div`
  width: 40%;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    display: none; 
  }
`;



const Title = styled.h3`
  color: #fff;
  font-size: 42px;
  font-weight: bold;
  margin: 0 30px;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 28px;
    margin: 0 10px;
    margin-bottom: 10px;
  }
`;


const FrequentlyAsks = () => {
    return (
        <MainContainer>
            <FAQsContainer>
                <Title>FAQs</Title>
                {FAQData.map(faq => (
                    <FAQItem key={faq.id} question={faq.question} answer={faq.answer} />
                ))}
            </FAQsContainer>
            <ImageContainer>
                <img src={FaqsImage} alt="Faqs" style={{ width: '50%', height: 'auto' }} />
            </ImageContainer>
        </MainContainer>
    );
};

export default FrequentlyAsks;
