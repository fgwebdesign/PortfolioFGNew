import React, { useState } from 'react'
import { useTranslation } from 'react-i18next';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import { education, experiences } from '../../data/constants';
import EducationCard from '../Cards/EducationCard';
import { useSpring } from '@react-spring/web';
import { useInView } from 'react-intersection-observer';
import leftImageEducation from '../../images/titulos.png';
import rightImageEducation from '../../images/diploma2.png';
import { Container, Wrapper, Title, Desc, TimelineSection, AnimatedImage, LeftAnimatedImage, LoadMoreButton } from './EducationStyle';
import { FaChevronDown } from 'react-icons/fa';

const Education = () => {
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

    const visibleEducation = education.slice(0, visibleItems);
    const hasMoreItems = visibleItems < education.length;

    return (
        <Container id="education">
            <Wrapper>
                <Title ref={ref}>{t('educationTitle')}</Title>
                <AnimatedImage style={props} src={rightImageEducation} alt="Experience Image" />
                <LeftAnimatedImage style={props} src={leftImageEducation} alt="Experience Image" />
                <Desc>
                    {t('educationDescription')}
                </Desc>
                <TimelineSection>
                    <Timeline>
                        {visibleEducation.map((education, index) => (
                            <TimelineItem key={education.id}>
                                <TimelineContent sx={{ py: '12px', px: 2 }}>
                                    <EducationCard education={education} />
                                </TimelineContent>
                                <TimelineSeparator>
                                    <TimelineDot variant="outlined" color="secondary" />
                                    {index !== visibleEducation.length - 1 && <TimelineConnector style={{ background: '#854CE6' }} />}
                                </TimelineSeparator>
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
    )
}

export default Education