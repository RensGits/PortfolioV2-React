import emailjs from 'emailjs-com';
import React ,{useState} from 'react';
import './../ContactForm/ContactForm.css'




function ContactForm () {

  const[visible, setVisible] = useState('');
  const[hide,setHide] = useState('contactForm')

function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('service_rt762rs', 'template_oxljmnr', e.target, 'user_oljxlIoe3AvZ9Vm3eEJvm')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      })
  } 

  return (
    <div className = {visible}>
    <h3 className = {visible}>Thanks! Your message is on it's way.</h3>
    <form className= {hide} onSubmit={sendEmail}>
      
      <label>Name</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Message</label>
      <textarea name="message" />
      <input onClick = {()=> {setVisible('messageSend'); setHide('hidden')}} className = 'formButton' type="submit" value="Send" />
    </form>
    </div>
  );
}

export default ContactForm;