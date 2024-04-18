import React from 'react'
import { useTranslation } from 'react-i18next';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Snackbar } from '@mui/material';
import { Container, Wrapper, Title, Desc, ContactForm, ContactTitle, ContactInput, ContactButton, ContactInputMessage, AnimatedImage, LeftAnimatedImage } from './ContactStyle';
import { useSpring } from '@react-spring/web';
import { useInView } from 'react-intersection-observer';
import leftImageEducation from '../../images/contact.png';
import rightImageEducation from '../../images/contact2.png';


const Contact = () => {
  const { t } = useTranslation();

  const [open, setOpen] = React.useState(false);
  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_tox7kqs', 'template_nv7k7mj', form.current, 'SybVGsYS52j2TfLbi')
      .then((result) => {
        setOpen(true);
        form.current.reset();
      }, (error) => {
        console.log(error.text);
      });
  }

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
          <ContactInput placeholder={t('contactMailTwo')} name="from_email" />
          <ContactInput placeholder={t('contactName')} name="from_name" />
          <ContactInput placeholder={t('contactSubject')} name="subject" />
          <ContactInputMessage placeholder={t('contactMessage')}  rows="4" name="message" />
          <ContactButton type="submit" value={t('contactSend')} />
        </ContactForm>
        <Snackbar
          open={open}
          autoHideDuration={6000}
          onClose={()=>setOpen(false)}
          message="Mensaje enviado correctamente!"
          severity="success"
        />
      </Wrapper>
    </Container>
  )
}

export default Contact