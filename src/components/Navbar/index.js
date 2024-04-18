import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Nav, NavbarContainer, MobileIcon, NavMenu, NavLink, MenuLabel } from './NavbarStyledComponent';
import { FaBars } from 'react-icons/fa';
import { useSpring, animated } from '@react-spring/web';
import logoImage from '../../images/logofgoriginal.png';
import handImage from '../../images/hand.png';
import personImage from '../../images/person1.png';


const Logo = styled.img`
  height: 120px;  
  width: auto;
  margin-bottom: 15px;
  cursor: pointer;
  @media (max-width: 1024px) {
    height: 18%; 
`;

const AnimatedLogo = styled(animated.img)`
  width: 300px;
  position: absolute;
  left: -10px;
  top: 22%;
  transform: translateY(-50%);
  @media (max-width: 1024px) {
    display : none;
`;

const AnimatedLogoRight = styled(animated.img)`
  width: 250px;
  position: absolute;
  right: -7px;
  top: 34%;
  transform: translateY(-50%);
  @media (max-width: 1024px) {
    display : none;
`;


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'auto';
  }, [isOpen]);

  const menuAnimation = useSpring({
    transform: isOpen ? 'scaleY(1)' : 'scaleY(0)',
    opacity: isOpen ? 1 : 0,
    from: { transform: 'scaleY(0)', opacity: 0 },
    config: { tension: 140, friction: 25 }
  });

  const logoAnimation = useSpring({
    transform: isOpen ? 'translateX(0%)' : 'translateX(-100%)',
    from: { transform: 'translateX(-100%)' },
    config: { tension: 170, friction: 26 }
  });

  const logoAnimationRight = useSpring({
    transform: isOpen ? 'translateX(0%)' : 'translateX(-100%)',
    from: { transform: 'translateX(-100%)' },
    config: { tension: 170, friction: 26 }
  });

  return (
    <Nav>
      <NavbarContainer>
        <MobileIcon onClick={() => setIsOpen(!isOpen)}>
          <FaBars />
          <MenuLabel>Menu</MenuLabel>
        </MobileIcon>
      </NavbarContainer>
      <NavMenu style={menuAnimation}>
      <AnimatedLogo style={logoAnimation} src={handImage} alt="Sidebar Logo" />
      <AnimatedLogoRight style={logoAnimationRight} src={personImage} alt="Sidebar Logo" />
      <Logo src={logoImage} alt="Logo" />
        <NavLink smooth to="/#about" onClick={() => setIsOpen(false)}>Inicio</NavLink>
        <NavLink smooth to="/#skills" onClick={() => setIsOpen(false)}>Habilidades</NavLink>
        <NavLink smooth to="/#projects" onClick={() => setIsOpen(false)}>Portfolio</NavLink>
        <NavLink smooth to="/#experience" onClick={() => setIsOpen(false)}>Experiencia</NavLink>
        <NavLink smooth to="/#education" onClick={() => setIsOpen(false)}>Educacion</NavLink>
        <NavLink smooth to="/#contact" onClick={() => setIsOpen(false)}>Contacto</NavLink>
      </NavMenu>
    </Nav>
  );
};

export default Navbar;
