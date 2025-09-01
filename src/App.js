import './App.css';
import { ThemeProvider } from 'styled-components';
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Analytics } from '@vercel/analytics/react';
import { darkTheme, lightTheme } from './utils/Themes.js';
import Navbar from './components/Navbar';
import Hero from './components/HeroSection';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Experience from './components/Experience';
import Education from './components/Education';
import ProjectDetails from './pages/ProjectDetails';
import Services from './components/Services';
import ProcessSection from './components/ProcessSection';
import About from './components/About';
import WhatsAppButton from './components/WhatsAppButton/WhatsAppButton';
import styled from 'styled-components';

const Body = styled.div`
  background-color: ${({ theme }) => theme.bg};
  width: 100%;
  overflow-x: hidden;
`;

const Wrapper = styled.div`
  background: linear-gradient(38.73deg, rgba(204, 0, 187, 0.15) 0%, rgba(201, 32, 184, 0) 50%), linear-gradient(141.27deg, rgba(0, 70, 209, 0) 50%, rgba(0, 70, 209, 0.15) 100%);
  width: 100%;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 30% 98%, 0 100%);
`;

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [openModal, setOpenModal] = useState({ state: false, project: null });

  return (
    <Router>
      <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
        <Analytics />
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
        <WhatsAppButton />
        <Body>
          <Routes>
            <Route path="/" element={
              <>
                <Hero />
                <Services />
                <ProcessSection />
                <Projects />
                <About />
                <Skills />
                <Experience />          
                <Education />
                <Contact />
              </>
            } />
            <Route path="/project/:id" element={<ProjectDetails />} />
          </Routes>
        </Body>
      </ThemeProvider>
    </Router>
  );
}

export default App;
