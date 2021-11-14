import React from "react";
import "../ProjectItem/ProjectItem.css";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";
import useSound from "use-sound";
import clickyBoi from "../Navigationbar/clickyboi.mp3";

function ProjectItem(props) {
  const [proportions, setProportions] = useState("30% 100%");
  const [opacityBlockLeft, setOpcacityBlockLeft] = useState("1");
  const [playActive] = useSound(clickyBoi, { volume: 0.5 });

  return (
    <AnimatePresence exitBeforeEnter>
      <motion.div
        key="item"
        layout
        className="projectItem"
        onMouseEnter={() => {
          setProportions("0% 100%");
          setOpcacityBlockLeft("0");
        }}
        onMouseLeave={() => {
          setProportions("30% 100%");
          setOpcacityBlockLeft("1");
        }}
        initial={{ y: -100, "grid-template-columns": "30% 100%" }}
        animate={{ y: 0, "grid-template-columns": proportions }}
        exit={{ y: 0 }}
        transition={{ duration: props.duration }}
      >
        <motion.div className="projectBlockLeft">
          <motion.p
            className="projectTitle"
            animate={{ opacity: opacityBlockLeft }}
          >
            {props.projectname}
          </motion.p>

          <motion.p
            className="projectDescription"
            animate={{ opacity: opacityBlockLeft }}
          >
            {props.description}
          </motion.p>

          <motion.p
            className="projectCategory"
            animate={{ opacity: opacityBlockLeft }}
          >
            {props.category}
          </motion.p>
        </motion.div>
        <motion.div className="projectOverlay" whileHover={{ opacity: 0.7 }}>
          <Link to={props.link} className="button aProject">
            TO PROJECT
          </Link>
        </motion.div>
        <div className={props.blockright}>
          <Link to={props.link}>
            <button onClick={playActive} className="conditionalButton">
              <p>TO PROJECT</p>
            </button>
          </Link>
          <img className={props.className} src={props.image} alt="" />
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

export default ProjectItem;
