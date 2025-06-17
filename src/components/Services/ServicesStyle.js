import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
    z-index: 1;
    align-items: center;
    padding: 50px 0px;
    
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

    @media (max-width: 768px) {
        gap: 20px;
        margin-top: 30px;
    }
`;

export const ServiceCard = styled.div`
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

export const TechSection = styled.div`
    width: 100%;
    margin-top: 100px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 40px 20px;
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
    align-items: flex-start;
    gap: 60px;
    width: 100%;
    max-width: 1200px;
    margin-top: 40px;
    
    @media (max-width: 968px) {
        flex-direction: column;
        gap: 40px;
        align-items: center;
    }
`;

export const TechLeft = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 30px;
    width: 100%;
`;

export const TechRight = styled.div`
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    width: 100%;
`;

export const RocketImage = styled.img`
    width: 100%;
    max-width: 650px;
    height: auto;
    transition: all 0.3s ease-in-out;
    
    @media (max-width: 1400px) {
        max-width: 400px;
    }

    @media (max-width: 1200px) {
        max-width: 350px;
    }
    
    @media (max-width: 968px) {
        max-width: 300px;
    }

    @media (max-width: 768px) {
        max-width: 250px;
    }
`;

export const TechStep = styled.div`
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
    width: 100%;

    &:hover {
        transform: translateX(10px);
        border: 1px solid ${({ theme }) => theme.primary};
    }

    @media (max-width: 768px) {
        padding: 15px;
        gap: 12px;
        margin-bottom: 15px;
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
    width: 100%;
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

export const HighlightedText = styled.span`
    font-weight: 700;
    color: ${({ theme }) => theme.primary};
`; 