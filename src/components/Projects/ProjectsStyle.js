import styled from 'styled-components';
import { animated } from '@react-spring/web';

export const Container = styled.div`
    background: linear-gradient(343.07deg, rgba(132, 59, 206, 0.06) 5.71%, rgba(132, 59, 206, 0) 64.83%);
    height: 100%;
    padding-top: 60px;
    overflow: visible;
`;

export const Wrapper = styled.div`
    position: relative;
    width: 100%;
    max-width: 1350px;
    margin: 0 auto;
    padding: 10px 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
`;

export const AnimatedImage = styled(animated.img)`
  position: absolute;
  right: 1px; 
  top: 120px; 
  width: 210px; 
  height: auto; 
  z-index: 10;
  @media (max-width: 1024px) { 
  display: none; 
}
`;

export const AdditionalAnimatedImage = styled(AnimatedImage)`
position: absolute;
  right: auto;
  left: 1px; 
  top: 120px; 
  width: 210px; 
  height: auto; 
  @media (max-width: 1024px) { 
    display: none; 
  }
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
    margin: 0 auto;
    margin-bottom: 40px;
    color: ${({ theme }) => theme.text_secondary};
    @media (max-width: 768px) {
        margin-top: 12px;
        font-size: 16px;
    }
`;

export const ToggleButtonGroup = styled.div`
    display: flex;
    border: 1.5px solid ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.primary};
    font-size: 16px;
    border-radius: 12px;
    font-weight: 500;
    margin: 22px 0px;
    @media (max-width: 768px) {
        font-size: 12px;
    }
`

export const ToggleButton = styled.div`
    padding: 8px 18px;
    border-radius: 6px;
    cursor: pointer;
    ${({ active, theme }) =>
        active && `
    background: ${theme.primary + 20};
    `
    }
    &:hover {
        background: ${({ theme }) => theme.primary + 8};
    }
    @media (max-width: 768px) {
        padding: 6px 8px;
        border-radius: 4px;
    }
`
export const Divider = styled.div`
    width: 1.5px;
    background: ${({ theme }) => theme.primary};
`

export const CardContainer = styled.div`
    width: 100%;
    max-width: 1200px;
    display: flex;
    flex-direction: column;
    gap: 100px;
    align-items: center;
    padding: 50px 0;
    margin: 0 auto;
    min-height: 100vh;
    scroll-snap-type: y mandatory;
    overflow-y: auto;
    padding: 0 20px;
    @media (max-width: 768px) {
        gap: 50px;
        padding: 20px 0;
    }
`;
