import React from "react";
import lightbeam from "../img/lightbeam.jpg";
import gate from "../img/gate.jpg";
//Animation
import { motion } from "framer-motion";
import { pageAnim, fadeInPhoto } from "../animation";

const Old = () => {
  return (
    <motion.div
      className="intro-container"
      variants={pageAnim}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <div className="title">A Look Back</div>
      <div className="old-container">
        <div className="day">
          <div className="day-text">
            <h1>Lorem, ipsum dolor</h1>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa
              commodi iusto rerum ducimus velit iste.
            </p>
          </div>
          <motion.img
            loading="eager"
            src={gate}
            alt="gate"
            variants={fadeInPhoto}
            initial="hidden"
            animate="show"
          />
        </div>
        <div className="night">
          <div className="night-text">
            <h1>Lorem ipsum</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
              totam laboriosam sed nihil eligendi id minima veniam ipsum aliquid
              eaque.
            </p>
          </div>
          <motion.img
            loading="eager"
            src={lightbeam}
            alt="lightbeam"
            variants={fadeInPhoto}
            initial="hidden"
            animate="show"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Old;
