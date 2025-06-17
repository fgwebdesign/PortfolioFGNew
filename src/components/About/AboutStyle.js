import styled from 'styled-components';
import _default from '../../themes/default';

export const AboutContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
    z-index: 1;
    align-items: center;
    padding: 40px 0px;
    background: ${({ theme }) => theme.card};
`;

export const AboutWrapper = styled.div`
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

export const AboutTitle = styled.div`
    font-size: 42px;
    text-align: center;
    font-weight: 600;
    margin-bottom: 20px;
    color: ${({ theme }) => theme.text_primary};
    padding: 0 20px;
    
    @media (max-width: 768px) {
        margin-top: 12px;
        font-size: 32px;
    }
`;

export const StylizedTitle = styled.div`
    font-size: 52px;
    text-align: center;
    font-weight: 700;
    margin-bottom: 20px;
    color: ${({ theme }) => theme.text_primary};
    letter-spacing: -1px;
    line-height: 1.3;
    padding: 0 20px;
    
    span {
        color: ${({ theme }) => theme.primary};
        display: inline;
    }
    
    @media (max-width: 768px) {
        font-size: 36px;
        margin-bottom: 16px;
    }
`;

export const StylizedSubtitle = styled.div`
    font-size: 42px;
    text-align: center;
    font-weight: 700;
    margin-bottom: 60px;
    color: ${({ theme }) => theme.primary};
    letter-spacing: -1px;
    padding: 0 20px;
    
    span {
        color: ${({ theme }) => theme.text_primary};
    }
    
    @media (max-width: 768px) {
        font-size: 32px;
        margin-bottom: 40px;
    }
`;

export const StatItem = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
    width: 100%;
`;

export const StatNumber = styled.div`
    font-size: 56px;
    font-weight: 600;
    color: ${({ theme }) => theme.primary};
    line-height: 1.2;
    
    @media (max-width: 768px) {
        font-size: 48px;
    }
`;

export const StatText = styled.div`
    font-size: 16px;
    color: ${({ theme }) => theme.text_primary};
    text-transform: uppercase;
    letter-spacing: 1px;

    @media (max-width: 768px) {
        font-size: 14px;
    }
`;

export const Divider = styled.div`
    width: 80px;
    height: 2px;
    background: ${({ theme }) => theme.primary};
    margin: 20px 0;
`;

export const StatsContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 30px;

    @media (min-width: 1200px) {
        & > ${StatItem} {
            align-items: ${props => props.align === 'flex-end' ? 'flex-end' : 'flex-start'};
            text-align: ${props => props.align === 'flex-end' ? 'right' : 'left'};
        }

        & > ${StatItem} ${Divider} {
            margin: ${props => props.align === 'flex-end' ? '20px 0 20px auto' : '20px 0'};
        }
    }

    @media (max-width: 1199px) {
        width: 100%;
        align-items: center;

        & > ${StatItem} {
            align-items: center;
            text-align: center;
        }

        & > ${StatItem} ${Divider} {
            margin: 20px auto;
        }
    }

    @media (max-width: 768px) {
        gap: 20px;
    }
`;

export const AboutImageContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    max-width: 500px;
    aspect-ratio: 1;
    
    &::before {
        content: '';
        position: absolute;
        top: -20px;
        left: -20px;
        right: -20px;
        bottom: -20px;
        border: 2px solid ${({ theme }) => theme.primary};
        border-radius: 50%;
        z-index: -1;
    }

    @media (max-width: 768px) {
        max-width: 280px;
        margin: 20px;
        
        &::before {
            top: -15px;
            left: -15px;
            right: -15px;
            bottom: -15px;
        }
    }
`;

export const AboutImage = styled.img`
    width: 100%;
    height: 100%;
    border-radius: 50%;
    object-fit: cover;
    object-position: center;
    border: 2px solid ${({ theme }) => theme.primary};
`;

export const AboutContent = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    gap: 40px;
    padding: 0 20px;
    
    @media (min-width: 1200px) {
        position: relative;
        
        & > ${StatsContainer}:first-child {
            flex: 0 0 25%;
            align-items: flex-start;
        }
        
        & > ${StatsContainer}:last-child {
            flex: 0 0 25%;
            align-items: flex-end;
        }
        
        & > ${AboutImageContainer} {
            flex: 0 0 50%;
            order: 0;
        }
    }

    @media (max-width: 1199px) {
        flex-direction: column;
        gap: 30px;
    }

    @media (max-width: 768px) {
        gap: 20px;
        margin-top: -20px;
        padding: 0 16px;
    }
`;

export const PersonalInfo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 40px;
    padding: 0 20px;
    width: 100%;

    @media (max-width: 768px) {
        padding: 0 16px;
    }
`;

export const FullName = styled.h2`
    font-size: 32px;
    font-weight: 600;
    color: ${({ theme }) => theme.text_primary};
    margin-bottom: 16px;
    text-align: center;
`;

export const InfoContainer = styled.div`
    display: flex;
    gap: 24px;
    flex-wrap: wrap;
    justify-content: center;
    width: 100%;
    padding: 0 20px;

    @media (max-width: 768px) {
        gap: 16px;
        padding: 0 16px;
    }
`;

export const InfoText = styled.a`
    font-size: 16px;
    color: ${({ theme }) => theme.text_primary};
    display: flex;
    align-items: center;
    gap: 8px;
    text-decoration: none;
    transition: color 0.2s ease-in-out;
    padding: 8px 16px;
    border-radius: 20px;
    background: ${({ theme }) => theme.card_light};
    
    &:hover {
        color: ${({ theme }) => theme.primary};
        transform: translateY(-2px);
    }
    
    svg {
        font-size: 20px;
        color: ${({ theme }) => theme.primary};
    }
    
    @media (max-width: 768px) {
        font-size: 14px;
        padding: 6px 12px;
        
        svg {
            font-size: 18px;
        }
    }
`;

export const SocialMediaIcons = styled.div`
  display: flex;
  margin-top: 1rem;
`;

export const SocialMediaIcon = styled.a`
  display: inline-block;
  margin: 0 1rem;
  font-size: 1.5rem;
  color: ${({ theme }) => theme.text_primary};
  transition: color 0.2s ease-in-out;
  &:hover {
    color: ${({ theme }) => theme.primary};
  }
`;