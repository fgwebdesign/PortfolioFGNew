import React from 'react';
import { useSpring, animated } from '@react-spring/web';
import { useTranslation } from 'react-i18next';
import HeroBgAnimation from '../HeroBgAnimation';
import { HeroContainer, HeroBg, HeroLeftContainer, Img, HeroRightContainer, HeroInnerContainer, TextLoop, Title, Span, SubTitle, SocialMediaIcons, SocialMediaIcon, ResumeButton } from './HeroStyle';
import HeroImg from '../../images/logofg.png';
import Typewriter from 'typewriter-effect';
import { Bio } from '../../data/constants';

const HeroSection = () => {
    const { t } = useTranslation();
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
                        <Title>{t('welcome')}<br /> <span id="bio-name">{t('bioName')}</span></Title>
                        <TextLoop>

                            <Span>
                                <Typewriter
                                    options={{
                                        strings: Bio.roles,
                                        autoStart: true,
                                        loop: true,
                                    }}
                                />
                            </Span>

                        </TextLoop>
                        <animated.div style={buttonProps}>
                        <ResumeButton href={Bio.resume} target='display'>{t('resumeButton')}</ResumeButton>
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
