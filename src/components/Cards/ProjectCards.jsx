import React, { useRef } from 'react'
import styled from 'styled-components'
import { motion, useScroll } from 'framer-motion'
import { useParallax } from '../../hooks/useParallax'

const ProjectContainer = styled.section`
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    padding: 20px;
    scroll-snap-align: start;
    margin-top: 40px;
`

const CardWrapper = styled.div`
    width: 100%;
    max-width: 1000px;
    display: flex;
    flex-direction: column;
    gap: 24px;
`

const Card = styled(motion.div)`
    width: 100%;
    position: relative;
`

const ImageContainer = styled.div`
    width: 100%;
    position: relative;
    border-radius: 20px;
    overflow: hidden;
    aspect-ratio: 16/9;
    cursor: default;
`

const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: contain;
    background-color: ${({ theme }) => theme.card};
    transition: transform 0.3s ease;
    
    ${ImageContainer}:hover & {
        transform: scale(1.05);
    }
`

const ContentContainer = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: 1fr auto;
    align-items: flex-start;
    gap: 24px;
    padding: 20px 0;
`

const TextContent = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
    max-width: 70%;
    
    @media (max-width: 768px) {
        max-width: 100%;
    }
`

const ProjectNumber = styled(motion.h2)`
    color: white;
    font-family: 'JetBrains Mono', monospace;
    font-size: 100px;
    font-weight: 700;
    opacity: 0.5;
    margin: 0;
    line-height: 1;
    text-align: right;
`

const Title = styled(motion.h3)`
    font-family: 'JetBrains Mono', monospace;
    font-size: 32px;
    font-weight: 700;
    color: ${({ theme }) => theme.text_primary};
    margin: 0;
    line-height: 1.4;
    text-transform: uppercase;
`

const Description = styled.p`
    font-size: 18px;
    color: ${({ theme }) => theme.text_secondary};
    margin: 0;
    max-width: 600px;
`

const ProjectCards = ({project, index}) => {
    const ref = useRef(null)
    const { scrollYProgress } = useScroll({ target: ref })
    const y = useParallax(scrollYProgress, 300)
    const yTitle = useParallax(scrollYProgress, -300)

    return (
        <ProjectContainer>
            <CardWrapper ref={ref}>
                <Card
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                >
                    <ImageContainer>
                        <Image src={project.image} alt={project.title} />
                    </ImageContainer>
                    <ContentContainer>
                        <TextContent>
                            <Title style={{ y: yTitle }}>{project.title}</Title>
                            <Description>{project.description}</Description>
                        </TextContent>
                        <ProjectNumber
                            style={{ y }}
                        >{`#${(index + 1).toString().padStart(3, '0')}`}</ProjectNumber>
                    </ContentContainer>
                </Card>
            </CardWrapper>
        </ProjectContainer>
    )
}

export default ProjectCards