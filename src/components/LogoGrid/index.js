import React from 'react';
import styled from 'styled-components';
import { useSpring, animated } from '@react-spring/web';
import { useInView } from 'react-intersection-observer';
import { clientLogos } from '../../data/constants';
import clientImage from '../../images/clients.png';
import clientImageLeft from '../../images/idea.png';

const Container = styled.div`
    background-color: transparent;
    margin-top: 120px;
    margin-bottom: 120px;
    color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    @media (max-width: 1024px) { 
        padding: 100px 30px;
        margin-top: 40px;
        margin-bottom: 40px;
    }
`;

const TitleContainer = styled.div`
    margin-bottom: 40px;
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
-webkit-appearance: button;
-moz-appearance: button;
appearance: button;
text-decoration: none;
width: 95%;
max-width: 300px;
text-align: center;
padding: 16px 0;
color:${({ theme }) => theme.white};
border-radius: 20px;
cursor: pointer;
font-size: 20px;
font-weight: 600;
transition: all 0.2s ease-in-out !important;
background: hsla(14, 100%, 50%, 1);
background: linear-gradient(225deg, hsla(14, 100%, 50%, 1) 0%, hsla(34, 100%, 50%, 1) 100%);
background: -moz-linear-gradient(225deg, hsla(14, 100%, 50%, 1) 0%, hsla(34, 100%, 50%, 1) 100%);
background: -webkit-linear-gradient(225deg, hsla(14, 100%, 50%, 1) 0%, hsla(34, 100%, 50%, 1) 100%);    
box-shadow:  20px 20px 60px #1F2634,
-20px -20px 60px #1F2634;
&:hover {
    transform: scale(1.05);
transition: all 0.4s ease-in-out;
box-shadow:  20px 20px 60px #1F2634,
filter: brightness(1);
}    
@media (max-width: 640px) {
    padding: 15px 8px;
    font-size: 15px;
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
    right: 5px; 
    top: -310px; 
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
    padding: 20px;
    border: 2px solid #FF8C00;
    border-radius: 12px;
    box-shadow: 0 4px 6px rgba(0,0,0,0.4);
    transition: transform 0.3s ease, box-shadow 0.3s ease;

    &:hover {
        transform: scale(1.02);
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
            <SubText>Estos son algunos de los clientes que han confiado en mi para llevar a cabo sus proyectos.</SubText>
            <LogoContainer>
                {clientLogos.map(logo => (
                    <Logo key={logo.id} src={logo.image} alt={logo.name} />
                ))}
            </LogoContainer>
            <CallToActionContainer>
                <CallToActionText>¿Te gustaría compartir tu idea conmigo?</CallToActionText>
                <ContactButton href="https://wa.me/59892033831">Ponte en contacto</ContactButton>
                <LeftAnimatedImage style={leftProps} src={clientImageLeft} alt="Left Client Image" />
            </CallToActionContainer>
        </Container>
    );
};

export default LogoGrid;
