import { useState } from 'react';
import { Nav, NavbarContainer, MobileIcon, NavMenu, NavLink, MenuLabel } from './NavbarStyledComponent';
import { FaBars } from 'react-icons/fa';
import { useSpring } from '@react-spring/web';


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuAnimation = useSpring({
    transform: isOpen ? 'scaleY(1)' : 'scaleY(0)',
    opacity: isOpen ? 1 : 0,
    from: { transform: 'scaleY(0)', opacity: 0 },
    config: { tension: 140, friction: 25 }
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
        <NavLink smooth to="/#home" onClick={() => setIsOpen(false)}>Inicio</NavLink>
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
