import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Container, Wrapper, Title, Desc, ServiceContainer, ServiceCard, ServiceIcon, ServiceTitle, ServiceDesc, ServiceFeatures, ServiceFeature, ServiceButton, TechSection, TechContent, TechLeft, TechStep, StepNumber, StepContent, StepTitle, StepDescription, TechRight, RocketImage, HighlightedText } from './ServicesStyle';
import { FaCode, FaDesktop, FaMobileAlt, FaSearch, FaCheck, FaArrowRight, FaEnvelope } from 'react-icons/fa';
import { BiTestTube } from 'react-icons/bi';
import domainImage from '../../images/domain3d.png';
import hostingImage from '../../images/server3d.png';
import sslImage from '../../images/ssl3d.png';

const Services = () => {
    const { t } = useTranslation();
    const [currentImage, setCurrentImage] = useState('domain');

    const getImage = () => {
        switch(currentImage) {
            case 'domain':
                return domainImage;
            case 'hosting':
                return hostingImage;
            case 'ssl':
                return sslImage;
            default:
                return domainImage;
        }
    };

    const handleMouseEnter = (step) => {
        setCurrentImage(step);
    };

    const handleMouseLeave = () => {
        setCurrentImage('default');
    };

    const services = [
        {
            icon: <FaCode />,
            title: t('service_web_dev_title'),
            description: t('service_web_dev_desc'),
            features: [
                t('service_web_dev_feature1'),
                t('service_web_dev_feature2'),
                t('service_web_dev_feature3'),
            ]
        },
        {
            icon: <FaDesktop />,
            title: t('service_web_design_title'),
            description: t('service_web_design_desc'),
            features: [
                t('service_web_design_feature1'),
                t('service_web_design_feature2'),
                t('service_web_design_feature3'),
            ]
        },
        {
            icon: <BiTestTube />,
            title: t('service_qa_title'),
            description: t('service_qa_desc'),
            features: [
                t('service_qa_feature1'),
                t('service_qa_feature2'),
                t('service_qa_feature3'),
            ]
        },
        {
            icon: <FaMobileAlt />,
            title: t('service_responsive_title'),
            description: t('service_responsive_desc'),
            features: [
                t('service_responsive_feature1'),
                t('service_responsive_feature2'),
                t('service_responsive_feature3'),
            ]
        },
        {
            icon: <FaSearch />,
            title: t('service_seo_title'),
            description: t('service_seo_desc'),
            features: [
                t('service_seo_feature1'),
                t('service_seo_feature2'),
                t('service_seo_feature3'),
            ]
        },
        {
            icon: <FaEnvelope />,
            title: t('service_email_title'),
            description: t('service_email_desc'),
            features: [
                t('service_email_feature1'),
                t('service_email_feature2'),
                t('service_email_feature3'),
            ]
        }
    ];

    return (
        <Container id="services">
            <Wrapper>
                <Title>{t('servicesTitle')}</Title>
                <Desc>{t('servicesDescription')}</Desc>
                <ServiceContainer>
                    {services.map((service, index) => (
                        <ServiceCard key={index}>
                            <ServiceIcon>
                                {service.icon}
                            </ServiceIcon>
                            <ServiceTitle>{service.title}</ServiceTitle>
                            <ServiceDesc>{service.description}</ServiceDesc>
                            <ServiceFeatures>
                                {service.features.map((feature, idx) => (
                                    <ServiceFeature key={idx}>
                                        <FaCheck /> {feature}
                                    </ServiceFeature>
                                ))}
                            </ServiceFeatures>
                            <ServiceButton href="#contact">
                                {t('service_contact_button')} <FaArrowRight />
                            </ServiceButton>
                        </ServiceCard>
                    ))}
                </ServiceContainer>

                <TechSection>
                    <Title>{t('tech_info_title')}</Title>
                    <Desc>{t('tech_info_desc')}</Desc>
                    <TechContent>
                        <TechLeft>
                            <TechStep 
                                onMouseEnter={() => handleMouseEnter('domain')}
                                onMouseLeave={handleMouseLeave}
                            >
                                <StepNumber>1</StepNumber>
                                <StepContent>
                                    <StepTitle>{t('domain_title')}</StepTitle>
                                    <StepDescription>
                                        {t('domain_desc').split(/<example>|<\/example>/).map((text, index) => {
                                            if (index % 2 === 1) {
                                                return <HighlightedText key={index}>{text}</HighlightedText>;
                                            }
                                            return text;
                                        })}
                                    </StepDescription>
                                </StepContent>
                            </TechStep>
                            <TechStep 
                                onMouseEnter={() => handleMouseEnter('hosting')}
                                onMouseLeave={handleMouseLeave}
                            >
                                <StepNumber>2</StepNumber>
                                <StepContent>
                                    <StepTitle>{t('hosting_title')}</StepTitle>
                                    <StepDescription>{t('hosting_desc')}</StepDescription>
                                </StepContent>
                            </TechStep>
                            <TechStep 
                                onMouseEnter={() => handleMouseEnter('ssl')}
                                onMouseLeave={handleMouseLeave}
                            >
                                <StepNumber>3</StepNumber>
                                <StepContent>
                                    <StepTitle>{t('ssl_title')}</StepTitle>
                                    <StepDescription>{t('ssl_desc')}</StepDescription>
                                </StepContent>
                            </TechStep>
                        </TechLeft>
                        <TechRight>
                            <RocketImage 
                                src={getImage()}
                                alt="Proceso de desarrollo web"
                            />
                        </TechRight>
                    </TechContent>
                </TechSection>
            </Wrapper>
        </Container>
    );
};

export default Services; 