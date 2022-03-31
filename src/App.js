import { Route, Switch, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import React, { useState, Suspense } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

import Intro from "./Pages/Intro";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Nav from "./Pages/Components/Navigationbar/Nav";
import Virus from "./Pages/Virus";
import WeedDoctor from "./Pages/WeedDoctor";
import Naturalis from "./Pages/Naturalis";
import Somzoa from "./Pages/Somzoa";
import GameOfLife from "./Pages/GameOfLife";
import Playground from "./Pages/Playground";
import BrowseClumsys from "./Pages/BrowseClumsys";
import Radio from "./Pages/Components/DesertModel/Radio.js";
import CustomLoader from "./Pages/Components/CustomLoader/CustomLoader";

import "./Pages/Components/Navigationbar/Nav.css";
import "./App.css";
import BestBooks from "./Pages/BestBooks";

function App() {
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
  
  const location = useLocation();

  return (
    <div className="appGrid">
      <CssBaseline />

      <AnimatePresence>
        <Nav />

        <Switch location={location} key={location.key}>
          <Route path="/" exact component={Intro} />
          <Route path="/projects" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/virus" component={Virus} />
          <Route path="/weeddoctor" component={WeedDoctor} />
          <Route path="/naturalis" component={Naturalis} />
          <Route path="/somzoa" component={Somzoa} />
          <Route path="/gameoflife" component={GameOfLife} />
          <Route path="/playground" component={Playground} />
          <Route path="/browseclumsys" component={BrowseClumsys} />
          <Route path="/bestbooks" component={BestBooks} />

        </Switch>
      </AnimatePresence>
      <div
        className="radio"
        style={{
          position: "fixed",
          zIndex: "2000",
          width: "10em",
          height: "10em",
          bottom: "0",
          right: "0",
        }}
      >
        <Canvas>
          <Suspense fallback={<CustomLoader color="black" />}>
            <ambientLight intensity={0.4} />
            <pointLight position={[-10, 0, 20]} intensity={0.5} />
            <directionalLight />
            <OrbitControls zoom="false" />
            <Radio onClick={toggle} scale={[1, 1, 1]} />
          </Suspense>
        </Canvas>
      </div>
    </div>
  );
}

export default App;
