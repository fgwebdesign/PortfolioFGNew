import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import { useInView } from 'react-intersection-observer';
import { useSpring, animated } from '@react-spring/web';
import { skills } from '../../data/constants';
import toolsRight from '../../images/rocket.png';
import toolsLeft from '../../images/skills.png';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  align-items: center;
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 1100px;
  gap: 12px;
  @media (max-width: 960px) {
      flex-direction: column;
  }
`;

const Title = styled.div`
  font-size: 42px;
  text-align: center;
  font-weight: 600;
  margin-top: 20px;
  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 32px;
  }
`;

const Desc = styled.div`
  font-size: 18px;
  text-align: center;
  max-width: 600px;
  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 768px) {
    font-size: 15px;
    padding: 10px;
  }
`;

const SkillsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  margin-top: 30px;
  gap: 30px;
  justify-content: center;
`;

const Skill = styled.div`
  width: 100%;
  max-width: 500px;
  background: ${({ theme }) => theme.card};
  border: 2px solid rgba(255, 140, 0, 0.3);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5px);
  border-radius: 20px;
  padding: 24px 36px;
  transition: all 0.3s ease-in-out;
  
  &:hover {
    transform: translateY(-5px);
    border-color: #FF8C00;
    box-shadow: 0 8px 30px rgba(255, 140, 0, 0.15);
  }

  @media (max-width: 768px) {
    max-width: 400px;
    padding: 16px 28px;
  }
  @media (max-width: 500px) {
    max-width: 330px;
    padding: 12px 20px;
  }
`;

const SkillTitle = styled.h2`
  font-size: 28px;
  font-weight: 700;
  color: ${({ theme }) => theme.text_primary};
  margin-bottom: 24px;
  text-align: center;
  position: relative;
  
  &:after {
    content: '';
    position: absolute;
    bottom: -8px;
    left: 50%;
    transform: translateX(-50%);
    width: 60px;
    height: 3px;
    background: linear-gradient(to right, #FF8C00, rgba(255, 140, 0, 0.2));
    border-radius: 2px;
  }
`;

const SkillList = styled.div`
  display: flex;
  justify-content: center; 
  flex-wrap: wrap;
  gap: 12px;
  margin-bottom: 20px;
`;

const SkillItem = styled.div`
  font-size: 15px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_primary + 99};
  background: ${({ theme }) => theme.card + 50};
  border: 1px solid rgba(255, 140, 0, 0.2);
  border-radius: 12px;
  padding: 10px 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  transition: all 0.3s ease;
  cursor: default;

  &:hover {
    background: rgba(255, 140, 0, 0.1);
    border-color: rgba(255, 140, 0, 0.5);
    transform: translateY(-2px);
  }

  @media (max-width: 768px) {
    font-size: 14px;
    padding: 8px 12px;
  }
  @media (max-width: 500px) {
    font-size: 13px;
    padding: 6px 12px;
  }
`;

const SkillImage = styled.img`
  width: 24px;
  height: 24px;
  border-radius: 6px;
  transition: transform 0.3s ease;
  
  ${SkillItem}:hover & {
    transform: scale(1.1) rotate(5deg);
  }
`;

const RightImage = styled(animated.img)`
  position: absolute;
  right: 2%;
  width: 160px;
  height: auto;
  bottom: 60%;
  filter: drop-shadow(0px 0px 8px rgba(255, 140, 0, 0.3));
  z-index: 1;
  
  @media (max-width: 1024px) { 
    display: none; 
  }
  @media (min-width: 1024px) { 
    width: 120px;
    right: 5%;
  }
`;

const LeftImage = styled(animated.img)`
  position: absolute;
  left: 2%;
  width: 180px;
  height: auto;
  bottom: 60%;
  filter: drop-shadow(0px 0px 8px rgba(255, 140, 0, 0.3));
  z-index: 1;
  
  @media (max-width: 1024px) { 
    display: none; 
  }
  @media (min-width: 1024px) { 
    width: 160px;
    left: 5%;
  }
`;

const Skills = () => {
  const { t } = useTranslation();
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  const animationProps = useSpring({
    from: { transform: 'translateY(100vh)', opacity: 0 },
    to: {
      transform: inView ? 'translateY(0vh)' : 'translateY(100vh)',
      opacity: inView ? 1 : 0,
    },
    config: { mass: 0.1, tension: 30, friction: 24 }
  });

  return (
    <Container id="skills" ref={ref}>
      <RightImage style={animationProps} src={toolsRight} />
      <LeftImage style={animationProps} src={toolsLeft} />
      <Wrapper>
        <Title>{t('skillsTitle')}</Title>
        <Desc>{t('skillsDescription')}</Desc>
        <SkillsContainer>
          {skills.map((skill, index) => (
            <Skill key={index}>
              <SkillTitle>{t(skill.title)}</SkillTitle>
              <SkillList>
                {skill.skills.map((item, index) => (
                  <SkillItem key={index}>
                    <SkillImage src={item.image} />
                    {item.name}
                  </SkillItem>
                ))}
              </SkillList>
            </Skill>
          ))}
        </SkillsContainer>
      </Wrapper>
    </Container>
  );
}

export default Skills;
