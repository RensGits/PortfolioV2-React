import '../App.css'
import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import Footer from "./Components/Footer/Footer";

export default function BrowseClumsys() {
  return (
    <AnimatePresence exitBeforeEnter>
      <motion.div
        className="projectBody"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1 }}
      >
        <motion.p
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          exit={{ y: 0 }}
          transition={{ duration: 0.8 }}
          className="quoteHeader"
        >
          {" "}
          "Browseclumsys.com offers users a quick and easy way to compare
          thousands of characters and how rare their traits are."{" "}
        </motion.p>
        <motion.p
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          exit={{ y: 0 }}
          transition={{ duration: 0.9 }}
          className="infoText"
        >
          With a market cap of more then 5 billion us dollars, Non-Fungible
          Tokens are now a considerable portion of the worlds art market.
          Recently the NFT market on the Cardano blockchain has been getting
          more and more traction. The largest Cardano NFT marketplace CNFT.io
          has had a modest 400.000 sales since their launch with a total volume
          of 73.000.000 ADA spent, equating to about 140.000.000 us dollars at
          the time of writing. Most of the art sold on these platforms are in
          the form of collectibles of which every piece is unique or sold in a
          limited quanity. One of these projects are the{" "}
          <span>
            <a href="https://www.clumsyghosts.com/" alt="" taget="_blank" >Clumsy Ghosts.</a>
           </span><br/><br/>
            The project consists of 10.000
          unique characters generated using a randomized algorithm that
          assembles hand-drawn assets together into a unique collectible. The
          value of these characters is then decided largely by the rarity of
          traits they posses. <br/><br/> Browseclumsys.com is Vue.js based tool
          to search, filter and compare assets of these so called clumsy ghosts.  Browseclumsys.com offers users a quick and easy
          way to compare thousands of characters and how rare their traits are.
        </motion.p>
        <motion.div
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          exit={{ y: 0 }}
          transition={{ duration: 1 }}
          className="buttons"
        >
       
          <a href="http://browseclumsys.com" target="_blank">
            <button>TO DEPLOYMENT</button>
          </a>
        </motion.div>
        <motion.div
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          exit={{ y: 0 }}
          transition={{ duration: 1.1 }}
        >
          <p className="infoText">
            For each trait category multiple traits can be filtered for on the
            left hand side. Details of every character can be seen by clicking
            on individual characters.
          </p>

          <img
            src="/clumsydetails.png"
            alt=""
            className="project-image"
          />
        </motion.div>
        <motion.div
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          exit={{ y: 0 }}
          transition={{ duration: 1.2 }}
        >
          <p className="infoText">
            Alternativly, users have the ability to set characters as favorite
            by clicking on the heart icon located at the bottom of each
            character container. Characters set as favorite can be viewed in the
            'My favorites' tab, and can be compared against eachother by
            dragging them into designated containers. This is usefull for when
            users are making descisions about what character to buy or sell.
          </p>
          <img
            src="/clumsycomparison.png"
            alt=""
            className="project-image"
          />
        </motion.div>
        <motion.div
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          exit={{ y: 0 }}
          transition={{ duration: 1.3 }}
        >
          <p className="infoText">
            To give users an insight into how traits compare to eachother in
            rarity, an overview of traits and their percentage of occurance can
            be viewed on the 'Stats' tab. One could for instance by selecting
            the category 'Glasses', see what is the rarest or least rare pair of
            glasses.
          </p>
          <img
            src="/clumsystats.png"
            alt=""
            className="project-image"
          />
        </motion.div>
      </motion.div>

      <Footer />
    </AnimatePresence>
  );
}
