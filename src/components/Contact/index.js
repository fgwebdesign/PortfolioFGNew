import React, { useState } from 'react'
import { useTranslation } from 'react-i18next';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Snackbar, Alert } from '@mui/material';
import { Container, Wrapper, Title, Desc, ContactForm, ContactTitle, ContactInput, ContactButton, ContactInputMessage, AnimatedImage, LeftAnimatedImage } from './ContactStyle';
import { useSpring } from '@react-spring/web';
import { useInView } from 'react-intersection-observer';
import leftImageEducation from '../../images/contact.png';
import rightImageEducation from '../../images/contact2.png';


const Contact = () => {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({ message: '', type: 'success' });
  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    
    emailjs.sendForm(
      'service_l4w379i',
      'template_hih3gu6',
      form.current,
      'l1r_IQu-Z6h_QnloI'
    )
      .then((result) => {
        setStatus({
          message: t('contactSuccess') || '¡Mensaje enviado correctamente!',
          type: 'success'
        });
        setOpen(true);
        form.current.reset();
      })
      .catch((error) => {
        console.error('Error:', error);
        setStatus({
          message: t('contactError') || 'Error al enviar el mensaje. Por favor, intenta nuevamente.',
          type: 'error'
        });
        setOpen(true);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.5,
});

const props = useSpring({
    from: { transform: 'translateX(100%)', opacity: 0 },
    to: {
        transform: inView ? 'translateX(0%)' : 'translateX(100%)',
        opacity: inView ? 1 : 0,
    },
    config: { tension: 20, friction: 10 },
});



  return (
    <Container id='contact'>
      <Wrapper>
        <Title>{t('contactTitle')}</Title>
        <Desc ref={ref}>{t('contactDescription')}</Desc>
        <AnimatedImage style={props} src={rightImageEducation} alt="Experience Image" />
        <LeftAnimatedImage style={props} src={leftImageEducation} alt="Experience Image" />
        <ContactForm ref={form} onSubmit={handleSubmit}>
          <ContactTitle>{t('contactMail')}</ContactTitle>
          <ContactInput 
            placeholder={t('contactMailTwo')} 
            name="from_email" 
            type="email" 
            required 
          />
          <ContactInput 
            placeholder={t('contactName')} 
            name="from_name" 
            required 
          />
          <ContactInput 
            placeholder={t('contactSubject')} 
            name="subject" 
            required 
          />
          <ContactInputMessage 
            placeholder={t('contactMessage')}  
            rows="4" 
            name="message" 
            required 
          />
          <ContactButton 
            type="submit" 
            value={loading ? 'Enviando...' : t('contactSend')}
            disabled={loading}
          />
        </ContactForm>
        <Snackbar
          open={open}
          autoHideDuration={6000}
          onClose={() => setOpen(false)}
          anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        >
          <Alert 
            onClose={() => setOpen(false)} 
            severity={status.type}
            sx={{ width: '100%' }}
          >
            {status.message}
          </Alert>
        </Snackbar>
      </Wrapper>
    </Container>
  )
}

export default Contact