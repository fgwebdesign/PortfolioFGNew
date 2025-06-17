import styled from 'styled-components';
import { animated } from '@react-spring/web';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
    z-index: 1;
    align-items: center;
    padding: 50px 0px;
    
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

export const ServiceContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 40px;
    margin-top: 50px;
    width: 100%;
    max-width: 1350px;
    padding: 0 20px;
`;

export const ServiceCard = styled(animated.div)`
    width: 380px;
    background: ${({ theme }) => theme.card};
    border: 0.1px solid ${({ theme }) => theme.primary + '20'};
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
    border-radius: 16px;
    padding: 35px;
    transition: transform 0.4s ease-in-out;
    
    @media (max-width: 1200px) {
        width: 330px;
        padding: 30px;
    }
    
    @media (max-width: 768px) {
        width: 100%;
        max-width: 400px;
        padding: 25px;
    }
    
    &:hover {
        transform: translateY(-10px);
        box-shadow: 0 0 30px rgba(0, 0, 0, 0.2);
    }
`;

export const ServiceIcon = styled.div`
    width: 80px;
    height: 80px;
    border-radius: 50%;
    background: ${({ theme }) => theme.primary + '20'};
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
    
    svg {
        font-size: 40px;
        color: ${({ theme }) => theme.primary};
    }
`;

export const ServiceTitle = styled.h3`
    font-size: 24px;
    font-weight: 600;
    color: ${({ theme }) => theme.text_primary};
    margin-bottom: 15px;
`;

export const ServiceDesc = styled.p`
    font-size: 16px;
    color: ${({ theme }) => theme.text_secondary};
    line-height: 1.5;
    margin-bottom: 20px;
`;

export const ServiceFeatures = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
`;

export const ServiceFeature = styled.li`
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 15px;
    color: ${({ theme }) => theme.text_primary};
    margin-bottom: 10px;
    
    svg {
        color: ${({ theme }) => theme.primary};
    }
`;

export const AnimatedImage = styled(animated.img)`
    position: absolute;
    top: 50px;
    right: -30px;
    width: 250px;
    height: auto;
    z-index: -1;
    opacity: 0.6;
    
    @media (max-width: 1024px) {
        width: 150px;
        top: 30px;
        right: -10px;
    }
    
    @media (max-width: 768px) {
        display: none;
    }
`;

export const ServiceButton = styled.a`
    padding: 10px 20px;
    background: ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.white};
    border-radius: 8px;
    font-size: 16px;
    font-weight: 500;
    cursor: pointer;
    border: none;
    transition: all 0.3s ease;
    display: inline-flex;
    align-items: center;
    gap: 8px;
    text-decoration: none;
    margin-top: 15px;
    
    &:hover {
        background: ${({ theme }) => theme.primary + 'dd'};
        transform: translateY(-2px);
    }
    
    svg {
        font-size: 20px;
    }
`;

export const TechInfoSection = styled.div`
    margin-top: 80px;
    width: 100%;
    max-width: 1200px;
    padding: 40px;
    background: ${({ theme }) => theme.card};
    border-radius: 20px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
`;

export const TechInfoTitle = styled.h2`
    font-size: 32px;
    color: ${({ theme }) => theme.text_primary};
    text-align: center;
    margin-bottom: 10px;
`;

export const TechInfoDesc = styled.p`
    font-size: 16px;
    color: ${({ theme }) => theme.text_secondary};
    text-align: center;
    margin-bottom: 40px;
`;

export const TechInfoGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    gap: 30px;
    margin-top: 30px;
    padding: 0 20px;
    
    @media (max-width: 768px) {
        grid-template-columns: 1fr;
    }
`;

export const TechInfoCard = styled(animated.div)`
    padding: 25px;
    background: ${({ theme }) => theme.bg};
    border-radius: 16px;
    border: 1px solid ${({ theme }) => theme.primary + '30'};
    transition: all 0.3s ease;

    &:hover {
        transform: translateY(-5px);
        box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
    }
`;

export const TechInfoCardTitle = styled.h3`
    font-size: 22px;
    color: ${({ theme }) => theme.text_primary};
    margin-bottom: 15px;
    display: flex;
    align-items: center;
    gap: 10px;

    svg {
        color: ${({ theme }) => theme.primary};
        font-size: 24px;
    }
`;

export const TechInfoCardDesc = styled.p`
    font-size: 15px;
    color: ${({ theme }) => theme.text_secondary};
    line-height: 1.5;
`;

export const TechSection = styled.div`
    width: 100%;
    margin-top: 100px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 40px;
    background: ${({ theme }) => theme.card};
    border-radius: 20px;
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
    border: 2px solid ${({ theme }) => theme.primary + '80'};
    
    @media (max-width: 960px) {
        padding: 20px;
        margin-top: 60px;
    }
`;

export const TechContent = styled.div`
    display: flex;
    align-items: center;
    gap: 60px;
    width: 100%;
    max-width: 1200px;
    margin-top: 40px;
    
    @media (max-width: 968px) {
        flex-direction: column;
        gap: 40px;
    }
`;

export const TechLeft = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 30px;
`;

export const TechRight = styled.div`
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
`;

export const RocketImage = styled.img`
    width: 650px;
    height: auto;
    animation: float 6s ease-in-out infinite;
    transition: all 0.3s ease-in-out;
    
    @keyframes float {
        0% {
            transform: translateY(0px);
        }
        50% {
            transform: translateY(-20px);
        }
        100% {
            transform: translateY(0px);
        }
    }
    
    @media (max-width: 1400px) {
        width: 400px;
    }

    @media (max-width: 1200px) {
        width: 350px;
    }
    
    @media (max-width: 968px) {
        width: 300px;
    }

    @media (max-width: 768px) {
        width: 250px;
    }
`;

export const TechStep = styled(animated.div)`
    background: ${({ theme }) => theme.card};
    border-radius: 16px;
    padding: 20px;
    margin-bottom: 20px;
    display: flex;
    align-items: flex-start;
    gap: 15px;
    cursor: pointer;
    transition: all 0.3s ease;
    border: 1px solid ${({ theme }) => theme.primary + '40'};

    &:hover {
        transform: translateX(10px);
        border: 1px solid ${({ theme }) => theme.primary};
    }

    @media (max-width: 768px) {
        padding: 15px;
        gap: 12px;
    }
`;

export const StepNumber = styled.div`
    width: 36px;
    height: 36px;
    border-radius: 50%;
    background: ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.white};
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 18px;
    font-weight: 600;
    flex-shrink: 0;
`;

export const StepContent = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
`;

export const StepTitle = styled.h3`
    font-size: 20px;
    font-weight: 600;
    color: ${({ theme }) => theme.text_primary};
`;

export const StepDescription = styled.p`
    font-size: 16px;
    color: ${({ theme }) => theme.text_secondary};
    line-height: 1.5;
`;

export const ProcessImage = styled.img`
    width: 100%;
    max-width: 800px;
    height: auto;
    margin-top: 50px;
    border-radius: 16px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
`;

export const HighlightedText = styled.span`
    font-weight: 700;
    color: ${({ theme }) => theme.primary};
`; 