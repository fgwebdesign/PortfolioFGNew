import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: {
          "homeLink": "Home",
          "skillsLink": "Skills",
          "portfolioLink": "Portfolio",
          "experienceLink": "Experience",
          "educationLink": "Education",
          "contactLink": "Contact Me",
          "welcome": "WELCOME",
          "bioName": "FG WEB DESIGNS",
          "resumeButton": "Download CV",
          "skillsTitle": "Skills",
          "educationTitle": "Education",
          "educationDescription": "My education has been a self-discovery and growth, I leave you here my most recent certifications and learnings.",
          "experienceTitle": "Experience",
          "experienceDescription": "Here is my journey working in various companies and projects.",
          "contactTitle": "Let's talk about future projects..",
          "faqsTitle": "FAQS (Frequently Asked Questions)",
          "faqsDescription": "FAQS (Frequently Asked Questions)",
          "contactDescription": "I am here to help you, feel free to send me any questions or proposals.",
          "contactMail": "Send me an email! 🚀📧",
          "contactMailTwo": "Your email",
          "contactName": "Your Full Name",
          "contactSubject": "Subject",
          "contactMessage": "Message",
          "contactSend": "Send Message",
          "clientsTitle": "Customers",
          "clientsDescription": "These are some of the clients who have trusted me to carry out their projects.",
          "clientsText": "Would you like to share your idea with me?",
          "faqsText": "Do you have another question?",
          "clientsButton": "Get in touch with me",
          "portfolioTitle": "Portfolio",
          "portfolioDescription": "I have worked on a wide range of web projects. These are some of my projects.",
          "skillsDescription": "Here are some of the skills and tools I have been working with over the past few years."
        }
      },
      es: {
        translation: {
          "homeLink": "Inicio",
          "skillsLink": "Habilidades",
          "portfolioLink": "Portafolio",
          "experienceLink": "Experiencia",
          "educationLink": "Educación",
          "contactLink": "Contacto",
          "welcome": "BIENVENIDO",
          "bioName": "FG WEB DESIGNS",
          "resumeButton": "Descargar CV",
          "skillsTitle": "Habilidades",
          "educationTitle": "Educación",
          "educationDescription": "Mi educación ha sido un autodescubrimiento y crecimiento, les dejo aqui mis certificaciones y aprendizajes más recientes.",
          "experienceTitle": "Experiencia",
          "experienceDescription": "Aquí está mi recorrido trabajando en diversas empresas y proyectos.",
          "contactTitle": "Hablemos de futuros proyectos..",
          "faqsTitle": "FAQS (Preguntas Frecuentes)",
          "faqsDescription": "FAQS (Frequently Asked Questions)",
          "faqsText": "¿Tienes alguna otra pregunta?",
          "contactDescription": "Estoy aquí para ayudarte, sientete libre en enviarme alguna consulta o propuesta.",
          "contactMail": "¡Envíame un e-mail! 🚀📧",
          "contactMailTwo": "Tu correo electrónico",
          "contactName": "Tu nombre completo",
          "contactSubject": "Asunto",
          "contactMessage": "Mensaje",
          "contactSend": "Enviar Mensaje",
          "clientsTitle": "Clientes",
          "clientsDescription": "Estos son algunos de los clientes que han confiado en mi para llevar a cabo sus proyectos.",
          "clientsText": "¿Te gustaría compartir tu idea conmigo?",
          "clientsButton": "Ponte en contacto",
          "portfolioTitle": "Portafolio",
          "portfolioDescription": "He trabajado en una amplia gama de proyectos web. Estos son algunos de mis proyectos.",
          "skillsDescription": "Estas son algunas de mis habilidades y herramientas con las que he estado trabajando y utilizando durante los últimos años."
        }
      }
    },
    lng: "es",
    fallbackLng: "en",
    interpolation: { escapeValue: false }
  });
