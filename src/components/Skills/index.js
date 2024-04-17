import { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { useInView } from 'react-intersection-observer';
import { useSpring, animated } from '@react-spring/web';
import { skills } from '../../data/constants';
import toolsLeft from '../../images/tools.png';
import toolsRight from '../../images/rocket.png';

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
    font-size: 16px;
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
  border: 0.1px solid #FF8C00;
  box-shadow: rgba(23, 92, 230, 0.15) 0px 4px 24px;
  border-radius: 16px;
  padding: 18px 36px;
  @media (max-width: 768px) {
    max-width: 400px;
    padding: 10px 36px;
  }
  @media (max-width: 500px) {
    max-width: 330px;
    padding: 10px 36px;
  }
`;

const SkillTitle = styled.h2`
  font-size: 28px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary};
  margin-bottom: 20px;
  text-align: center;
`;

const SkillList = styled.div`
  display: flex;
  justify-content: center; 
  flex-wrap: wrap;
  gap: 12px;
  margin-bottom: 20px;
`;

const SkillItem = styled.div`
  font-size: 16px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_primary + 80};
  border: 1px solid ${({ theme }) => theme.text_primary + 80};
  border-radius: 12px;
  padding: 12px 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  @media (max-width: 768px) {
    font-size: 14px;
    padding: 8px 12px;
  }
  @media (max-width: 500px) {
    font-size: 14px;
    padding: 6px 12px;
  }
`;

const SkillImage = styled.img`
  width: 24px;
  height: 24px;
`;

const fadeInSlideIn = keyframes`
  0% {
    transform: translateX(-100%); /* O más, dependiendo de la distancia deseada */
    opacity: 0;
  }
  100% {
    transform: translateX(0%);
    opacity: 1;
  }
`;

const SideImage = styled.img`
  position: absolute;
  top: 30%;
  left: 1%;
  transform: translateY(-50%);
  width: 160px;
  height: auto;
  animation: ${fadeInSlideIn} 4s cubic-bezier(0.23, 1, 0.32, 1) forwards;
  visibility: ${props => props.isVisible ? 'visible' : 'hidden'};
`;



const RightImage = styled(animated.img)`
  position: absolute;
  right: 1%;
  width: 160px;
  height: auto;
  bottom: 10%;
`;

const Skills = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  const [floating, setFloating] = useState(false);

  const rocketProps = useSpring({
    from: { transform: 'translateY(100vh)', opacity: 0 },
    to: {
      transform: inView ? 'translateY(0vh)' : 'translateY(100vh)',
      opacity: inView ? 1 : 0,
    },
    config: { mass: 0.1, tension: 100, friction: 24 },
    onRest: () => {
      if (inView) setFloating(true);
    }
  });

  const floatingProps = useSpring({
    to: [
      { transform: 'translateY(0px)', config: { duration: 1000 } },
      { transform: 'translateY(-20px)', config: { duration: 1000 } }
    ],
    loop: true, 
    from: { transform: 'translateY(0px)' },
    reset: floating 
  });

  return (
    <Container id="skills" ref={ref}>
      <SideImage src={toolsLeft} isVisible={inView} />
      <RightImage style={floating ? floatingProps : rocketProps} src={toolsRight} />
      <Wrapper>
        <Title>Habilidades</Title>
        <Desc>Estas son algunas de mis habilidades y herramientas con las que he estado trabajando y utilizando durante los últimos años.</Desc>
        <SkillsContainer>
          {skills.map((skill) => (
            <Skill key={skill.id}>
              <SkillTitle>{skill.title}</SkillTitle>
              <SkillList>
                {skill.skills.map((item) => (
                  <SkillItem key={item.id}>
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
