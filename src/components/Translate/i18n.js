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
          "skillsDescription": "Here are some of the skills and tools I have been working with over the past few years.",
          "contactSuccess": "¡Mensaje enviado correctamente! Me pondré en contacto contigo pronto.",
          "contactError": "Error al enviar el mensaje. Por favor, intenta nuevamente.",
          "experience_fgwebdesigns": "Specialized in managing custom website design and development, including E-Commerce, landings and corporate sites.",
          "experience_practiauruguay": "I am working as a contractor for Practia company, in charge of frontend feature development using technologies such as React Js, Next Js, Tailwind CSS, among others.",
          "experience_ucontactbynet2phone": "Currently working as a Software Quality Assurance Engineer at Ucontact by net2phone, responsible for creating and executing test cases, reporting bugs and areas for improvement. Additionally, I am responsible for test automation and integration of QA tools into the development workflow.",
          "experience_nareiasoftware": "I was part of the QA team for the 'MiDinero' mobile application, specifically in the role of Functional Tester. My responsibilities included identifying and reporting bugs and areas for improvement, developing test cases and user stories, as well as executing regression tests in various development environments.",
          "experience_startqa_1": "Confidential Information - Kotlin Automation Project for a US client.",
          "experience_startqa_2": "Confidential Information - Automation and Manual Project providing services to companies like Okta, Auth0, Azure, in charge of quality control and test case automation in Cypress.",
          "experience_startqa_3": "Confidential Information - Virtual wallet project - expense manager Automation and Manual in Cypress for a US client.",
          "experience_startqa_4": "Confidential Information - Virtual wallet project - expense manager Automation and Manual in Cypress for a US client.",
          "experience_ecommerce": "Front-End Developer for company clients such as: Zapateria TOTO, WATCHME, Carter's, among others. E-commerce site layout designer, in charge of marketing and social media.",
          "experience_cellpay": "Web designer of the company's page, also in charge of marketing and advertising.",
          "role_ceo": "CEO & Web Developer - Owner",
          "role_qa_frontend": "Quality Assurance & Frontend Developer",
          "role_qa_engineer": "Software Quality Assurance Engineer",
          "role_functional_tester": "Mid Functional Tester",
          "role_qa_automation": "Quality Assurance Automation",
          "role_qa_automation_manual": "Quality Assurance Automation / Manual",
          "role_qa_manual": "Quality Assurance Manual",
          "company_fgweb": "FG WEB DESIGNS",
          "company_practia": "Practia Uruguay",
          "company_ucontact": "Ucontact by net2phone",
          "company_nareia": "NAREIA SOFTWARE",
          "experience_ecommercefull": "Front-End Developer for company clients such as: TOTO Shoes, WATCHME, Carter's, among others. E-commerce site layout designer, in charge of marketing and social media.",
          "role_frontend_developer": "Frontend Developer",
          "company_ecommerce": "E-Commerce Full",
          "experience_cellpaydirectvagente": "Web designer of the company's page, also in charge of marketing and advertising.",
          "role_web_designer": "Web Designer / Marketing",
          "company_cellpay": "CellPay - DIRECTV OFFICIAL AGENT",
          "company_startqa": "Start QA",
          "footerHome": "Home",
          "footerSkills": "Skills",
          "footerExperience": "Experience",
          "footerPortfolio": "Portfolio",
          "footerResume": "Resume",
          "footerRights": "All rights reserved.",
          "skillsFrontend": "Frontend Development",
          "skillsBackend": "Quality Assurance",
          "skillsTools": "Tools",
          "skillsQA": "Quality Assurance",
          "skillsLanguages": "Languages",
          "skillsFrameworks": "Frameworks",
          "skillsOthers": "Others",
          "skillsDesign": "Design",
          "skillsDatabase": "Database",
          "backToProjects": "Back to projects",
          "projectNumber": "Project",
          "projectDate": "Date",
          "projectCategory": "Category",
          "projectTechnologies": "Technologies used",
          "visitWebsite": "Visit website",
          "previousProject": "Previous",
          "nextProject": "Next",
          "scrollToSeeMore": "Scroll to see more",
          "category_e-commerce": "E-commerce",
          "category_landing_page": "Landing Page",
          "category_web_catalogue": "Web Catalogue",
          "allCategories": "All",
          "allYears": "All years"
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
          "skillsDescription": "Estas son algunas de mis habilidades y herramientas con las que he estado trabajando durante los últimos años.",
          "contactSuccess": "¡Mensaje enviado correctamente! Me pondré en contacto contigo pronto.",
          "contactError": "Error al enviar el mensaje. Por favor, intenta nuevamente.",
          "experience_fgwebdesigns": "Especializado en la gestión de diseño y desarrollo de páginas web a medida, incluyendo E-Commerce, landings y sitios corporativos.",
          "experience_practiauruguay": "Estoy trabajando en modalidad contractor para la empresa Practia, encargado de la realizacion de features frontend con tecnologias como React Js, Next Js, Tailwind CSS, entre otras.",
          "experience_ucontactbynet2phone": "Actualmente me encuentro trabajando como Software Quality Assurance Engineer en la empresa Ucontact by net2phone, encargado de la creación y ejecución de casos de prueba, reporte de errores y áreas de mejora. Además, soy responsable de la automatización de pruebas y la integración de herramientas de QA en el flujo de trabajo de desarrollo.",
          "experience_nareiasoftware": "Formé parte del equipo de QA para la aplicación mobile 'MiDinero', específicamente en el rol de Tester Funcional. Dentro de mis responsabilidades se incluye la identificación y reporte de errores y áreas de mejora, la elaboración de casos de prueba y user stories, así como la ejecución de pruebas de regresión en diversos entornos de desarrollo.",
          "experience_startqa_1": "Información Confidencial - Proyecto de Automation en Kotlin para un cliente en Estados Unidos.",
          "experience_startqa_2": "Información Confidencial - Proyecto de Automation y Manual brindando servicios a empresas como Okta, Auth0, Azure, encargado del control de calidad y automatización de casos de prueba en Cypress.",
          "experience_startqa_3": "Información Confidencial - Proyecto de billetera virtual - administrador de gastos Automation y Manual en Cypress para un cliente de Estados Unidos.",
          "experience_startqa_4": "Información Confidencial - Proyecto de billetera virtual - administrador de gastos Automation y Manual en Cypress para un cliente de Estados Unidos.",
          "experience_ecommercefull": "Desarollador Front-End para los clientes de la empresa como: Zapateria TOTO, WATCHME, Carter's, entre otros. Maquetador de sitios e-commerce, encargado del área de marketing y redes sociales.",
          "experience_cellpaydirectvagente": "Diseñador web de la página de la empresa, también encargado del área de marketing y publicidad.",
          "role_ceo": "CEO & Web Developer", 
          "role_qa_frontend": "Quality Assurance & Frontend Developer", 
          "role_qa_engineer": "Quality Assurance Engineer",
          "role_functional_tester": "Mid Functional Tester",
          "role_qa_automation": "Quality Assurance Automation",
          "role_qa_automation_manual": "Quality Assurance Automation / Manual",
          "role_qa_manual": "Quality Assurance Manual",
          "company_fgweb": "FG WEB DESIGNS",
          "company_practia": "Practia Uruguay",
          "company_ucontact": "Ucontact by net2phone",
          "company_nareia": "NAREIA SOFTWARE",
          "role_frontend_developer": "Frontend Developer",
          "company_ecommerce": "E-Commerce Full",
          "role_web_designer": "Web Designer / Marketing",
          "company_cellpay": "CellPay - DIRECTV AGENTE OFICIAL",
          "company_startqa": "Start QA",
          "footerHome": "Inicio",
          "footerSkills": "Habilidades",
          "footerExperience": "Experiencia",
          "footerPortfolio": "Portafolio",
          "footerResume": "Resumen",
          "footerRights": "Todos los derechos reservados.",
          "skillsFrontend": "Desarrollo Frontend",
          "skillsBackend": "Control de Calidad",
          "skillsTools": "Herramientas",
          "skillsQA": "Quality Assurance",
          "skillsLanguages": "Lenguajes",
          "skillsFrameworks": "Frameworks",
          "skillsOthers": "Otros",
          "skillsDesign": "Diseño",
          "skillsDatabase": "Base de Datos",
          "backToProjects": "Volver a proyectos",
          "projectNumber": "Proyecto",
          "projectDate": "Fecha",
          "projectCategory": "Categoría",
          "projectTechnologies": "Tecnologías utilizadas",
          "visitWebsite": "Visitar sitio web",
          "previousProject": "Anterior",
          "nextProject": "Siguiente",
          "scrollToSeeMore": "Scroll para ver más",
          "category_e-commerce": "E-commerce",
          "category_landing_page": "Landing Page",
          "category_web_catalogue": "Catálogo Web",
          "allCategories": "Todos",
          "allYears": "Todos los años"
        }
      }
    },
    lng: "es",
    fallbackLng: "en",
    interpolation: { escapeValue: false }
  });
