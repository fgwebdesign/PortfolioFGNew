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
    padding: 80px 0;
    clip-path: polygon(0 0, 100% 0, 100% 100%,100% 98%, 0 100%);
`;

export const Wrapper = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
    max-width: 1350px;
    padding: 10px 0px 100px 0;
    gap: 12px;
    @media (max-width: 960px) {
        flex-direction: column;
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
    color: ${({ theme }) => theme.text_secondary};
    line-height: 1.5;
    margin-bottom: 20px;
    
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
    display: flex;
    justify-content: center;
    align-items: stretch;
    gap: 28px;
    flex-wrap: wrap;
    padding: 0 30px;
    max-width: 1200px;
    margin: 0 auto;
    
    @media (max-width: 960px) {
        gap: 20px;
        padding: 0 20px;
    }
    
    @media (max-width: 640px) {
        gap: 16px;
        padding: 0 16px;
    }
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

export const AdditionalAnimatedImage = styled(animated.img)`
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

export const LoadMoreButton = styled.button`
    padding: 12px 32px;
    border-radius: 30px;
    font-size: 16px;
    font-weight: 600;
    color: ${({ theme }) => theme.white};
    background: linear-gradient(225deg, 
        ${({ theme }) => theme.primary} 0%, 
        ${({ theme }) => theme.primary + "dd"} 100%
    );
    cursor: pointer;
    border: none;
    position: relative;
    overflow: hidden;
    margin-top: 40px;
    transition: all 0.3s ease;
    
    &:hover {
        transform: scale(1.05);
        box-shadow: 0 5px 15px rgba(0,0,0,0.3);
    }
    
    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: -100%;
        width: 100%;
        height: 100%;
        background: linear-gradient(
            90deg,
            transparent 0%,
            rgba(255,255,255,0.2) 50%,
            transparent 100%
        );
        transition: left 0.5s ease;
    }
    
    &:hover::before {
        left: 100%;
    }
    
    @media (max-width: 768px) {
        padding: 10px 24px;
        font-size: 14px;
    }
`;

export const FilterContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
    margin: 22px 0;
    flex-wrap: wrap;
    justify-content: center;
    
    @media (max-width: 768px) {
        flex-direction: column;
        gap: 12px;
    }
`;

export const FilterGroup = styled.div`
    display: flex;
    border: 1.5px solid ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.primary};
    font-size: 16px;
    border-radius: 12px;
    font-weight: 500;
    
    @media (max-width: 768px) {
        font-size: 12px;
        width: 100%;
        justify-content: center;
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
        padding: 6px 12px;
        border-radius: 4px;
        flex: 1;
    }
`;

export const FilterDivider = styled.div`
    width: 1.5px;
    background: ${({ theme }) => theme.primary};
`;

export const YearSelect = styled.select`
    padding: 8px 16px;
    font-size: 16px;
    border-radius: 12px;
    border: 1.5px solid ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.primary};
    background: transparent;
    cursor: pointer;
    outline: none;
    transition: all 0.3s ease;
    
    &:hover, &:focus {
        background: ${({ theme }) => theme.primary + 8};
    }
    
    option {
        color: ${({ theme }) => theme.text_primary};
        background: ${({ theme }) => theme.card};
    }
    
    @media (max-width: 768px) {
        width: 100%;
        font-size: 14px;
        padding: 6px 12px;
    }
`;
