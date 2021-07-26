import { motion } from "framer-motion";
import { titleAnim, container } from "./../animation";
import { Link } from "react-router-dom";

function FeaturesFirstPage() {
  return (
    <section className="landing features">
      <div className="text-wrapper">
        <motion.div
          variants={window.innerWidth < 1024 ? {} : container}
          initial="hidden"
          animate="show"
        >
          <motion.h1
            variants={window.innerWidth < 1024 ? {} : titleAnim}
            className="first-line big-font"
          >
            Over <span className="orange">1200</span> server
          </motion.h1>
          <motion.h2
            variants={window.innerWidth < 1024 ? {} : titleAnim}
            className="second-line normal-font"
          >
            <span className="orange">68</span> different country
          </motion.h2>
          <motion.p
            variants={window.innerWidth < 1024 ? {} : titleAnim}
            className="small-text"
          >
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem
            ipsum dolor sit amet.
          </motion.p>
          <div className="btn-wrapper">
            <Link className="btn orange-bg" to="/prices">
              <span>
                See the prices
                <img
                  className="right-arrow"
                  src="../icon/right-arrow.svg"
                  alt="right-arrow-icon"
                />
              </span>
            </Link>
          </div>
        </motion.div>
      </div>
      <div className="img-wrapper world-img">
        <img src="./../img/world.png" alt="world-img" />
      </div>
    </section>
  );
}

export default FeaturesFirstPage;
