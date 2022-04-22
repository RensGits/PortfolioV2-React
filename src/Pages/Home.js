import { AnimatePresence, motion } from "framer-motion";
import React from "react";
import ProjectItem from "./Components/ProjectItem/ProjectItem";
import Footer from "./Components/Footer/Footer";
import CV from "../Assets/CV_Rens_van_Driel.pdf";
import "./Components/ProjectItem/ProjectItem.css";

function Home() {
  return (
    <AnimatePresence exitBeforeEnter>
      <motion.div
        key="home"
        className="homeBody"
        initial={{ opacity: 0, x: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1 }}
      >
        <motion.p
          className="hi"
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          exit={{ y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Hi! I'm Rens van Driel, a self taught front-end developer with an
          affinity for biology and 3D. Check out some of my work below or see
          what i'm learning about in the playground section.
        </motion.p>
        <motion.p
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          exit={{ y: 0 }}
          transition={{ duration: 0.8 }}
          className="cV"
        >
          <a
            style={{ fontSize: "1em", color: "#E57070" }}
            href={CV}
            target="_blank"
          >
            Download my resume
          </a>
        </motion.p>
        <motion.div
          key="projectbody"
          exit={{ opacity: 0 }}
          className="projectBody"
        >
           <ProjectItem
            blockright="projectBlockRight brownobrown "
            link="/bestbooks"
            className="projectImageThree"
            image="/homepagePreview.png"
            duration="1"
            projectname="BestBooks"
            category="React / Firebase"
            description="BestBooks is a web application for browsing books retrieved from the 'New York Times' Books API. This API provides data on all books rated and reviewed by the New York Times. "
          />
          <ProjectItem
            blockright="projectBlockRight brownobrown "
            link="/browseclumsys"
            className="projectImageThree"
            image="/browseclumsys.png"
            duration="1"
            projectname="Browse clumsys"
            category="Vue.js"
            description="Browseclumsys.com is an tool to search, filter and compare assets of an NFT project on the Cardano blockchain."
          />
          <ProjectItem
            blockright="projectBlockRight brownobrown "
            link="/virus"
            className="projectImageThree"
            image="https://i.imgur.com/7hVFTpz.png"
            duration="1.2"
            projectname="Virus - learn something"
            category="Dart / flutter"
            description="VIRUS is a playstore live application that gives information on clinically imortant viruses. Virus was my first ever coding project and taught me a lot about setting up a project to finalising publication."
          />
          <ProjectItem
            blockright="projectBlockRight"
            link="/gameoflife"
            className="projectImage"
            image="https://i.imgur.com/4Wi2oCu.png"
            duration="1.4"
            projectname="Game of Life"
            category="Javascript"
            description="A vanilla Javascript build of John Conway's 'Game of Life' using CSS Grid and DOM manipulation"
          />
          <ProjectItem
            blockright="projectBlockRight"
            link="/weeddoctor"
            className="projectImage"
            image="https://i.imgur.com/SuW4e4x.png"
            duration="1.5"
            projectname="Weed Doctor"
            category="Dart / flutter"
            description="Weed Doctor is an application that helps users identify plant diseases based on visual keys in the leaves. "
          />
          <ProjectItem
            blockright="projectBlockRight sixosix"
            link="naturalis"
            className="projectImageTwo"
            image="https://i.imgur.com/i0lwYR7_d.webp?maxwidth=760&fidelity=grand"
            duration="1.6"
            projectname="Naturalis"
            category="Research / 3D modeling"
            description="At Naturalis Biodiversity Centre I did research into the evolutionairy history of two winged insects. Here I worked on 3D moddeling of anatomy and integrating this into scientific publications. "
          />
          <ProjectItem
            blockright="projectBlockRight"
            link="somzoa"
            className="projectImageFour"
            image="https://i.imgur.com/Wzd5RhN.png"
            duration="1.6"
            projectname="Snippets"
            category="Freelance / hobby"
            description="Graphic design freelance & hobby projects."
          />
        </motion.div>
        <Footer />
      </motion.div>
    </AnimatePresence>
  );
}

export default Home;
