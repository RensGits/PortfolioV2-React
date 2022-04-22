import '../App.css'
import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import Footer from "./Components/Footer/Footer";

export default function BestBooks() {

    

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
                    " BestBooks offers multiple ways to navigate to your new favorite title. "{" "}
                </motion.p>
                <motion.p
                    initial={{ y: -100 }}
                    animate={{ y: 0 }}
                    exit={{ y: 0 }}
                    transition={{ duration: 0.9 }}
                    className="infoText"
                >
                    BestBooks is a web application for browsing books retrieved from the 'New York Times' Books API. This API provides data on all books rated and reviewed by the New York Times. BestBooks offers multiple ways to navigate to your new favorite title.
                    In the All books tab, all books can be filtered by author, publisher, weeks that books have been listed and their rank.
                    In the Browse lists tab, best seller lists can be found of different categories.
                    Don't be shy and let the world know what you thought of your New York Times titles!{" "}
                    <br /><br />
                    Technologies used:<br />
                    - Axios<br />
                    - Redux Toolkit<br />
                    - Redux Thunks<br />
                    - React-router<br />
                    - Firebase authentication<br />
                    - Firebase database<br />
                    - Lodash
                    
                </motion.p>
                <motion.div
                    initial={{ y: -100 }}
                    animate={{ y: 0 }}
                    exit={{ y: 0 }}
                    transition={{ duration: 1 }}
                    className="buttons"
                >
                    <a href="https://bestbooks-51a67.web.app" target="_blank">
                        <button>TO DEPLOYMENT</button>
                    </a>
                    <a href="https://github.com/RensGits/BestBooks.store" target="_blank">
                        <button>TO CODE</button>
                    </a>
                </motion.div>
                <motion.div
                    initial={{ y: -100 }}
                    animate={{ y: 0 }}
                    exit={{ y: 0 }}
                    transition={{ duration: 1.1 }}
                >
                    <img
                        src="/homepage.png"
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
                    <img
                        src="/listview.png"
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
                    <img
                        src="/search.png"
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
                    <img
                        src="/login.png"
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
                    <img
                        src="/profile.png"
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
                  
                    <img
                        src="/reviews.png"
                        alt=""
                        className="project-image"
                    />
                </motion.div>
            </motion.div>

            <Footer />
        </AnimatePresence>
    );
}
