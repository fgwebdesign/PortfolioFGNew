import styled from 'styled-components';
import { animated } from '@react-spring/web';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
    z-index: 1;
    align-items: center;
    padding: 40px 0px 80px 0px;
    @media (max-width: 960px) {
        padding: 0px;
    }
`;

export const Wrapper = styled.div`
position: relative;
display: flex;
justify-content: space-between;
align-items: center;
flex-direction: column;
width: 100%;
max-width: 1350px;
padding: 80px 0;
gap: 12px;
@media (max-width: 960px) {
    flex-direction: column;
}
`;

export const ContactForm = styled.form`
width: 95%;
max-width: 600px;
display: flex;
flex-direction: column;
background-color: ${({ theme }) => theme.card};
padding: 32px;
border-radius: 16px;
box-shadow: rgba(23, 92, 230, 0.15) 0px 4px 24px;
margin-top: 28px;
gap: 12px;
`;

export const ContactTitle = styled.div`
font-size: 24px;
margin-bottom: 6px;
font-weight: 600;
color: ${({ theme }) => theme.text_primary};
`;

export const ContactInput = styled.input`
flex: 1;
background-color: transparent;
border: 1px solid ${({ theme }) => theme.text_secondary};
outline: none;
font-size: 18px;
color: ${({ theme }) => theme.text_primary};
border-radius: 12px;
padding: 12px 16px;
&:focus {
  border: 1px solid ${({ theme }) => theme.primary};
}
`

export const ContactInputMessage = styled.textarea`
flex: 1;
background-color: transparent;
border: 1px solid ${({ theme }) => theme.text_secondary};
outline: none;
font-size: 18px;
color: ${({ theme }) => theme.text_primary};
border-radius: 12px;
padding: 12px 16px;
&:focus {
  border: 1px solid ${({ theme }) => theme.primary};
}
`;

export const ContactButton = styled.input`
  width: 100%;
  text-decoration: none;
  text-align: center;
  background: ${({ theme }) => theme.primary};
  padding: 13px 16px;
  margin-top: 2px;
  border-radius: 12px;
  border: none;
  color: ${({ theme }) => theme.white};
  font-size: 18px;
  font-weight: 600;
  transition: all 0.2s ease-in-out !important;
  cursor: pointer;
  
  &:hover {
    transform: scale(1.05);
    transition: all 0.4s ease-in-out;
  }
    
  &:disabled {
    background: ${({ theme }) => theme.text_secondary};
    cursor: not-allowed;
    transform: none;
  }

  @media (max-width: 640px) {
    padding: 12px 0;
    font-size: 16px;
  } 
`;


export const AnimatedImage = styled(animated.img)`
  position: absolute;
  top: -60px;
  z-index: 2; 
  right: 12px; 
  width: 250px; 
  height: auto;
  @media (max-width: 1024px) {
    width: 130px;
    top: -70px;
`;



export const LeftAnimatedImage = styled(AnimatedImage)`
  right: auto;  
  width: 230px; 
  left: 5%;
  top: 72%;      
  @media (max-width: 1024px) {
    display: none;
`;


export const Title = styled.div`
font-size: 42px;
text-align: center;
font-weight: 600;
margin-top: 20px;
  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 768px) {
      margin-top: 12px;
      font-size: 32px;
  }
`;

export const Desc = styled.div`
font-size: 18px;
text-align: center;
max-width: 600px;
color: ${({ theme }) => theme.text_secondary};
@media (max-width: 768px) {
    margin-top: 12px;
    font-size: 16px;
}
`;

export const TimelineSection = styled.div`
width: 100%;
max-width: 1000px;
margin-top: 10px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
gap: 12px;
`;