import React from 'react';
import styled from 'styled-components';
import { useSpring, animated } from '@react-spring/web';
import { useInView } from 'react-intersection-observer';
import { clientLogos } from '../../data/constants';
import clientImage from '../../images/clients.png';
import clientImageLeft from '../../images/idea.png';

const Container = styled.div`
    background-color: transparent;
   
    color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    @media (max-width: 1024px) { 
        padding: 100px 30px;
    }
`;

const TitleContainer = styled.div`
    margin-bottom: 30px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
`;

const CallToActionContainer = styled.div`
    margin-bottom: 60px;
    text-align: center;
    position: relative;
    align-items: center;
    justify-content: center;
    width: 100%;
    @media (max-width: 1024px) { 
        margin-top: 40px;
    }
`;

const CallToActionText = styled.p`
color: #fff;
font-size: 28px;
font-weight: 500;
margin: 40px 30px;
@media (max-width: 1024px) { 
    font-size: 20px;
}
`;

const ContactButton = styled.a`
    background-color: orange;
    color: white;
    padding: 10px 20px;
    border-radius: 5px;
    text-transform: uppercase;
    text-decoration: none;
    font-weight: 400;
    transition: background-color 0.3s ease;
    &:hover {
        background-color: #FF7F50; 
    }
`;

const Title = styled.h3`
    color: #fff;
    font-size: 42px;
    font-weight: bold;
    margin: 0 30px;
`;

const LeftAnimatedImage = styled(animated.img)`
position: absolute;
left: 120px; 
top: 30px; 
width: 170px; 
height: auto;
z-index: 2; 
@media (max-width: 1024px) { 
    left: -20px; 
    top: 170px; 
    width: 80px; 
    height: auto;
    z-index: 2;
}
`;

const AnimatedImage = styled(animated.img)`
    position: absolute;
    right: -10px; 
    top: -270px; 
    width: 370px; 
    height: auto;
    z-index: 2; 
    @media (max-width: 1024px) { 
        display: none; 
    }
`;

const SubText = styled.p`
    color: #cbd5e0;
    margin-bottom: 40px;
    text-align: center;
    max-width: 600px;
`;

const LogoContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 10px;
`;

const Logo = styled.img`
    height: 100px;
    width: auto;
    background-color: transparent;
    padding: 10px;
    border-radius: 5px;
    box-shadow: 0 4px 6px rgba(0,0,0,0.4);
    transition: transform 0.3s ease, box-shadow 0.3s ease;

    &:hover {
        transform: scale(1.08);
        box-shadow: 0 8px 12px rgba(0,0,0,0.6);
    }
`;

const LogoGrid = () => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.5,
    });

    const props = useSpring({
        from: { transform: 'translateX(100%)', opacity: 0 },
        to: {
            transform: inView ? 'translateX(0%)' : 'translateX(100%)',
            opacity: inView ? 1 : 0,
        },
        config: { tension: 20, friction: 10 },
    });

    const leftProps = useSpring({
        from: { transform: 'translateX(-100%)', opacity: 0 },
        to: {
            transform: inView ? 'translateX(0%)' : 'translateX(-100%)',
            opacity: inView ? 1 : 0,
        },
        config: { tension: 20, friction: 10 },
    });

    return (
        <Container>
            <TitleContainer ref={ref}>
                <AnimatedImage style={props} src={clientImage} alt="Client Image" />
                <Title>Clientes</Title>
            </TitleContainer>
            <SubText>Estos son algunos de los clientes que han confiado en nosotros para llevar a cabo sus proyectos.</SubText>
            <LogoContainer>
                {clientLogos.map(logo => (
                    <Logo key={logo.id} src={logo.image} alt={logo.name} />
                ))}
            </LogoContainer>
            <CallToActionContainer>
                <CallToActionText>¿Te gustaría compartir tu idea con nosotros?</CallToActionText>
                <ContactButton href="https://wa.me/59892033831">Ponte en contacto</ContactButton>
                <LeftAnimatedImage style={leftProps} src={clientImageLeft} alt="Left Client Image" />
            </CallToActionContainer>
        </Container>
    );
};

export default LogoGrid;
