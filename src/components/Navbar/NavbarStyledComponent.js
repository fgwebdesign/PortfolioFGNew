import { HashLink as Link } from 'react-router-hash-link';
import styled, { keyframes } from 'styled-components';
import { animated } from '@react-spring/web';

const floatAnimation = keyframes`
  0%, 100% {
    transform: translateY(4px);
  }
  50% {
    transform: translateY(-2px);
  }
`;

export const Nav = styled.nav`
  background: ${({ theme }) => theme.card_light};
  height: 80px;
  width: 100%;
  position: sticky;
  top: 0;
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 0 24px;
  max-width: 1200px;
`;

export const NavLogo = styled(Link)`
    width: 90%;    
    padding: 0 6px;
    display: flex;
    justify-content: start;
    align-items: center;
    text-decoration: none;
    animation: ${floatAnimation} 3s ease-in-out infinite;
    @media (max-width: 640px) {
        padding: 0 0px;
    }
`;

export const LogoImage = styled.img`
    height: 60px;
    padding: 5px;
    animation: ${floatAnimation} 3s ease-in-out infinite;
`;


export const Span = styled.div`
    padding: 0 4px;
    font-weight: bold;
    font-size: 18px;
`;
export const NavItems = styled.ul`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content:center;
    gap: 32px;
    padding: 0 6px;
    list-style: none;

    @media screen and (max-width: 768px) {
      display: none;
    }
`;

export const NavLink = styled(Link)`
  padding: 10px;
  width: 100%;
  text-align: center;
  color: white;
  text-decoration: none;
  font-size: 2.5rem;
  font-weight: 500;
  text-transform: uppercase;
  &:hover {
    color: orange;
  }
  @media (max-width: 1024px) { 
    font-size: 2.0rem; 
  }
`;


export const GitHubButton = styled.a`
  border: 1.8px solid ${({ theme }) => theme.primary};
  justify-content: center;
  display: flex;
  align-items: center;
  height: 70%;
  border-radius: 20px;
  color: ${({ theme }) => theme.primary};
  cursor: pointer;
  padding: 0 20px;
  font-weight: 500;
  text-decoration: none;
  font-size: 16px;
  transition: all 0.6s ease-in-out;
    :hover {
      background: ${({ theme }) => theme.primary};
      color: ${({ theme }) => theme.white};     
    }
    @media screen and (max-width: 768px) { 
    font-size: 14px;
    }
`;

export const ButtonContainer = styled.div`
  width: 80%;  
  height: 100%;
  display: flex;
  justify-content: end;
  align-items: center;
  padding: 0 6px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavMenu = styled(animated.div)`
  position: fixed;
  top: 80px;
  left: 0;
  right: 0;
  background: ${({ theme }) => theme.card_light};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transform-origin: top;
  overflow: hidden;
  height: calc(100vh - 80px); 
  z-index: 10;
  will-change: transform, opacity; 
`;

export const MobileIcon = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  font-size: 1.8rem;
  color: ${({ theme }) => theme.text_primary};
`;

export const MenuLabel = styled.span`
  margin-left: 8px;
  font-weight: 600;
  text-transform: uppercase; 
  font-size: 1.8rem;
  display: flex;
  align-items: center;

`;

export const MobileMenu = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 16px;
    position: absolute;
    top: 80px;
    right: 0;
    width: 100%;
    padding: 12px 40px 24px 40px;
    background: ${({ theme }) => theme.card_light+99};
    transition: all 0.6s ease-in-out;
    transform: ${({ isOpen }) => (isOpen ? 'translateY(0)' : 'translateY(-100%)')};
    border-radius: 0 0 20px 20px;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
    opacity: ${({ isOpen }) => (isOpen ? '100%' : '0')};
    z-index: ${({ isOpen }) => (isOpen ? '1000' : '-1000')};

`;

export const MobileMenuItems = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 32px;
  list-style: none;
  width: 100%;
  height: 100%;
  
`;

export const MobileMenuLink = styled(Link)`
  color: ${({ theme }) => theme.text_primary};
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  text-transform: uppercase;
  :hover {
    color: ${({ theme }) => theme.primary};
  }

  &.active {
    border-bottom: 2px solid ${({ theme }) => theme.primary};
  }
`;

export const MobileMenuButton = styled.a`
  border: 1.8px solid ${({ theme }) => theme.primary};
  justify-content: center;
  display: flex;
  align-items: center;
  height: 70%;
  border-radius: 20px;
  color: ${({ theme }) => theme.primary};
  cursor: pointer;
  padding: 0 20px;
  font-weight: 700;
  text-decoration: none;
  font-size: 16px;
  transition: all 0.6s ease-in-out;

  :hover {
    background: ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.white};
  }
`;

export  const MobileLink = styled.a`
  color: ${({ theme }) => theme.text_primary};
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  :hover {
    color: ${({ theme }) => theme.primary};
  }

  &.active {
    color: ${({ theme }) => theme.text_secondary};
  }
`;

export const MobileNavLogo = styled(Link)`
  width: 80%;
  padding: 0 6px;
  display: flex;
  justify-content: start;
  align-items: center;
  text-decoration: none;
  @media (max-width: 640px) {
    padding: 0 0px;
  }
`;