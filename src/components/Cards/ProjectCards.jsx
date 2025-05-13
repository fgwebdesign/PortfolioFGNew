import React from 'react'
import styled from 'styled-components'
import { FaCode } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

const Card = styled.div`
    width: 330px;
    height: 520px;
    background-color: ${({ theme }) => theme.card};
    cursor: pointer;
    border-radius: 20px;
    border: 1px solid ${({ theme }) => theme.primary + 20};
    box-shadow: 0 5px 15px rgba(0,0,0,0.2);
    overflow: hidden;
    padding: 0;
    display: flex;
    flex-direction: column;
    gap: 0;
    transition: all 0.3s ease-in-out;
    position: relative;
    
    &:hover {
        transform: translateY(-5px);
        box-shadow: 0 8px 20px rgba(0,0,0,0.3);
        border: 1px solid ${({ theme }) => theme.primary};
    }

    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        height: 200px;
        background: linear-gradient(
            45deg,
            ${({ theme }) => theme.primary + "20"} 0%,
            ${({ theme }) => theme.primary + "40"} 100%
        );
        opacity: 0;
        transition: all 0.3s ease;
    }

    &:hover::before {
        opacity: 1;
    }
`

const ImageContainer = styled.div`
    width: 100%;
    height: 200px;
    overflow: hidden;
    position: relative;
    
    &::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 50%;
        background: linear-gradient(to bottom, transparent, ${({ theme }) => theme.card});
    }
`

const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
    ${Card}:hover & {
        transform: scale(1.1);
    }
`

const Content = styled.div`
    padding: 20px;
    display: flex;
    flex-direction: column;
    gap: 15px;
    flex: 1;
`

const TechSection = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
`

const TechTitle = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 14px;
    font-weight: 500;
    color: ${({ theme }) => theme.text_secondary};
    
    svg {
        font-size: 16px;
        color: ${({ theme }) => theme.primary};
    }
`

const Tags = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 8px;
    margin-top: 4px;
`

const Tag = styled.span`
    font-size: 12px;
    font-weight: 500;
    color: ${({ theme }) => theme.primary};
    background-color: ${({ theme }) => theme.primary + 15};
    padding: 6px 14px;
    border-radius: 20px;
    transition: all 0.3s ease;
    
    &:hover {
        background-color: ${({ theme }) => theme.primary};
        color: ${({ theme }) => theme.white};
    }
`

const Details = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 8px;
    padding: 0;
`

const Title = styled.h3`
    font-size: 24px;
    font-weight: 600;
    color: ${({ theme }) => theme.text_primary};
    margin: 0;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;
    line-height: 1.2;
`

const Date = styled.p`
    font-size: 14px;
    font-weight: 500;
    color: ${({ theme }) => theme.text_secondary + 80};
    margin: 0;
    display: flex;
    align-items: center;
    gap: 8px;

    &::before {
        content: '';
        width: 8px;
        height: 8px;
        border-radius: 50%;
        background: ${({ theme }) => theme.primary};
    }
`

const Description = styled.p`
    font-weight: 400;
    color: ${({ theme }) => theme.text_secondary};
    overflow: hidden;
    margin: 0;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;
    font-size: 15px;
    line-height: 1.5;
`

const Members = styled.div`
    display: flex;
    align-items: center;
    padding-left: 10px;
`
const Avatar = styled.img`
    width: 38px;
    height: 38px;
    border-radius: 50%;
    margin-left: -10px;
    background-color: ${({ theme }) => theme.white};
    box-shadow: 0 0 10px rgba(0,0,0,0.2);
    border: 3px solid ${({ theme }) => theme.card};
`

const ProjectCards = ({project}) => {
    const navigate = useNavigate();
    const { i18n } = useTranslation();

    const handleClick = () => {
        navigate(`/project/${project.id}`);
    };

    const currentLanguage = i18n.language.startsWith('en') ? 'en' : 'es';
    const projectDescription = project.description?.[currentLanguage] || project.description;

    return (
        <Card onClick={handleClick}>
            <ImageContainer>
                <Image src={project.image} alt={project.title}/>
            </ImageContainer>
            <Content>
                <Details>
                    <Title>{project.title}</Title>
                    <Date>{project.date}</Date>
                </Details>
                <Description>{projectDescription}</Description>
                <TechSection>
                    <TechTitle>
                        <FaCode />
                        Tecnologías utilizadas
                    </TechTitle>
                    <Tags>
                        {project.tags?.map((tag, index) => (
                            <Tag key={index}>{tag}</Tag>
                        ))}
                    </Tags>
                </TechSection>
            </Content>
            <Members>
                {project.member?.map((member) => (
                    <Avatar src={member.img}/>
                ))}
            </Members>
        </Card>
    )
}

export default ProjectCards