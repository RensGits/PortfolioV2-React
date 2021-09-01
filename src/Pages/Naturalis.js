
import React from 'react';

import { motion, AnimatePresence } from 'framer-motion';
import Footer from './Components/Footer/Footer.js';

import './Naturalis.css';
import '../App.css';

function Naturalis () {
    return (
        
        <AnimatePresence>
        
        <motion.div className = 'projectBody' initial = {{opacity: 0}} animate = {{opacity: 1}} exit = {{opacity: 0}} transition = {{duration: 1}}>
        <motion.p initial = {{y: -100}} animate = {{y:0}} exit = {{y: 0}} transition = {{duration: 0.8}} className = 'quoteHeader'> " What can insect genitalia and muscles in the head of larvea tell us about their evolutionairy history?  " </motion.p>
        <motion.p initial = {{y: -100}} animate = {{y:0}} exit = {{y: 0}} transition = {{duration: 0.9}} className = 'infoText'> In evolutionary biology, comparing morphology (the form and 
            structure) of different species can be used to build a phylogenetic 
            tree that shows a hypothesis about the evolutionary history of a 
            group or groups of species. Species that share the same derived 
            traits can be grouped together, i.e. species that have homologous 
            structures. By looking at the form and function of these homologous 
            structures, one can try to find patterns that tell if these traits are 
            derived or ancestral traits. My work at Naturalis was to see if I could do just this for a long standing problem in evolutionary biology, namely the evolutionary history of flies, scorpidflies and fleas. To do this I made 3D models of the internal structures of different species and compared the form and function to see if we could see any patterns that either confirmed or refuted preliminairy hypothesis. I then worked on integrating these 3D models into scientific publications.</motion.p>
        <motion.div style = {{display: 'flex', justifyContent: 'center'}} >
        <iframe src="https://rensgits.github.io/https---github.com-RensGits-google-model-viewer/index.html" frameborder="0" ></iframe>

     
        </motion.div>
        <motion.div style = {{display: 'flex', justifyContent: 'center'}} >
        <motion.img style = {{width : "70%", height : 'auto', }}className = 'naturalisImg three' src = 'https://i.imgur.com/JM1idyQ.png' alt = ''></motion.img>
        </motion.div>        
        <p style = {{margin: "11em"}} className = 'infoText'>To make 3D models of the insides of an insect, we used a Micro-CT scanner to make many pictures or slides that can then be imported into specialised software that rebuilds all these slides into a 3D model. But this is not enough to understand the different parts you are looking at. To differentiate between structures, one has to go through the slides and look where things start and end in a 3D dimensional plane. Here you can see one slide comming from a micro-CT scanner. You are looking at a slice of the behind of a cranefly. The bulb you see in the middle is a pump that pumps sperm to the penis, the long string that winds around the pump. I created multiple of these models to compare the form and function. To clarify the models, I've made illustrations referencing every muscle found in the model.  </p>
        <motion.div style = {{display: 'flex', justifyContent: 'center'}} >
        <iframe style = {{flex: '2'}} src="https://rensgits.github.io/https---github.com-RensGits-google-model-viewer/rivosa.html" frameborder="0" ></iframe>
        <p style = {{flex: '1', alignSelf: 'flex-end', marginBottom: '8em'}} className = 'infoText'>This is the jaw of a cranefly larvea with the muscles that are attached to it. In the illustrations below one can differentiate all the different structures that can then be references in the publication. By looking at the differences in muscle count, form and function in different species, one can get an idea of their evolutionairy history.</p>
        </motion.div>
        <motion.img className = 'naturalisImg two' src = 'https://i.imgur.com/rGq0vlS.png' alt = ''></motion.img>
        <Footer />
        </motion.div>
        
        </AnimatePresence>

    );
}

export default Naturalis;
