import React from "react";
//Animation
import { motion } from "framer-motion";
import { pageAnim } from "../animation";
import bridge from "../img/bridge.jpg";
import seoulstation2 from "../img/seoulstation2.jpg";
import gangnam from "../img/gangnam.jpg";

const New = () => {
  return (
    <motion.div
      variants={pageAnim}
      initial="hidden"
      animate="show"
      exit="exit"
      className="new-container"
    >
      <div className="title">The Modern Vibe</div>
      <div className="bridge">
        <div className="bridge-text">
          <h1>Lorem ipsum dolor sit amet</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi,
            delectus ad labore iusto quas deserunt minima, veritatis provident
            optio error dolorem asperiores voluptates consequuntur illum quidem
            sed dolores pariatur nostrum autem quos nesciunt maxime neque non
            inventore. Facere, inventore vitae.
          </p>
          <div className="line"></div>
        </div>
        <img
          src={bridge}
          alt="bridge"
          // variants={fadeInPhoto}
          // initial="hidden"
          // animate="show"
        />
      </div>
      <div className="seoulstation2">
        <img
          src={seoulstation2}
          alt="seoul station 2"
          // variants={fadeInPhoto}
          // initial="hidden"
          // animate="show"
        />
        <div className="seoulstation2-text">
          <h1>Lorem ipsum</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel nostrum
            quisquam similique quasi laboriosam nesciunt commodi soluta
            reprehenderit suscipit adipisci? Id possimus excepturi iure labore
            similique minus eius amet fugiat esse unde quod consequatur sint
            molestias expedita explicabo corrupti laboriosam iste, magni aperiam
            laborum necessitatibus voluptatibus. Possimus repellat animi quae.
          </p>
          <div className="line"></div>
        </div>
      </div>
      <div className="gangnam">
        <img
          src={gangnam}
          alt="gangnam"
          // variants={fadeInPhoto}
          // initial="hidden"
          // animate="show"
        />
        <div className="gangnam-text">
          <h1>Lorem, ipsum dolor</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint,
            nesciunt quis. Nulla, cum expedita porro dolorem odit consectetur
            esse, minus laudantium nostrum numquam quia, corrupti nemo suscipit
            possimus magni iusto. Explicabo cumque, iste commodi, totam nostrum
            laborum velit a quo maxime cum eius laboriosam nihil tenetur veniam
            sequi minima, quidem magnam molestias? Laboriosam, nisi commodi.
          </p>
          <div className="line"></div>
        </div>
      </div>
    </motion.div>
  );
};

export default New;
