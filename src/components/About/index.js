import React from 'react';
import { useTranslation } from 'react-i18next';
import { FaMapMarkerAlt, FaPhone, FaLinkedin } from 'react-icons/fa';
import { 
    AboutContainer, 
    AboutContent, 
    AboutImageContainer, 
    AboutImage, 
    AboutWrapper, 
    StatsContainer,
    StatItem,
    StatNumber,
    StatText,
    Divider,
    StylizedTitle,
    StylizedSubtitle,
    PersonalInfo,
    FullName,
    InfoText,
    InfoContainer
} from './AboutStyle';
import profileImage from '../../images/HeroImage.jpeg';

const About = () => {
    const { t } = useTranslation();

    const leftStats = [
        { number: "5+", text: t('years_experience') },
        { number: "38+", text: t('projects_completed') },
    ];

    const rightStats = [
        { number: "24+", text: t('satisfied_clients') },
        { number: "3+", text: t('countries') },
    ];

    return (
        <AboutContainer id="about">
            <AboutWrapper>
                <StylizedTitle>
                    {t('want_to_know')} <span>{t('more_about_me')}</span>
                </StylizedTitle>
                <StylizedSubtitle>
                    {t('contact_me')}<span>!</span>
                </StylizedSubtitle>
                
                <PersonalInfo>
                    <FullName>Felipe Gutierrez Romero</FullName>
                    <InfoContainer>
                        <InfoText href="https://maps.google.com/?q=Montevideo,Uruguay" target="_blank">
                            <FaMapMarkerAlt /> Montevideo, Uruguay
                        </InfoText>
                        <InfoText href="tel:+59892033831">
                            <FaPhone /> +598 92 033 831
                        </InfoText>
                        <InfoText href="https://www.linkedin.com/in/felipegut/" target="_blank">
                            <FaLinkedin /> LinkedIn
                        </InfoText>
                    </InfoContainer>
                </PersonalInfo>

                <AboutContent>
                    <StatsContainer>
                        {leftStats.map((stat, index) => (
                            <StatItem key={index}>
                                <StatNumber>{stat.number}</StatNumber>
                                <StatText>{stat.text}</StatText>
                                <Divider />
                            </StatItem>
                        ))}
                    </StatsContainer>

                    <AboutImageContainer>
                        <AboutImage src={profileImage} alt="Profile" />
                    </AboutImageContainer>

                    <StatsContainer align="flex-end">
                        {rightStats.map((stat, index) => (
                            <StatItem key={index}>
                                <StatNumber>{stat.number}</StatNumber>
                                <StatText>{stat.text}</StatText>
                                <Divider />
                            </StatItem>
                        ))}
                    </StatsContainer>
                </AboutContent>
            </AboutWrapper>
        </AboutContainer>
    );
};

export default About;