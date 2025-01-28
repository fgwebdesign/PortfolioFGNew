import { useTranslation } from 'react-i18next';
import { Container, Wrapper, Title, Desc } from './ProjectsStyle'
import ProjectCard from '../Cards/ProjectCards'
import { projects } from '../../data/constants'

const Projects = () => {
  const { t } = useTranslation();

  return (
    <Container id="projects">
      <Wrapper>
        <Title>{t('portfolioTitle')}</Title>
        <Desc>{t('portfolioDescription')}</Desc>
        {projects.map((project, index) => (
          <ProjectCard 
            key={project.id}
            project={project}
            index={index}
          />
        ))}
      </Wrapper>
    </Container>
  )
}

export default Projects;