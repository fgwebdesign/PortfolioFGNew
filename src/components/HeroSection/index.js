import React from 'react';
import { useSpring, animated } from '@react-spring/web';
import HeroBgAnimation from '../HeroBgAnimation';
import { HeroContainer, HeroBg, HeroLeftContainer, Img, HeroRightContainer, HeroInnerContainer, TextLoop, Title, Span, SubTitle, SocialMediaIcons, SocialMediaIcon, ResumeButton } from './HeroStyle';
import HeroImg from '../../images/logofg.png';
import Typewriter from 'typewriter-effect';
import { Bio } from '../../data/constants';

const HeroSection = () => {
    const titleProps = useSpring({ to: { opacity: 1, transform: 'translateY(0)' }, from: { opacity: 0, transform: 'translateY(-30px)' }, delay: 300 });
    const logoProps = useSpring({ to: { opacity: 1, transform: 'translateY(0)' }, from: { opacity: 0, transform: 'translateY(-40px)' }, delay: 300 });
    const spanProps = useSpring({ to: { opacity: 1, transform: 'translateX(0)' }, from: { opacity: 0, transform: 'translateX(-40px)' }, delay: 300 });
    const buttonProps = useSpring({ to: { opacity: 1, transform: 'translateX(0)' }, from: { opacity: 0, transform: 'translateX(-40px)' }, delay: 600 });

    return (
        <div id="about">
            <HeroContainer>
                <HeroBg>
                    <HeroBgAnimation />
                </HeroBg>
                <HeroInnerContainer>
                    <HeroLeftContainer>
                        <animated.div style={titleProps}>
                            <Title>BIENVENIDO<br /> <span id="bio-name">{Bio.name}</span></Title>
                        </animated.div>
                        <TextLoop>
                            <animated.div style={spanProps}>
                                <Span>
                                    <Typewriter
                                        options={{
                                            strings: Bio.roles,
                                            autoStart: true,
                                            loop: true,
                                        }}
                                    />
                                </Span>
                            </animated.div>
                        </TextLoop>
                        <animated.div style={buttonProps}>
                        <ResumeButton href={Bio.resume} target='display'>Descargar CV</ResumeButton>
                        </animated.div>
                    </HeroLeftContainer>
                    <HeroRightContainer>
                        <animated.div style={logoProps}>
                            <Img src={HeroImg} alt="hero-image" />
                        </animated.div>
                    </HeroRightContainer>
                </HeroInnerContainer>
            </HeroContainer>
        </div>
    );
}

export default HeroSection;
