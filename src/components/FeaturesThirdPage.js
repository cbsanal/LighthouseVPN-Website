import { motion } from "framer-motion";
import { UseScroll } from "./UseScroll.js";
import { titleAnim, leftToRight, rightToLeft } from "./../animation";

function FeaturesSecondPage() {
  const [element, controls] = UseScroll();
  return (
    <section className="features-cards-wrapper">
      <div className="cards-container">
        <motion.div
          variants={window.innerWidth < 1024 ? {} : leftToRight}
          animate={controls}
          initial="hidden"
          ref={element}
          className="card border-left-top"
        >
          <div className="card-img-container">
            <img src="./../img/lighting.svg" alt="lighting" />
          </div>
          <h3 className="card-title">Fast</h3>
          <p className="card-desc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
            molestias mollitia voluptatibus at possimus architecto eius modi,
            nesciunt blanditiis quos.
          </p>
        </motion.div>
        <motion.div
          variants={window.innerWidth < 1024 ? {} : titleAnim}
          animate={controls}
          initial="hidden"
          ref={element}
          className="card"
        >
          <div className="card-img-container">
            <img src="./../img/lock-small.svg" alt="lock" />
          </div>
          <h3 className="card-title">Secure</h3>
          <p className="card-desc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
            molestias mollitia voluptatibus at possimus architecto eius modi,
            nesciunt blanditiis quos.
          </p>
        </motion.div>
        <motion.div
          variants={window.innerWidth < 1024 ? {} : rightToLeft}
          animate={controls}
          initial="hidden"
          ref={element}
          className="card border-right-top"
        >
          <div className="card-img-container">
            <img src="./../img/dollar.svg" alt="lighting" />
          </div>
          <h3 className="card-title">Cheap</h3>
          <p className="card-desc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
            molestias mollitia voluptatibus at possimus architecto eius modi,
            nesciunt blanditiis quos.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export default FeaturesSecondPage;
