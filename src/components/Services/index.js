import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Container, Wrapper, Title, Desc, ServiceContainer, ServiceCard, ServiceIcon, ServiceTitle, ServiceDesc, ServiceFeatures, ServiceFeature, AnimatedImage, ServiceButton, TechSection, TechContent, TechLeft, TechStep, StepNumber, StepContent, StepTitle, StepDescription, TechRight, RocketImage, HighlightedText } from './ServicesStyle';
import { useSpring } from '@react-spring/web';
import { useInView } from 'react-intersection-observer';
import { FaCode, FaDesktop, FaMobileAlt, FaSearch, FaCheck, FaArrowRight, FaEnvelope } from 'react-icons/fa';
import { BiTestTube } from 'react-icons/bi';
import servicesImage from '../../images/tools.png';
import rocketImage from '../../images/rocket.png';

// Aquí importaremos las nuevas imágenes cuando las tengas
import domainImage from '../../images/domain3d.png';
import hostingImage from '../../images/server3d.png';
import sslImage from '../../images/ssl3d.png';

const Services = () => {
    const { t } = useTranslation();
    const [currentImage, setCurrentImage] = useState('domain');
    
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.2,
    });

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

    const cardAnimation = useSpring({
        from: { opacity: 0, transform: 'translateY(50px)' },
        to: { 
            opacity: inView ? 1 : 0,
            transform: inView ? 'translateY(0)' : 'translateY(50px)'
        },
        config: { tension: 300, friction: 40 },
        delay: 200,
    });

    const imageAnimation = useSpring({
        from: { transform: 'translateX(100%)', opacity: 0 },
        to: {
            transform: inView ? 'translateX(0%)' : 'translateX(100%)',
            opacity: inView ? 1 : 0,
        },
        config: { tension: 20, friction: 10 },
    });

    const stepAnimation = useSpring({
        from: { opacity: 0, transform: 'translateX(-50px)' },
        to: { 
            opacity: inView ? 1 : 0,
            transform: inView ? 'translateX(0)' : 'translateX(-50px)'
        },
        config: { tension: 300, friction: 40 },
        delay: 200,
    });

    const rocketAnimation = useSpring({
        from: { opacity: 0, transform: 'translateY(50px)' },
        to: { 
            opacity: inView ? 1 : 0,
            transform: inView ? 'translateY(0)' : 'translateY(50px)'
        },
        config: { tension: 300, friction: 40 },
        delay: 400,
    });

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
        <Container id="services" ref={ref}>
            <Wrapper>
                <Title>{t('servicesTitle')}</Title>
                <Desc>{t('servicesDescription')}</Desc>
                <AnimatedImage style={imageAnimation} src={servicesImage} alt="Services" />
                <ServiceContainer>
                    {services.map((service, index) => (
                        <ServiceCard key={index} style={cardAnimation}>
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

                <TechSection ref={ref}>
                    <Title>{t('tech_info_title')}</Title>
                    <Desc>{t('tech_info_desc')}</Desc>
                    <TechContent>
                        <TechLeft>
                            <TechStep 
                                style={stepAnimation}
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
                                style={stepAnimation}
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
                                style={stepAnimation}
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
                                style={rocketAnimation}
                            />
                        </TechRight>
                    </TechContent>
                </TechSection>
            </Wrapper>
        </Container>
    );
};

export default Services; 