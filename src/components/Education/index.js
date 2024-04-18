
import React from 'react'
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
import { Container, Wrapper, Title, Desc, TimelineSection, AnimatedImage, LeftAnimatedImage } from './EducationStyle';




const Education = () => {

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

    return (
        <Container id="education">
            <Wrapper>
              <Title ref={ref}>Educación</Title>
              <AnimatedImage style={props} src={rightImageEducation} alt="Experience Image" />
              <LeftAnimatedImage style={props} src={leftImageEducation} alt="Experience Image" />
                <Desc>
                    Mi educación ha sido un  autodescubrimiento y crecimiento, les dejo aqui mis certificaciones y aprendizajes más recientes.
                </Desc>
                <TimelineSection>
                    <Timeline>
                        {education.map((education, index) => (
                            <TimelineItem >
                                <TimelineContent sx={{ py: '12px', px: 2 }}>
                                    <EducationCard education={education} />
                                </TimelineContent>
                                <TimelineSeparator>
                                    <TimelineDot variant="outlined" color="secondary" />
                                    {index !== experiences.length && <TimelineConnector style={{ background: '#854CE6' }} />}
                                </TimelineSeparator>
                            </TimelineItem>
                        ))}
                    </Timeline>

                </TimelineSection>
            </Wrapper>
        </Container>
    )
}

export default Education