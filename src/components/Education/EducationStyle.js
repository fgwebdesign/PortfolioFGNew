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
        padding: 30px 0px;
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
        padding: 40px 20px;
    }
`;

export const AnimatedImage = styled(animated.img)`
  position: absolute;
  top: -20px;
  z-index: 2; 
  right: -30px; 
  width: 250px; 
  height: auto;
  @media (max-width: 1024px) {
    top:0.8%;
    right: 0.8%;
    width: 90px; 
`;

export const LeftAnimatedImage = styled(AnimatedImage)`
  right: auto;  
  width: 160px; 
  left: 10%;
  top: 15%;      
  @media (max-width: 1024px) {
    display: none;
`;

export const Title = styled.div`
    font-size: 42px;
    text-align: center;
    font-weight: 600;
    margin-top: 20px;
    color: ${({ theme }) => theme.text_primary};
    padding: 0 20px;
    
    @media (max-width: 768px) {
        margin-top: 12px;
        font-size: 32px;
        padding: 0 16px;
    }
`;

export const Desc = styled.div`
    font-size: 18px;
    text-align: center;
    max-width: 600px;
    color: ${({ theme }) => theme.text_secondary};
    padding: 0 20px;
    margin: 20px 0;
    
    @media (max-width: 768px) {
        font-size: 16px;
        padding: 0 16px;
        margin: 12px 0;
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
    padding: 0 20px;
    
    @media (max-width: 768px) {
        padding: 0 16px;
        gap: 10px;
        margin-top: 5px;
    }
`;

export const LoadMoreButton = styled.button`
    padding: 12px 24px;
    margin-top: 16px;
    background: ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.white};
    border-radius: 6px;
    font-size: 16px;
    font-weight: 500;
    cursor: pointer;
    border: none;
    transition: all 0.3s ease;
    display: flex;
    align-items: center;
    gap: 8px;

    &:hover {
        background: ${({ theme }) => theme.primary + 'dd'};
        transform: translateY(-2px);
    }

    @media (max-width: 768px) {
        font-size: 14px;
        padding: 10px 20px;
        margin: 20px 16px;
    }
`;