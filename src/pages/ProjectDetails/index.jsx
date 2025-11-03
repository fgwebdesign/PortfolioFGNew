import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { projects } from '../../data/constants';
import { FaCode, FaArrowLeft, FaChevronLeft, FaChevronRight, FaExternalLinkAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

// Importar las imágenes adicionales
import casab1 from '../../images/clients/casab1.png';
import casab2 from '../../images/clients/casab2.png';
import suen2 from '../../images/clients/suen2.png';
import suen3 from '../../images/clients/suen3.png';
import dem2 from '../../images/clients/dem2.png';
import dem3 from '../../images/clients/dem3.png';
import harmony2 from '../../images/clients/harmony2.png';
import harmony3 from '../../images/clients/harmony3.png';
import schpsy1 from '../../images/clients/schpsy1.png';
import schpsy2 from '../../images/clients/schpsy2.png';
import estudiocb2 from '../../images/clients/estudiocb2.png';
import estudiocb3 from '../../images/clients/estudiocb3.png';
import dracostore1 from '../../images/clients/dracostore1.png';
import dracostore2 from '../../images/clients/dracostore2.png';
import cebala2 from '../../images/clients/cebala2.png';
import cebala3 from '../../images/clients/cebala3.png';

// Mapeo de proyectos a sus imágenes adicionales
const projectImages = {
    'Estudio Casa Brava': [estudiocb2, estudiocb3],
    'Casa Brava E-Commerce': [casab1, casab2],
    'SUEN Uruguay': [suen2, suen3],
    'Demicheri Fitness': [dem2, dem3],
    'Harmony By Carola': [harmony2, harmony3],
    'Schweizer Psychology': [schpsy1, schpsy2],
    'Draco Store E-Commerce': [dracostore1, dracostore2],
    'Cebala E-Commerce': [cebala2, cebala3],
};

const Container = styled.div`
    width: 100%;
    height: 100vh;
    background: ${({ theme }) => theme.bg};
    display: flex;
    overflow: hidden;
    position: relative;

    @media (max-width: 1024px) {
        flex-direction: column;
        height: auto;
        overflow: visible;
    }
`;

const ImagesColumn = styled.div`
    flex: 1;
    height: 100vh;
    overflow-y: auto;
    scroll-snap-type: y mandatory;
    background: ${({ theme }) => theme.bg};
    position: relative;

    &::-webkit-scrollbar {
        display: none;
    }

    @media (max-width: 1024px) {
        height: 60vh;
        overflow-y: hidden;
        overflow-x: auto;
        scroll-snap-type: x mandatory;
        display: flex;
        width: 100%;
        scroll-behavior: smooth;
        -webkit-overflow-scrolling: touch;
    }
`;

const ImageWrapper = styled.div`
    height: 100vh;
    width: 100%;
    scroll-snap-align: start;
    position: relative;
    
    @media (max-width: 1024px) {
        height: 60vh;
        min-width: 100%;
        flex-shrink: 0;
    }
`;

const ProjectImage = styled(motion.img)`
    width: 100%;
    height: 100%;
    object-fit: cover;
`;

const ImagePagination = styled.div`
    display: none;
    
    @media (max-width: 1024px) {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 8px;
        padding: 16px;
        background: ${({ theme }) => theme.bg};
    }
`;

const PaginationDot = styled.button`
    width: 8px;
    height: 8px;
    border-radius: 50%;
    border: none;
    background: ${({ active, theme }) => active ? theme.primary : theme.text_secondary + '40'};
    padding: 0;
    cursor: pointer;
    transition: all 0.3s ease;
    
    &:hover {
        background: ${({ theme }) => theme.primary + '80'};
    }
`;

const InfoColumn = styled.div`
    width: 45%;
    height: 100vh;
    padding: 60px;
    overflow-y: auto;
    background: ${({ theme }) => theme.bg};
    border-left: 1px solid ${({ theme }) => theme.card + 20};
    position: relative;
    display: flex;
    flex-direction: column;

    &::-webkit-scrollbar {
        display: none;
    }

    @media (max-width: 1024px) {
        width: 100%;
        height: auto;
        border-left: none;
        padding: 40px 20px;
    }
`;

const ProjectNumber = styled.div`
    font-size: 14px;
    color: ${({ theme }) => theme.text_secondary};
    margin-bottom: 8px;
    display: flex;
    align-items: center;
    gap: 8px;

    &::after {
        content: '';
        width: 40px;
        height: 1px;
        background: ${({ theme }) => theme.text_secondary};
        display: inline-block;
    }
`;

const ProjectCategory = styled.div`
    text-transform: uppercase;
    color: ${({ theme }) => theme.text_secondary};
    font-size: 14px;
    letter-spacing: 2px;
    margin-bottom: 20px;
`;

const Title = styled(motion.h1)`
    font-size: 48px;
    font-weight: 700;
    margin-bottom: 30px;
    color: ${({ theme }) => theme.text_primary};
    
    @media (max-width: 768px) {
        font-size: 36px;
    }
`;

const InfoGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 30px;
    margin-bottom: 40px;
`;

const InfoItem = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
`;

const InfoLabel = styled.span`
    font-size: 12px;
    text-transform: uppercase;
    letter-spacing: 1px;
    color: ${({ theme }) => theme.text_secondary};
`;

const InfoValue = styled.span`
    font-size: 16px;
    color: ${({ theme }) => theme.text_primary};
    font-weight: 500;
`;

const TechSection = styled(motion.div)`
    margin: 40px 0;
`;

const TechTitle = styled.h3`
    font-size: 20px;
    color: ${({ theme }) => theme.text_primary};
    margin-bottom: 20px;
    display: flex;
    align-items: center;
    gap: 12px;
    
    svg {
        color: ${({ theme }) => theme.primary};
    }
`;

const Tags = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
`;

const Tag = styled(motion.span)`
    font-size: 14px;
    font-weight: 500;
    color: ${({ theme }) => theme.primary};
    background: ${({ theme }) => theme.primary + 15};
    padding: 8px 16px;
    border-radius: 100px;
    
    &:hover {
        background: ${({ theme }) => theme.primary};
        color: ${({ theme }) => theme.white};
    }
`;

const Navigation = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 40px;
    margin-top: 60px;
    border-top: 1px solid ${({ theme }) => theme.card + 20};
    position: relative;

    @media (min-width: 1025px) {
        margin-top: auto;
        padding-top: 0;
        border-top: none;
        position: absolute;
        bottom: 120px;
        left: 0;
        right: 0;
        padding: 0 60px;
    }

    @media (max-width: 1024px) {
        margin-top: auto;
        padding: 20px 0;
    }
`;

const NavButton = styled.button`
    display: flex;
    align-items: center;
    gap: 8px;
    background: none;
    border: none;
    color: ${({ theme }) => theme.text_primary};
    font-size: 16px;
    cursor: pointer;
    padding: 8px;
    transition: all 0.3s ease;
    
    &:hover {
        color: ${({ theme }) => theme.primary};
        transform: translateX(${props => props.direction === 'next' ? '5px' : '-5px'});
    }
    
    &:disabled {
        color: ${({ theme }) => theme.text_secondary};
        cursor: not-allowed;
        &:hover {
            transform: none;
        }
    }

    @media (min-width: 1025px) {
        font-size: 18px;
        padding: 12px;
        background: ${({ theme }) => theme.card + '80'};
        backdrop-filter: blur(5px);
        border-radius: 100px;
        padding: 12px 24px;

        &:hover {
            background: ${({ theme }) => theme.card};
        }
    }
`;

const BackButton = styled(motion.button)`
    position: fixed;
    top: 20px;
    left: 20px;
    z-index: 10;
    display: flex;
    align-items: center;
    gap: 8px;
    background: ${({ theme }) => `${theme.card}80`};
    border: none;
    color: ${({ theme }) => theme.text_primary};
    padding: 12px 20px;
    border-radius: 100px;
    font-size: 16px;
    font-weight: 500;
    cursor: pointer;
    backdrop-filter: blur(5px);
    transition: all 0.3s ease;
    
    &:hover {
        background: ${({ theme }) => theme.card};
        transform: translateY(-2px);
    }

    @media (max-width: 1024px) {
        position: absolute;
        top: 16px;
        left: 16px;
        padding: 10px 16px;
        font-size: 14px;
        background: ${({ theme }) => theme.primary};
        color: ${({ theme }) => theme.white};
        
        &:hover {
            background: ${({ theme }) => theme.primary};
            transform: none;
        }

        svg {
            font-size: 14px;
        }
    }

    @media (max-width: 768px) {
        top: 12px;
        left: 12px;
        padding: 8px 12px;
    }
`;

const ScrollIndicator = styled(motion.div)`
    position: absolute;
    bottom: 120px;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 12px;
    color: ${({ theme }) => theme.text_primary};
    font-size: 14px;
    z-index: 10;
    background: ${({ theme }) => theme.card + '40'};
    padding: 16px;
    border-radius: 20px;
    backdrop-filter: blur(5px);

    @media (max-width: 1024px) {
        display: none;
    }
`;

const MouseIcon = styled(motion.div)`
    width: 24px;
    height: 40px;
    border: 2px solid ${({ theme }) => theme.text_primary};
    border-radius: 20px;
    position: relative;

    &::before {
        content: '';
        width: 4px;
        height: 8px;
        background: ${({ theme }) => theme.text_primary};
        position: absolute;
        top: 6px;
        left: 50%;
        transform: translateX(-50%);
        border-radius: 2px;
        animation: scroll 1.5s infinite;
    }

    @keyframes scroll {
        0% { transform: translate(-50%, 0); opacity: 1; }
        100% { transform: translate(-50%, 15px); opacity: 0; }
    }
`;

const ProjectDescription = styled.div`
    margin: 40px 0;
    color: ${({ theme }) => theme.text_secondary};
    font-size: 16px;
    line-height: 1.8;
`;

const ProjectUrl = styled.a`
    display: inline-flex;
    align-items: center;
    gap: 8px;
    color: ${({ theme }) => theme.primary};
    font-size: 16px;
    text-decoration: none;
    margin-top: 20px;
    transition: all 0.3s ease;

    &:hover {
        transform: translateY(-2px);
        
        svg {
            transform: translateX(3px);
        }
    }

    svg {
        transition: transform 0.3s ease;
    }
`;

const ProjectDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [project, setProject] = useState(null);
    const [images, setImages] = useState([]);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const imagesColumnRef = React.useRef(null);
    const { t, i18n } = useTranslation();
    
    useEffect(() => {
        const projectData = projects.find(p => p.id === parseInt(id));
        if (!projectData) {
            navigate('/');
            return;
        }
        setProject(projectData);
        
        const additionalImages = projectImages[projectData.title] || [];
        setImages([projectData.image, ...additionalImages]);
    }, [id, navigate]);

    // Función para manejar el scroll en móviles
    const handleScroll = () => {
        if (imagesColumnRef.current && window.innerWidth <= 1024) {
            const scrollPosition = imagesColumnRef.current.scrollLeft;
            const imageWidth = imagesColumnRef.current.offsetWidth;
            const newIndex = Math.round(scrollPosition / imageWidth);
            setCurrentImageIndex(newIndex);
        }
    };

    // Función para ir a una imagen específica
    const scrollToImage = (index) => {
        if (imagesColumnRef.current) {
            const imageWidth = imagesColumnRef.current.offsetWidth;
            imagesColumnRef.current.scrollTo({
                left: imageWidth * index,
                behavior: 'smooth'
            });
            setCurrentImageIndex(index);
        }
    };

    useEffect(() => {
        const imagesContainer = imagesColumnRef.current;
        if (imagesContainer) {
            imagesContainer.addEventListener('scroll', handleScroll);
            return () => imagesContainer.removeEventListener('scroll', handleScroll);
        }
    }, []);

    const handlePrevProject = () => {
        const currentIndex = projects.findIndex(p => p.id === parseInt(id));
        if (currentIndex > 0) {
            navigate(`/project/${projects[currentIndex - 1].id}`);
        }
    };

    const handleNextProject = () => {
        const currentIndex = projects.findIndex(p => p.id === parseInt(id));
        if (currentIndex < projects.length - 1) {
            navigate(`/project/${projects[currentIndex + 1].id}`);
        }
    };
    
    if (!project) return null;
    
    const currentLanguage = i18n.language.startsWith('en') ? 'en' : 'es';
    const projectDescription = project.description?.[currentLanguage] || project.description;
    const translatedCategory = t(`category_${project.category.replace(' ', '_')}`);

    return (
        <Container>
            <BackButton
                onClick={() => navigate('/')}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3 }}
            >
                <FaArrowLeft /> {t('backToProjects')}
            </BackButton>

            <ImagesColumn ref={imagesColumnRef}>
                {images.map((img, index) => (
                    <ImageWrapper key={index}>
                        <ProjectImage
                            src={img}
                            alt={`${project.title} view ${index + 1}`}
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                        />
                    </ImageWrapper>
                ))}
                <ScrollIndicator
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1 }}
                >
                    <MouseIcon />
                    {t('scrollToSeeMore')}
                </ScrollIndicator>
            </ImagesColumn>

            <ImagePagination>
                {images.map((_, index) => (
                    <PaginationDot
                        key={index}
                        active={currentImageIndex === index}
                        onClick={() => scrollToImage(index)}
                    />
                ))}
            </ImagePagination>

            <InfoColumn>
                <ProjectNumber>{t('projectNumber')} 0{project.id}</ProjectNumber>
                <ProjectCategory>{translatedCategory}</ProjectCategory>
                <Title
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    {project.title}
                </Title>

                <InfoGrid>
                    <InfoItem>
                        <InfoLabel>{t('projectDate')}</InfoLabel>
                        <InfoValue>{project.date}</InfoValue>
                    </InfoItem>
                    <InfoItem>
                        <InfoLabel>{t('projectCategory')}</InfoLabel>
                        <InfoValue>{translatedCategory}</InfoValue>
                    </InfoItem>
                </InfoGrid>

                <ProjectDescription>
                    {projectDescription}
                </ProjectDescription>

                {project.url && (
                    <ProjectUrl href={project.url} target="_blank" rel="noopener noreferrer">
                        {t('visitWebsite')} <FaExternalLinkAlt />
                    </ProjectUrl>
                )}

                <TechSection>
                    <TechTitle>
                        <FaCode />
                        {t('projectTechnologies')}
                    </TechTitle>
                    <Tags>
                        {project.tags.map((tag, index) => (
                            <Tag
                                key={index}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.3, delay: index * 0.1 }}
                            >
                                {tag}
                            </Tag>
                        ))}
                    </Tags>
                </TechSection>

                <Navigation>
                    <NavButton 
                        onClick={handlePrevProject}
                        disabled={project.id === 1}
                        direction="prev"
                    >
                        <FaChevronLeft /> {t('previousProject')}
                    </NavButton>
                    <NavButton 
                        onClick={handleNextProject}
                        disabled={project.id === projects.length}
                        direction="next"
                    >
                        {t('nextProject')} <FaChevronRight />
                    </NavButton>
                </Navigation>
            </InfoColumn>
        </Container>
    );
};

export default ProjectDetails; 