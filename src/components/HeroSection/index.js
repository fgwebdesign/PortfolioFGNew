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
        <header id="about">
            <HeroContainer role="banner">
                <HeroBg aria-hidden="true">
                    <HeroBgAnimation />
                </HeroBg>
                <HeroInnerContainer>
                    <HeroLeftContainer>
                        <Title as="h1">
                            {t('welcome')}<br /> 
                            <span id="bio-name" itemProp="name">{t('bioName')}</span>
                        </Title>
                        <TextLoop>
                            <Span role="text" aria-label={t('professional_roles')}>
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
                            <ResumeButton 
                                href={Bio.resume} 
                                target='_blank'
                                rel="noopener noreferrer"
                                aria-label={t('download_resume')}
                            >
                                {t('resumeButton')}
                            </ResumeButton>
                        </animated.div>
                    </HeroLeftContainer>
                    <HeroRightContainer>
                        <animated.div style={logoProps}>
                            <Img 
                                src={HeroImg} 
                                alt={t('profile_image_alt')} 
                                itemProp="image"
                            />
                        </animated.div>
                    </HeroRightContainer>
                </HeroInnerContainer>
            </HeroContainer>
        </header>
    );
}

export default HeroSection;
