import React from 'react'
import { Nav, NavLink, NavbarContainer, Span, NavLogo, NavItems, GitHubButton, ButtonContainer, MobileIcon, MobileMenu, MobileNavLogo, MobileLink } from './NavbarStyledComponent'
import { FaBars } from 'react-icons/fa';
import { Bio } from '../../data/constants';
import { Close, CloseRounded } from '@mui/icons-material';
import { useTheme } from 'styled-components';
import { FaLinkedin } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const theme = useTheme()
  return (
    <Nav>
      <NavbarContainer>
        <NavLogo to='/'>
          <a style={{ display: "flex", alignItems: "center", color: "white", marginBottom: '20;', cursor: 'pointer' }}>
           <Span>FG WEB DESIGNS</Span>
          </a>
        </NavLogo>
        <MobileIcon>
          <FaBars onClick={() => {
            setIsOpen(!isOpen)
          }} />
        </MobileIcon>
        <NavItems>
          <NavLink href="#about">Inicio</NavLink>
          <NavLink href='#skills'>Habilidades</NavLink>
          <NavLink href='#experience'>Experiencia</NavLink>
          <NavLink href='#projects'>Portafolio</NavLink>
          <NavLink href='#education'>Resumen</NavLink>
        </NavItems>
        <ButtonContainer>
        <GitHubButton href={Bio.linkedin} target="_blank">
        <FaLinkedin style={{ marginRight: '8px' }} /> LINKEDIN
        </GitHubButton>
        </ButtonContainer>
        {
          isOpen &&
          <MobileMenu isOpen={isOpen}>
            <MobileLink href="#about" onClick={() => {
              setIsOpen(!isOpen)
            }}>Inicio</MobileLink>
            <MobileLink href='#skills' onClick={() => {
              setIsOpen(!isOpen)
            }}>Habilidades</MobileLink>
            <MobileLink href='#experience' onClick={() => {
              setIsOpen(!isOpen)
            }}>Experiencia</MobileLink>
            <MobileLink href='#projects' onClick={() => {
              setIsOpen(!isOpen)
            }}>Portafolio</MobileLink>
            <MobileLink href='#education' onClick={() => {
              setIsOpen(!isOpen)
            }}>Resumen</MobileLink>
          <GitHubButton style={{padding: '10px 16px', background: `${theme.primary}`, color: 'white', width: 'max-content'}} href={Bio.linkedin} target="_blank">
          <FaLinkedin style={{ marginRight: '8px', verticalAlign: 'middle' }} /> LINKEDIN
          </GitHubButton>
          </MobileMenu>
        }
      </NavbarContainer>
    </Nav>
  )
}

export default Navbar