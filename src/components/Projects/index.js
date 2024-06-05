import { useState } from 'react'
import { useTranslation } from 'react-i18next';
import { Container, Wrapper, Title, Desc, CardContainer, ToggleButtonGroup, ToggleButton, Divider, AnimatedImage, AdditionalAnimatedImage } from './ProjectsStyle'
import ProjectCard from '../Cards/ProjectCards'
import { projects } from '../../data/constants'
import { useSpring } from '@react-spring/web';
import { useInView } from 'react-intersection-observer';
import portfolioImage from '../../images/portfolio3.png';
import additionalImage from '../../images/portfolio1.png';


const Projects = ({ openModal, setOpenModal }) => {
  const { t } = useTranslation();
  const [toggle, setToggle] = useState('all');
  const [titleRef, titleInView] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  const [additionalRef, additionalInView] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  const portfolioImageProps = useSpring({
    from: { transform: 'translateX(100%)', opacity: 0 },
    to: {
      transform: titleInView ? 'translateX(0%)' : 'translateX(100%)',
      opacity: titleInView ? 1 : 0,
    },
    config: { tension: 20, friction: 10 },
  });

  const additionalImageProps = useSpring({
    from: { transform: 'translateX(-100%)', opacity: 0 },
    to: {
      transform: additionalInView ? 'translateX(0%)' : 'translateX(-100%)',
      opacity: additionalInView ? 1 : 0,
    },
    config: { tension: 20, friction: 20 },
  });

  return (
    <Container id="projects">
      <Wrapper>
        <Title ref={titleRef}>{t('portfolioTitle')}</Title>
        <AdditionalAnimatedImage ref={additionalRef} style={additionalImageProps} src={additionalImage} alt="Additional" />
        <AnimatedImage style={portfolioImageProps} src={portfolioImage} alt="Portafolio" />
        <Desc>
        {t('portfolioDescription')}
        </Desc>
        <ToggleButtonGroup >
          {toggle === 'all' ?
            <ToggleButton active value="all" onClick={() => setToggle('all')}>Todos</ToggleButton>
            :
            <ToggleButton value="all" onClick={() => setToggle('all')}>Todos</ToggleButton>
          }
          <Divider />
          {toggle === 'web app' ?
            <ToggleButton active value="web app" onClick={() => setToggle('web app')}>LANDING PAGES</ToggleButton>
            :
            <ToggleButton value="web app" onClick={() => setToggle('web app')}>LANDING PAGES</ToggleButton>
          }
          <Divider />
          {toggle === 'android app' ?
            <ToggleButton active value="android app" onClick={() => setToggle('android app')}>E-COMMERCE</ToggleButton>
            :
            <ToggleButton value="android app" onClick={() => setToggle('android app')}>E-COMMERCE</ToggleButton>
          }
          <Divider />
          {toggle === 'machine learning' ?
            <ToggleButton active value="machine learning" onClick={() => setToggle('machine learning')}>WEB CATALOGUE</ToggleButton>
            :
            <ToggleButton value="machine learning" onClick={() => setToggle('machine learning')}>WEB CATALOGUE</ToggleButton>
          }
        </ToggleButtonGroup>
        <CardContainer>
          {toggle === 'all' && projects
            .map((project) => (
              <ProjectCard project={project} openModal={openModal} setOpenModal={setOpenModal} />
            ))}
          {projects
            .filter((item) => item.category === toggle)
            .map((project) => (
              <ProjectCard project={project} openModal={openModal} setOpenModal={setOpenModal} />
            ))}
        </CardContainer>
      </Wrapper>
    </Container>
  )
}

export default Projects