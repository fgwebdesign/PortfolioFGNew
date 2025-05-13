import { useState, useMemo } from 'react'
import { useTranslation } from 'react-i18next';
import { Container, Wrapper, Title, Desc, CardContainer, FilterContainer, FilterGroup, FilterButton, YearSelect, FilterDivider, LoadMoreButton, AnimatedImage, AdditionalAnimatedImage } from './ProjectsStyle'
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
  const [yearFilter, setYearFilter] = useState('all');
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

  // Get unique years from projects
  const availableYears = useMemo(() => {
    const years = [...new Set(projects.map(project => project.date))];
    return years.sort((a, b) => b - a); // Sort years in descending order
  }, []);

  const filteredProjects = useMemo(() => {
    return projects.filter(project => {
      const matchesCategory = categoryFilter === 'all' || project.category.toLowerCase() === categoryFilter.toLowerCase();
      const matchesYear = yearFilter === 'all' || project.date === parseInt(yearFilter);
      return matchesCategory && matchesYear;
    });
  }, [categoryFilter, yearFilter]);

  const handleFilterChange = (category) => {
    setCategoryFilter(category);
    setVisibleCards(CARDS_PER_PAGE);
  };

  const handleYearChange = (event) => {
    setYearFilter(event.target.value);
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
              Todos
            </FilterButton>
            <FilterDivider />
            <FilterButton 
              active={categoryFilter === 'landing page'} 
              onClick={() => handleFilterChange('landing page')}
            >
              LANDING PAGES
            </FilterButton>
            <FilterDivider />
            <FilterButton 
              active={categoryFilter === 'e-commerce'} 
              onClick={() => handleFilterChange('e-commerce')}
            >
              E-COMMERCE
            </FilterButton>
            <FilterDivider />
            <FilterButton 
              active={categoryFilter === 'web catalogue'} 
              onClick={() => handleFilterChange('web catalogue')}
            >
              WEB CATALOGUE
            </FilterButton>
          </FilterGroup>
          <YearSelect value={yearFilter} onChange={handleYearChange}>
            <option value="all">Todos los años</option>
            {availableYears.map(year => (
              <option key={year} value={year}>{year}</option>
            ))}
          </YearSelect>
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
            Cargar más proyectos
          </LoadMoreButton>
        )}
      </Wrapper>
    </Container>
  )
}

export default Projects