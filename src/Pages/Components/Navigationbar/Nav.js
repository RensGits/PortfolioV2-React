import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../../App.css";
import "./../Navigationbar/Nav.css";
import useSound from "use-sound";
import clickyBoi from "../Navigationbar/clickyboi.mp3";

function Nav(props) {
  const [playActive] = useSound(clickyBoi, { volume: 0.5 });

  const [audio] = useState(new Audio("/Marshmallow.wav"));
  const [audioOn, setAudioOn] = useState("false");

  function toggle() {
    setAudioOn(!audioOn);
    console.log(audioOn);
    if (audioOn) {
      audio.play();
    }
    if (!audioOn) {
      console.log(audioOn);
      audio.pause();
    }
  }

  const containerVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: { duration: 1 },
    },
    exit: {
      x: "+100vw",
      transition: { ease: "easeInOut" },
    },
  };

  return (
    <AnimatePresence>
      <motion.div
        className="motionDiv"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <nav>
          <Link onClick={playActive} to="/projects" className="rD">
            RD
          </Link>
          <Link></Link>

          <Link onClick={playActive} to="/playground" className="links">
            PLAYGROUND
          </Link>
          <Link onClick={playActive} to="/about" className="links">
            ABOUT
          </Link>
          <Link onClick={playActive} to="/contact" className="links">
            CONTACT
          </Link>
        </nav>
      </motion.div>
    </AnimatePresence>
  );
}

export default Nav;
