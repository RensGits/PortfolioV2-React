import React, { useState, Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF, Sky } from "@react-three/drei";
import { Link } from "react-router-dom";
import * as THREE from "three";
import { AnimatePresence, motion } from "framer-motion";

import DesertRens from "./Components/DesertModel/DesertRens.js";
import CustomLoader from "./Components/CustomLoader/CustomLoader.js";
import videoURL from "./Components/BackgroundVideo/websitescrolling.mp4";

const Screen = () => {
  const { nodes } = useGLTF("/desertRens.glb");
  console.log(nodes);
  const [video] = useState(() => {
    const vid = document.createElement("video");
    vid.src = videoURL;
    vid.crossOrigin = "Anonymous";
    vid.loop = true;
    vid.muted = true;
    vid.play();
    return vid;
  });

  return (
    <group>
      <mesh
        position={[-0.12, 0.11, 1.78]}
        rotation={[0, -0.58, -0.03]}
        scale={[0.54, 0.27, 3]}
      >
        <planeGeometry args={[2, 1.4]} />
        <meshStandardMaterial emissive={"white"} side={THREE.DoubleSide}>
          <videoTexture attach="map" args={[video]} />
          <videoTexture attach="emissiveMap" args={[video]} />
        </meshStandardMaterial>
      </mesh>
    </group>
  );
};

export default function Intro(props) {
  const containerVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: { duration: 1.5 },
    },
    exit: {
      x: "100vw",
      transition: { ease: "easeInOut" },
    },
  };

  return (
    <AnimatePresence>
      <motion.div
        className="introBody"
        exitBeforeEnter
        variants={containerVariants}
        initial="visible"
        animate="visible"
        exit="exit"
      >
        <motion.h3
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          style={{
            color: "white",
            position: "relative",
            gridRow: "4",
            gridColumn: "7/9",
            zIndex: "100",
            marginLeft: "1em",
          }}
        >
          Hi I'm Rens van Driel, <br></br>a self taught front-end developer{" "}
          <br></br>
          with an affinity for biology and 3D.
        </motion.h3>
        <Link
          style={{
            gridRow: "5",
            gridColumn: "7",
            alignSelf: "top",
            marginLeft: "1.35em",
            marginRight: "0",
            padding: "0",
            zIndex: "100",
          }}
          to="/projects"
        >
          <motion.button
            style={{ fontSize: "0.8em" }}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            link="/projects"
          >
            continue
          </motion.button>
        </Link>

        <Canvas
          className="canvasGeneral"
          camera={{ position: [-3, 2, 12], fov: 50 }}
          style={{
            width: "100%",
            height: "100%",
            backgroundColor: "black",
            gridRow: "1/12",
            gridColumn: "1/11",
            margin: "0",
            padding: "0",
          }}
        >
          <Suspense fallback={<CustomLoader color="white" />}>
            <Sky
              mieDirectionalG={0.1}
              distance={4500}
              sunPosition={[0, 0.4, 2]}
              inclination={0}
              azimuth={0.24}
            />
            <Screen />
            <ambientLight intensity={0.1} />

            <DesertRens position={[-0.3, -1.2, 0]} />
          </Suspense>
          <OrbitControls />
        </Canvas>
      </motion.div>
    </AnimatePresence>
  );
}
