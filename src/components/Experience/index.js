import React, { useState } from 'react'
import { useTranslation } from 'react-i18next';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import ExperienceCard from '../Cards/ExperienceCard';
import { experiences } from '../../data/constants';
import { useSpring } from '@react-spring/web';
import { useInView } from 'react-intersection-observer';
import { Container, Wrapper, Title, Desc, TimelineSection, AnimatedImage, LeftAnimatedImage, LeftAnimatedImageTwo, AnimatedImageTwo, AnimatedImageThree, LoadMoreButton } from './ExperienceStlye';
import experienceImage from '../../images/timeline.png';
import leftImageExperience from '../../images/route.png';
import leftImageExperienceTwo from '../../images/pc1.png';
import rightImageExperience from '../../images/exp.png';
import rightImageExperienceTwo from '../../images/nubes.png';
import { FaChevronDown } from 'react-icons/fa';

const Experience = () => {
    const { t } = useTranslation();
    const [visibleItems, setVisibleItems] = useState(3);

    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.5,
    });

    const handleLoadMore = () => {
        setVisibleItems(prev => prev + 3);
    };

    const props = useSpring({
        from: { transform: 'translateX(100%)', opacity: 0 },
        to: {
            transform: inView ? 'translateX(0%)' : 'translateX(100%)',
            opacity: inView ? 1 : 0,
        },
        config: { tension: 20, friction: 10 },
    });

    const rightProps = useSpring({
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

    const leftPropsTwo = useSpring({
        from: { transform: 'translateX(-100%)', opacity: 0 },
        to: {
            transform: inView ? 'translateX(0%)' : 'translateX(-100%)',
            opacity: inView ? 1 : 0,
        },
        config: { tension: 20, friction: 10 },
    });

    const visibleExperiences = experiences.slice(0, visibleItems);
    const hasMoreItems = visibleItems < experiences.length;

    return (
        <Container id="experience">
            <Wrapper>
                <Title ref={ref}>{t('experienceTitle')}</Title>
                <AnimatedImage style={props} src={experienceImage} alt="Experience Image" />
                <AnimatedImageTwo style={rightProps} src={rightImageExperience} alt="Experience Image" />
                <AnimatedImageThree style={rightProps} src={rightImageExperienceTwo} alt="Experience Image" />
                <LeftAnimatedImage style={leftProps} src={leftImageExperience} alt="Left Experience Image" />
                <LeftAnimatedImageTwo style={leftPropsTwo} src={leftImageExperienceTwo} alt="Left Experience Image" />
                <Desc>
                    {t('experienceDescription')}
                </Desc>
                <TimelineSection>
                    <Timeline>
                        {visibleExperiences.map((experience, index) => (
                            <TimelineItem key={experience.id}>
                                <TimelineSeparator>
                                    <TimelineDot variant="outlined" color="secondary" />
                                    {index !== visibleExperiences.length - 1 && <TimelineConnector />}
                                </TimelineSeparator>
                                <TimelineContent>
                                    <ExperienceCard experience={experience} />
                                </TimelineContent>
                            </TimelineItem>
                        ))}
                    </Timeline>
                    {hasMoreItems && (
                        <LoadMoreButton onClick={handleLoadMore}>
                            {t('loadMore')} <FaChevronDown />
                        </LoadMoreButton>
                    )}
                </TimelineSection>
            </Wrapper>
        </Container>
    );
};

export default Experience;