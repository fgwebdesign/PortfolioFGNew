import styled from 'styled-components';
import { animated } from '@react-spring/web';

export const ProcessContainer = styled.section`
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
    padding: 60px 0;
    
    @media (max-width: 960px) {
        padding: 40px 0;
    }
`;

export const ProcessWrapper = styled.div`
    max-width: 1100px;
    width: 100%;
    padding: 0 30px;
    margin: 0 auto;
`;

export const ProcessTitle = styled.h2`
    font-size: 42px;
    text-align: center;
    font-weight: 600;
    margin-bottom: 20px;
    color: ${({ theme }) => theme.text_primary};
    
    @media (max-width: 768px) {
        font-size: 32px;
    }
`;

export const ProcessDescription = styled.p`
    text-align: center;
    font-size: 18px;
    max-width: 600px;
    margin: 0 auto 60px;
    color: ${({ theme }) => theme.text_secondary};
    
    @media (max-width: 768px) {
        font-size: 16px;
        margin-bottom: 40px;
    }
`;

export const StepsContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: stretch;
    gap: 40px;
    margin-top: 40px;
    
    @media (max-width: 1200px) {
        gap: 20px;
    }
    
    @media (max-width: 768px) {
        flex-direction: column;
        align-items: center;
    }
`;

export const StepWrapper = styled.div`
    flex: 1;
    max-width: 380px;
    display: flex;
    flex-direction: column;
    cursor: pointer;
    transition: transform 0.3s ease;
    
    &:hover {
        transform: translateY(-5px);
    }
    
    @media (max-width: 768px) {
        max-width: 100%;
    }
`;

export const StepImageContainer = styled.div`
    width: 100%;
    height: 240px;
    border-radius: 20px;
    overflow: hidden;
    background: ${({ theme }) => theme.card + '80'};
    padding: 35px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 3px solid ${({ number }) => {
        if (number === 1) return '#00E67640';
        if (number === 2) return '#00E67680';
        if (number === 3) return '#00E676';
        return '#00E67640';
    }};
    margin-bottom: 40px;
    box-shadow: 0 4px 8px rgba(0,0,0,0.1);
    transition: all 0.3s ease;

    &:hover {
        box-shadow: 0 6px 12px rgba(0,0,0,0.15);
        transform: translateY(-2px);
    }

    @media (max-width: 1200px) {
        height: 220px;
        padding: 30px;
    }

    @media (max-width: 768px) {
        height: 200px;
        padding: 25px;
    }
`;

export const StepImage = styled.img`
    width: 100%;
    height: 100%;
    object-fit: contain;
    transition: transform 0.3s ease;
    
    ${StepWrapper}:hover & {
        transform: scale(1.05);
    }
`;

export const StepNumber = styled.div`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: ${({ number }) => {
        if (number === 1) return '#ffffff';
        if (number === 2) return '#00E67680';
        if (number === 3) return '#00E676';
        return '#ffffff';
    }};
    color: ${({ number }) => number === 1 ? '#333333' : '#ffffff'};
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 600;
    font-size: 20px;
    margin: 0 auto 20px;
    position: relative;
    z-index: 2;
    transition: all 0.3s ease;
    box-shadow: 0 4px 8px rgba(0,0,0,0.1);
    border: ${({ number }) => number === 1 ? '2px solid #00E67640' : 'none'};

    &:hover {
        transform: scale(1.05);
        box-shadow: 0 6px 12px rgba(0,0,0,0.15);
    }
`;

export const StepContent = styled(animated.div)`
    background: ${({ theme }) => theme.card};
    border-radius: 20px;
    padding: 25px;
    flex: 1;
    transition: all 0.3s ease;
    border: 3px solid ${({ number }) => {
        if (number === 1) return '#00E67640';
        if (number === 2) return '#00E67680';
        if (number === 3) return '#00E676';
        return '#00E67640';
    }};
    box-shadow: 0 4px 8px rgba(0,0,0,0.1);

    &:hover {
        box-shadow: 0 6px 12px rgba(0,0,0,0.15);
        transform: translateY(-2px);
    }
`;

export const StepTitle = styled.h3`
    font-size: 24px;
    font-weight: 600;
    margin-bottom: 15px;
    color: ${({ theme }) => theme.text_primary};
    text-align: center;
`;

export const StepDescription = styled.p`
    font-size: 16px;
    line-height: 1.5;
    color: ${({ theme }) => theme.text_secondary};
    margin-bottom: 15px;
    text-align: center;
`;

export const StepFeatures = styled.ul`
    list-style: none;
    padding: 0;
    margin: 15px 0 0;
`;

export const StepFeature = styled.li`
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 15px;
    color: ${({ theme }) => theme.text_secondary};
    margin-bottom: 10px;
    
    svg {
        color: ${({ theme }) => theme.primary};
        font-size: 18px;
    }
`;