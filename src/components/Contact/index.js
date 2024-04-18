import React from 'react'
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Snackbar } from '@mui/material';
import { Container, Wrapper, Title, Desc, ContactForm, ContactTitle, ContactInput, ContactButton, ContactInputMessage, AnimatedImage, LeftAnimatedImage } from './ContactStyle';
import { useSpring } from '@react-spring/web';
import { useInView } from 'react-intersection-observer';
import leftImageEducation from '../../images/contact.png';
import rightImageEducation from '../../images/contact2.png';















const Contact = () => {

  //hooks
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
        <Title>Hablemos de futuros proyectos..</Title>
        <Desc ref={ref}>Estoy aquí para ayudarte, No dudes en enviarme cualquier pregunta o propuesta.</Desc>
        <AnimatedImage style={props} src={rightImageEducation} alt="Experience Image" />
              <LeftAnimatedImage style={props} src={leftImageEducation} alt="Experience Image" />
        <ContactForm ref={form} onSubmit={handleSubmit}>
          <ContactTitle>¡Envíame un e-mail! 🚀📧</ContactTitle>
          <ContactInput placeholder="Tu correo electrónico" name="from_email" />
          <ContactInput placeholder="Tu nombre completo" name="from_name" />
          <ContactInput placeholder="Asunto" name="subject" />
          <ContactInputMessage placeholder="Mensaje" rows="4" name="message" />
          <ContactButton type="submit" value="Enviar" />
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