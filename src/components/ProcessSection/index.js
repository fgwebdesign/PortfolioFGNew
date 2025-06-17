import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useSpring } from '@react-spring/web';
import { FaCheck, FaGoogle, FaFileAlt, FaPalette, FaCode, FaMobile, FaRocket } from 'react-icons/fa';
import {
    ProcessContainer,
    ProcessWrapper,
    ProcessTitle,
    ProcessDescription,
    StepsContainer,
    StepWrapper,
    StepNumber,
    StepContent,
    StepTitle,
    StepDescription,
    StepFeatures,
    StepFeature,
    StepImageContainer,
    StepImage
} from './ProcessStyle';

// Importar imágenes temporales
import meetingImage from '../../images/meet3d.png';
import developmentImage from '../../images/develop3d.png';
import deploymentImage from '../../images/deploy3d.png';

const ProcessSection = () => {
    const { t } = useTranslation();
    const [activeStep, setActiveStep] = useState(1);

    const fadeIn = useSpring({
        from: { opacity: 0, transform: 'translateY(20px)' },
        to: { opacity: 1, transform: 'translateY(0)' },
        config: { tension: 300, friction: 20 },
    });

    const steps = [
        {
            number: 1,
            title: t('process_step1_title', 'Reunión y Presupuesto'),
            description: t('process_step1_desc', 'Comenzamos con una reunión para entender tus necesidades y objetivos. Discutimos el tipo de sitio web que necesitas, funcionalidades requeridas y establecemos un presupuesto claro.'),
            features: [
                {
                    icon: <FaGoogle />,
                    text: t('process_step1_feature1', 'Creación de carpeta compartida en Google Drive')
                },
                {
                    icon: <FaFileAlt />,
                    text: t('process_step1_feature2', 'Documento detallado de requerimientos')
                },
                {
                    icon: <FaPalette />,
                    text: t('process_step1_feature3', 'Definición de diseño y paleta de colores')
                }
            ],
            image: meetingImage
        },
        {
            number: 2,
            title: t('process_step2_title', 'Desarrollo y Testing'),
            description: t('process_step2_desc', 'Una vez aprobado el presupuesto, comenzamos el desarrollo. Implementamos las funcionalidades acordadas y realizamos pruebas exhaustivas para garantizar la calidad.'),
            features: [
                {
                    icon: <FaCode />,
                    text: t('process_step2_feature1', 'Desarrollo con las últimas tecnologías')
                },
                {
                    icon: <FaMobile />,
                    text: t('process_step2_feature2', 'Diseño responsive para todos los dispositivos')
                },
                {
                    icon: <FaCheck />,
                    text: t('process_step2_feature3', 'Testing continuo y control de calidad')
                }
            ],
            image: developmentImage
        },
        {
            number: 3,
            title: t('process_step3_title', 'Despliegue y Entrega'),
            description: t('process_step3_desc', 'Realizamos el despliegue en producción, configuramos el dominio, servidor y certificado SSL. Te entregamos un sitio web completamente funcional y optimizado.'),
            features: [
                {
                    icon: <FaRocket />,
                    text: t('process_step3_feature1', 'Despliegue en servidor de producción')
                },
                {
                    icon: <FaCheck />,
                    text: t('process_step3_feature2', 'Configuración de dominio y SSL')
                },
                {
                    icon: <FaFileAlt />,
                    text: t('process_step3_feature3', 'Documentación y capacitación de uso')
                }
            ],
            image: deploymentImage
        }
    ];

    return (
        <ProcessContainer id="process">
            <ProcessWrapper>
                <ProcessTitle>{t('process_title', '¿Cómo trabajamos?')}</ProcessTitle>
                <ProcessDescription>
                    {t('process_description', 'Nuestro proceso de desarrollo está diseñado para asegurar la mejor calidad y satisfacción del cliente. Conoce los pasos que seguimos para crear tu proyecto.')}
                </ProcessDescription>

                <StepsContainer>
                    {steps.map((step) => (
                        <StepWrapper
                            key={step.number}
                            number={step.number}
                            onClick={() => setActiveStep(step.number)}
                        >
                            <StepImageContainer>
                                <StepImage 
                                    src={step.image} 
                                    alt={step.title}
                                    loading="lazy"
                                />
                            </StepImageContainer>
                            <StepNumber 
                                active={activeStep === step.number}
                                number={step.number}
                            >
                                {step.number}
                            </StepNumber>
                            <StepContent
                                style={fadeIn}
                                active={activeStep === step.number}
                            >
                                <StepTitle>{step.title}</StepTitle>
                                <StepDescription>{step.description}</StepDescription>
                                <StepFeatures>
                                    {step.features.map((feature, index) => (
                                        <StepFeature key={index}>
                                            {feature.icon} {feature.text}
                                        </StepFeature>
                                    ))}
                                </StepFeatures>
                            </StepContent>
                        </StepWrapper>
                    ))}
                </StepsContainer>
            </ProcessWrapper>
        </ProcessContainer>
    );
};

export default ProcessSection; 