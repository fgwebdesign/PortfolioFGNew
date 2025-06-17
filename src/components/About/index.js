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
        <section aria-labelledby="about-title" className="about-section">
            <AboutContainer id="about" itemScope itemType="http://schema.org/Person">
                <AboutWrapper>
                    <StylizedTitle as="h2" id="about-title">
                        {t('want_to_know')} <span>{t('more_about_me')}</span>
                    </StylizedTitle>
                    <StylizedSubtitle as="h3">
                        {t('contact_me')}<span>!</span>
                    </StylizedSubtitle>
                    
                    <PersonalInfo>
                        <FullName itemProp="name">Felipe Gutierrez Romero</FullName>
                        <InfoContainer>
                            <InfoText 
                                href="https://maps.google.com/?q=Montevideo,Uruguay" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                itemProp="address"
                                aria-label={t('location_label')}
                            >
                                <FaMapMarkerAlt aria-hidden="true" /> Montevideo, Uruguay
                            </InfoText>
                            <InfoText 
                                href="tel:+59892033831"
                                itemProp="telephone"
                                aria-label={t('phone_label')}
                            >
                                <FaPhone aria-hidden="true" /> +598 92 033 831
                            </InfoText>
                            <InfoText 
                                href="https://www.linkedin.com/in/felipegut/" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                itemProp="sameAs"
                                aria-label={t('linkedin_label')}
                            >
                                <FaLinkedin aria-hidden="true" /> LinkedIn
                            </InfoText>
                        </InfoContainer>
                    </PersonalInfo>

                    <AboutContent>
                        <StatsContainer role="list" aria-label={t('achievements_left')}>
                            {leftStats.map((stat, index) => (
                                <StatItem key={index} role="listitem">
                                    <StatNumber>{stat.number}</StatNumber>
                                    <StatText>{stat.text}</StatText>
                                    <Divider aria-hidden="true" />
                                </StatItem>
                            ))}
                        </StatsContainer>

                        <AboutImageContainer>
                            <AboutImage 
                                src={profileImage} 
                                alt={t('profile_detailed_image')} 
                                itemProp="image"
                            />
                        </AboutImageContainer>

                        <StatsContainer role="list" aria-label={t('achievements_right')} align="flex-end">
                            {rightStats.map((stat, index) => (
                                <StatItem key={index} role="listitem">
                                    <StatNumber>{stat.number}</StatNumber>
                                    <StatText>{stat.text}</StatText>
                                    <Divider aria-hidden="true" />
                                </StatItem>
                            ))}
                        </StatsContainer>
                    </AboutContent>
                </AboutWrapper>
            </AboutContainer>
        </section>
    );
};

export default About;