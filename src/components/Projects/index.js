import { useState, useMemo } from 'react'
import { useTranslation } from 'react-i18next';
import { Container, Wrapper, Title, Desc, CardContainer, FilterContainer, FilterGroup, FilterButton, YearSelect, FilterDivider, LoadMoreButton, AnimatedImage, AdditionalAnimatedImage, FloatingInfo, InfoText, HandPointer } from './ProjectsStyle'
import ProjectCard from '../Cards/ProjectCards'
import { projects } from '../../data/constants'
import { useSpring } from '@react-spring/web';
import { useInView } from 'react-intersection-observer';
import portfolioImage from '../../images/portfolio3.png';
import additionalImage from '../../images/portfolio1.png';
import handPointerImage from '../../images/icons/hand2.png';

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

  const floatingInfoProps = useSpring({
    from: { 
      transform: 'translate(50%, -50%) scale(0.9)',
      opacity: 0 
    },
    to: async (next) => {
      while (true) {
        await next({
          transform: 'translate(50%, -50%) scale(1)',
          opacity: 1
        });
        await next({
          transform: 'translate(50%, -50%) scale(0.95)',
          opacity: 0.9
        });
      }
    },
    config: { tension: 100, friction: 10 },
  });

  const handAnimation = useSpring({
    from: { 
      transform: 'rotate(-15deg) translateY(0px)',
    },
    to: async (next) => {
      while (true) {
        await next({
          transform: 'rotate(-15deg) translateY(-10px)',
        });
        await next({
          transform: 'rotate(-15deg) translateY(0px)',
        });
      }
    },
    config: { tension: 120, friction: 14 },
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
        <FloatingInfo style={floatingInfoProps}>
          <InfoText>¡Haz clic en cualquier proyecto para ver más detalles!</InfoText>
          <HandPointer 
            src={handPointerImage}
            alt="Click pointer" 
            style={handAnimation}
          />
        </FloatingInfo>
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
            <FilterDivider />
            <FilterButton 
              active={categoryFilter === 'landing page'} 
              onClick={() => handleFilterChange('landing page')}
            >
              {t('category_landing_page')}
            </FilterButton>
            <FilterDivider />
            <FilterButton 
              active={categoryFilter === 'e-commerce'} 
              onClick={() => handleFilterChange('e-commerce')}
            >
              {t('category_e-commerce')}
            </FilterButton>
            <FilterDivider />
            <FilterButton 
              active={categoryFilter === 'web catalogue'} 
              onClick={() => handleFilterChange('web catalogue')}
            >
              {t('category_web_catalogue')}
            </FilterButton>
          </FilterGroup>
          <YearSelect value={yearFilter} onChange={handleYearChange}>
            <option value="all">{t('allYears')}</option>
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