import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import { Nav, NavbarContainer, MobileIcon, NavMenu, NavLink, MenuLabel } from './NavbarStyledComponent';
import { FaBars } from 'react-icons/fa';
import { useSpring, animated } from '@react-spring/web';
import logoImage from '../../images/logofgoriginal.png';
import handImage from '../../images/hand.png';
import personImage from '../../images/person1.png';
import Switch from "react-switch";
import flagES from '../../images/logospain.png';
import flagUS from '../../images/logousa.png';


const LanguageToggleContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const FlagIcon = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  font-size: 24px;
  &:hover {
    opacity: 0.7;
  }
`;

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
  const { t } = useTranslation();

  const { i18n } = useTranslation();

  const [isEnglish, setIsEnglish] = useState(i18n.language.startsWith('en'));

  const handleLanguageSwitch = (checked) => {
    setIsEnglish(checked);
    const language = checked ? 'en' : 'es';
    i18n.changeLanguage(language);
  };

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
        <LanguageToggleContainer>
          <FlagIcon onClick={() => i18n.changeLanguage('es')}>
            <img src={flagES} alt="Español" style={{ width: '30px', marginRight: '3px' }} />
            <span style={{ margin: '0 5px', fontSize: '18px', color: 'white', fontWeight: '500' }}>ES</span>
          </FlagIcon>
          <Switch
            onChange={handleLanguageSwitch}
            checked={isEnglish}
            onColor="#006400"
            offColor="#D32F2F"
            checkedIcon={false}
            uncheckedIcon={false}
            handleDiameter={20}
            boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
            activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
            height={20}
            width={40}
          />
          <FlagIcon onClick={() => i18n.changeLanguage('en')}>
            <span style={{ margin: '0 5px', fontSize: '18px', color: 'white', fontWeight: '500' }}>US</span>
            <img src={flagUS} alt="English" style={{ width: '30px', marginLeft: '3px' }} />

          </FlagIcon>

        </LanguageToggleContainer>
      </NavbarContainer>
      <NavMenu style={menuAnimation}>
        <AnimatedLogo style={logoAnimation} src={handImage} alt="Sidebar Logo" />
        <AnimatedLogoRight style={logoAnimationRight} src={personImage} alt="Sidebar Logo" />
        <Logo src={logoImage} alt="Logo" />
        <NavLink smooth to="/#about" onClick={() => setIsOpen(false)}>{t('homeLink')}</NavLink>
        <NavLink smooth to="/#services" onClick={() => setIsOpen(false)}>{t('servicesLink')}</NavLink>
        <NavLink smooth to="/#skills" onClick={() => setIsOpen(false)}>{t('skillsLink')}</NavLink>
        <NavLink smooth to="/#projects" onClick={() => setIsOpen(false)}>{t('portfolioLink')}</NavLink>
        <NavLink smooth to="/#experience" onClick={() => setIsOpen(false)}>{t('experienceLink')}</NavLink>
        <NavLink smooth to="/#education" onClick={() => setIsOpen(false)}>{t('educationLink')}</NavLink>
        <NavLink smooth to="/#contact" onClick={() => setIsOpen(false)}>{t('contactLink')}</NavLink>
      </NavMenu>
    </Nav>
  );
};

export default Navbar;
