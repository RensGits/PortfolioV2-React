import { AnimatePresence, motion } from 'framer-motion';
import React from 'react';

import ContactForm from './Components/ContactForm/ContactForm';
import Footer from './Components/Footer/Footer';

function Contact () {
    
    return (
        
       
    
        <AnimatePresence exitBeforeEnter>
                
        <motion.div className = 'contactBody'>
        <motion.img style = {{marginTop: '8em'}} className = 'gif' initial = {{y: -100}} animate = {{y:0}} exit = {{y: 0}} transition = {{duration: 0.8}} src="https://media.giphy.com/media/cJ2PfFYOU4yeEFe4bB/source.gif" alt=""/>
        <motion.p style = {{marginTop: '5em', marginBottom :'3em'}} initial = {{y: -100}} animate = {{y:0}} exit = {{y: 0}} transition = {{duration: 1}} >Feel free to send me a message. I'll get to you as soon as possible.</motion.p >
        <motion.div style = {{display: "grid", justifyContent: 'center'}} initial = {{y: -100}} animate = {{y:0}} exit = {{y: 0}} transition = {{duration: 1.2}}>
        <ContactForm/>
        </motion.div>

        </motion.div>
        <Footer/>
        </AnimatePresence>
        
       
    );
}

export default Contact;