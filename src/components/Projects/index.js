import { useState, useMemo } from 'react'
import { useTranslation } from 'react-i18next';
import { Container, Wrapper, Title, Desc, CardContainer, FilterContainer, FilterGroup, FilterButton, LoadMoreButton, AnimatedImage, AdditionalAnimatedImage } from './ProjectsStyle'
import ProjectCard from '../Cards/ProjectCards'
import { projects } from '../../data/constants'
import { useSpring } from '@react-spring/web';
import { useInView } from 'react-intersection-observer';
import portfolioImage from '../../images/portfolio3.png';
import additionalImage from '../../images/portfolio1.png';

const CARDS_PER_PAGE = 6;

const Projects = ({ openModal, setOpenModal }) => {
  const { t } = useTranslation();
  const [categoryFilter, setCategoryFilter] = useState('all');
  const [visibleCards, setVisibleCards] = useState(CARDS_PER_PAGE);
  
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

  const filteredProjects = useMemo(() => {
    return projects.filter(project => {
      return categoryFilter === 'all' || project.category.toLowerCase() === categoryFilter.toLowerCase();
    });
  }, [categoryFilter]);

  const handleFilterChange = (category) => {
    setCategoryFilter(category);
    setVisibleCards(CARDS_PER_PAGE);
  };

  const handleLoadMore = () => {
    setVisibleCards(prev => prev + CARDS_PER_PAGE);
  };

  return (
    <Container id="projects">
      <Wrapper>
        <Title ref={titleRef}>{t('portfolioTitle')}</Title>
        <AdditionalAnimatedImage 
          ref={additionalRef} 
          style={additionalImageProps} 
          src={additionalImage} 
          alt="Additional" 
        />
        <AnimatedImage 
          style={portfolioImageProps} 
          src={portfolioImage} 
          alt="Portafolio" 
        />
        <Desc>
          {t('portfolioDescription')}
        </Desc>
        <FilterContainer>
          <FilterGroup>
            <FilterButton 
              active={categoryFilter === 'all'} 
              onClick={() => handleFilterChange('all')}
            >
              {t('allCategories')}
            </FilterButton>
            <FilterButton 
              active={categoryFilter === 'landing page'} 
              onClick={() => handleFilterChange('landing page')}
            >
              {t('category_landing_page')}
            </FilterButton>
            <FilterButton 
              active={categoryFilter === 'e-commerce'} 
              onClick={() => handleFilterChange('e-commerce')}
            >
              {t('category_e-commerce')}
            </FilterButton>
            <FilterButton 
              active={categoryFilter === 'web catalogue'} 
              onClick={() => handleFilterChange('web catalogue')}
            >
              {t('category_web_catalogue')}
            </FilterButton>
          </FilterGroup>
        </FilterContainer>
        <CardContainer>
          {filteredProjects
            .slice(0, visibleCards)
            .map((project) => (
              <ProjectCard 
                key={project.id} 
                project={project} 
                openModal={openModal} 
                setOpenModal={setOpenModal} 
              />
            ))}
        </CardContainer>
        {visibleCards < filteredProjects.length && (
          <LoadMoreButton onClick={handleLoadMore}>
            {t('loadMore')}
          </LoadMoreButton>
        )}
      </Wrapper>
    </Container>
  )
}

export default Projects