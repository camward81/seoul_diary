import React from "react";
//Photos
import riverview from "../img/riverview.jpg";
import seoulstation from "../img/seoulstation.jpg";
//Animation
import { motion } from "framer-motion";
import { pageAnim } from "../animation";

const Intro = () => {
  return (
    <div>
      <motion.div
        className="intro-container"
        variants={pageAnim}
        initial="hidden"
        animate="show"
        exit="exit"
      >
        <div className="welcome">
          <div className="welcome-text">
            <h1>Welcome to Seoul</h1>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Doloribus eligendi quod deserunt alias illo! Ipsam amet fugit
              magnam mollitia, quos minima sed placeat aut perferendis quas
              asperiores corrupti neque quibusdam tempora ratione aliquam nobis?
              In, ad vero est at blanditiis obcaecati libero dolores praesentium
              iusto, magnam recusandae repudiandae excepturi minima.
            </p>
            <div className="line"></div>
          </div>
          <img
            src={riverview}
            alt="river view"
            // variants={fadeInPhoto}
            // initial="hidden"
            // animate="show"
          />
        </div>
        <div className="exploring">
          <div className="exploring-text">
            <h1>Worth Exploring</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi eum
              iusto nulla consequuntur, quaerat unde mollitia corrupti porro
              nisi sit saepe neque, itaque non qui omnis atque, voluptatem
              incidunt distinctio necessitatibus. Reprehenderit vitae incidunt,
              nesciunt harum dolor molestias voluptates eaque.
            </p>
          </div>
          <img
            src={seoulstation}
            alt="seoul station"
            // variants={fadeInPhoto}
            // initial="hidden"
            // animate="show"
          />
        </div>
      </motion.div>
    </div>
  );
};

export default Intro;
