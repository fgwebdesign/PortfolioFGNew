import styled from 'styled-components';
import { animated } from '@react-spring/web';

export const Container = styled.div`
    background: linear-gradient(
        343.07deg, 
        rgba(132, 59, 206, 0.06) 5.71%, 
        rgba(132, 59, 206, 0) 64.83%
    );
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
    z-index: 1;
    align-items: center;
    padding: 50px 0px;
    clip-path: polygon(0 0, 100% 0, 100% 100%,100% 98%, 0 100%);
    
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
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 28px;
    padding: 20px;
    
    @media (max-width: 768px) {
        padding: 16px;
        gap: 16px;
    }
`;

export const AnimatedImage = styled(animated.img)`
    position: absolute;
    right: 1px; 
    top: 120px; 
    width: 210px; 
    height: auto; 
    z-index: 10;
    filter: drop-shadow(0px 0px 8px rgba(255, 140, 0, 0.3));
    @media (max-width: 1024px) { 
        display: none; 
    }
`;

export const AdditionalAnimatedImage = styled(animated.img)`
    position: absolute;
    right: auto;
    left: 1px; 
    top: 120px; 
    width: 210px; 
    height: auto; 
    filter: drop-shadow(0px 0px 8px rgba(255, 140, 0, 0.3));
    @media (max-width: 1024px) { 
        display: none; 
    }
`;

export const LoadMoreButton = styled.button`
    padding: 12px 24px;
    background: ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.white};
    border-radius: 8px;
    font-size: 16px;
    font-weight: 500;
    cursor: pointer;
    border: none;
    transition: all 0.3s ease;
    margin-top: 24px;
    
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

export const FilterContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
    margin: 20px 0;
    padding: 0 20px;
    
    @media (max-width: 768px) {
        padding: 0 16px;
        width: 100%;
    }
`;

export const FilterGroup = styled.div`
    display: flex;
    align-items: center;
    gap: 12px;
    flex-wrap: wrap;
    justify-content: center;
    
    @media (max-width: 768px) {
        width: 100%;
        gap: 8px;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
    }
`;

export const FilterButton = styled.button`
    padding: 8px 18px;
    border-radius: 6px;
    cursor: pointer;
    border: none;
    background: none;
    color: ${({ theme }) => theme.primary};
    font-size: inherit;
    font-weight: 500;
    ${({ active, theme }) =>
        active && `
        background: ${theme.primary + 20};
        `
    }
    transition: all 0.3s ease;
    
    &:hover {
        background: ${({ theme }) => theme.primary + 8};
    }
    
    @media (max-width: 768px) {
        padding: 10px 16px;
        border-radius: 6px;
        width: 100%;
        text-align: center;
        font-size: 14px;
    }
`;

export const FilterDivider = styled.div`
    width: 1.5px;
    background: ${({ theme }) => theme.primary};
`;

export const FloatingInfo = styled(animated.div)`
    position: absolute;
    right: 5%;
    top: 50%;
    display: flex;
    align-items: center;
    gap: 15px;
    transform-origin: center;
    padding: 15px 20px;
    border-radius: 20px;
    z-index: 10;
    flex-direction: column;

    @media (max-width: 1024px) {
        display: none;
    }
`;