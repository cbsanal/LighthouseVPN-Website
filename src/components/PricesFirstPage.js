import { motion } from "framer-motion";
import { titleAnim, container } from "./../animation";

function firstPage() {
  return (
    <section className="landing prices">
      <div className="text-wrapper">
        <motion.div
          variants={window.innerWidth < 1024 ? {} : container}
          initial="hidden"
          animate="show"
        >
          <motion.h1
            variants={window.innerWidth < 1024 ? {} : titleAnim}
            className="first-line"
          >
            <span className="line-span">
              The <span className="blue">cheapest</span> VPN
            </span>
          </motion.h1>
          <motion.h2
            variants={window.innerWidth < 1024 ? {} : titleAnim}
            className="second-line"
          >
            <span className="line-span">You can ever find</span>
          </motion.h2>
          <motion.h3
            variants={window.innerWidth < 1024 ? {} : titleAnim}
            className="third-line"
          >
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </motion.h3>
          <div className="btn-wrapper">
            <a className="btn btn-bg-blue" href="#prices-list">
              <span>
                Below Down
                <img
                  className="below-arrow"
                  src="../icon/below-arrow.svg"
                  alt="below-arrow-icon"
                />
              </span>
            </a>
          </div>
        </motion.div>
      </div>
      <div className="img-wrapper">
        <img
          className="security-img"
          src="./../img/security.png"
          alt="security-img"
        />
      </div>
    </section>
  );
}

export default firstPage;
