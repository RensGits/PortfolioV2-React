import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import ReactPlayer from 'react-player';
import './Somzoa.css';
import Footer from './Components/Footer/Footer';
import Pagedivider from './Components/PostHeader/Pagedivider.js'


function Somzoa () {

     

    return (

        <AnimatePresence>
            
        <motion.div className = 'projectBody' initial = {{opacity: 0, delay:2}} animate = {{opacity: 1}} exit = {{opacity: 0}} transition = {{duration: 1}}>
        <motion.p initial = {{y: -100}} animate = {{y:0}} exit = {{y: 0}} transition = {{duration: 0.8}} className = 'quoteHeader'></motion.p>
        <motion.p initial = {{y: -100}} animate = {{y:0}} exit = {{y: 0}} transition = {{duration: 0.9}} className = 'infoText'>     </motion.p>
       
        <motion.div style = {{textAlign: "center", marginBottom: '10em', paddingBottom: "3em"}} initial = {{y: -100}} animate = {{y:0}} exit = {{y: 0}} transition = {{duration: 1.2}} >
        <Pagedivider subject = 'Music video for Lamplighter | High Focus Records UK    /  Music production'/>
        <p className = 'infoText'>From music, video and soon a short novel, Somzoa is the internet alias for my non-commercial work. Somzoa is meant to hypnotize and take you onto an obscure ride. It all started out with some video's of protozoa under a microscope that I had my DLR mounted to. This eventually led to me making a video for the High Focus record label and hosting a stream on Twitch showcasing live microscopy of protozoa, occopanied with experimental bass music. I eventually decided to hop on the music production train myself after years of deep fascination for ambient & bass music.</p>
        <ReactPlayer
                url="https://www.youtube.com/watch?v=ucm32EmtXYk"
                controls
                playbackRate = {1}
                width = "100%"
                height = "50%"
            />
        
        </motion.div>
        
       
        
        <motion.div initial = {{y: -100}} animate = {{y:0}} exit = {{y: 0}} transition = {{duration: 1.4}} className = 'szSectionThree'>
        
        <ReactPlayer height = '40em' width = '100%'
        url="https://soundcloud.com/user-515726291/forclaz-11-250"
        />
        <ReactPlayer height = '40em' width = '100%'
        url="https://soundcloud.com/user-515726291/lhfor"
        />
        <ReactPlayer height = '40em' width = '100%'
        url="https://soundcloud.com/user-515726291/perfect-midnight"
        />
        <ReactPlayer height = '40em' width = '100%'
        url="https://soundcloud.com/user-515726291/enkinshon"
        />
        </motion.div>
        
        
        <Pagedivider subject = 'Digital Painting / Photoshop'/>
        <motion.div style = {{width: '100%', marginBottom: '4em'}}>
            <img style = {{width: '100%', marginBottom: '3em'}} alt = "" src = '/snowmountain.png'/>
            <img style = {{width: '100%', marginBottom: '3em'}} alt = "" src = '/canyon.png'/>
            <img style = {{width: '100%', marginBottom: '3em'}} alt = "" src = '/casestudyrocks.png'/>
        </motion.div>
        <Pagedivider subject = "Branding | Vis-handel & Markt-handel Middelburg" />
        <motion.div style = {{width: '100%', marginBottom: '4em'}}> 
        <p className = 'infoText'>Rebranding of Vis-handel & Friet-handel Middelburg. I was asked to keep the original logo and asked me to manage their social-media and design their menu's & businesscards. I wanted to create a clean font-heavy design that was easy to implement in future design throughout printed matter and social media. It was interesting to work with a pre-existing logo as it puts certain restrains on color & layout, especially with logo's like these that had odly placed typography. (These can be seen on the <span> <a href = 'http://markthandelmiddelburg.nl/'>website</a></span>)   </p>
        <img style = {{width: '100%', height: 'auto'}} alt = '' src ='/marktKaartje.png'/>
        <img style = {{width: '100%', height: 'auto'}} alt = '' src ='/vismenu.png'/>
        <img style = {{width: '100%', height: 'auto'}} alt = '' src ='/frietmenu.png'/>
        <div style = {{width: '100%', display: 'flex', flexFlow: 'row wrap', justifyContent: 'space-between',marginBottom: '3em'}}>
            <img style = {{width: '49.5%'}} alt = '' src ='/morgenfriet.png'/> 
            <img style = {{width: '49.5%'}} alt = '' src ='/morgenvis.png'/> 
        </div>
        <Pagedivider subject = 'Design competition entries'/>
        <img style = {{width: '100%', height: 'auto', marginBottom: '3em'}} alt = '' src ='/asianSign.jpg'/>
        <img style = {{width: '100%', height: 'auto', marginBottom: '3em'}} alt = '' src ='/asianMenu.jpg'/>
        <img style = {{width: '100%', height: 'auto', marginBottom: '3em'}} alt = '' src ='/devries.jpg'/>
        <img style = {{width: '100%', height: 'auto' , marginBottom: '3em'}} alt = '' src ='/aratoropapier.jpg'/>
        <img style = {{width: '100%', height: 'auto', marginBottom: '3em'}} alt = '' src ='/aratorologo.jpg'/>
        
    

        
       
       
        </motion.div>
        </motion.div>
        
        <Footer />
        </AnimatePresence>

    );
}

export default Somzoa;