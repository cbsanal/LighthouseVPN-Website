import { motion } from "framer-motion";
import { UseScroll } from "./UseScroll.js";
import { titleAnim, lock, opacity } from "./../animation";

function FeaturesSecondPage() {
  const [element, controls] = UseScroll();
  return (
    <section className="features-list-wrapper">
      <motion.h2
        variants={window.innerWidth < 1024 ? {} : titleAnim}
        animate={controls}
        initial="hidden"
        ref={element}
        className="title"
      >
        Why should you use VPN?
      </motion.h2>
      <div className="list-img-wrapper">
        <div className="lists">
          <div className="list-container">
            <div className="feature">
              <div className="title-plus-wrapper">
                <img className="plus-sign" src="../img/plus.svg" alt="" />
                <span className="title">Security</span>
              </div>
              <div className="answer">
                <p className="title-explanation">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Sequi autem accusamus ex laboriosam porro.
                </p>
              </div>
            </div>
            <div className="feature">
              <div className="title-plus-wrapper">
                <img className="plus-sign" src="../img/plus.svg" alt="" />
                <span className="title">Privacy</span>
              </div>
              <div className="answer">
                <p className="title-explanation">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Sequi autem accusamus ex laboriosam porro.
                </p>
              </div>
            </div>
          </div>
          <div className="list-container">
            <div variants={opacity} className="feature">
              <div className="title-plus-wrapper">
                <img className="plus-sign" src="../img/plus.svg" alt="" />
                <span className="title">Freedom</span>
              </div>
              <div className="answer">
                <p className="title-explanation">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Sequi autem accusamus ex laboriosam porro.
                </p>
              </div>
            </div>
            <div className="feature">
              <div className="title-plus-wrapper">
                <img className="plus-sign" src="../img/plus.svg" alt="" />
                <span className="title">Ad Blocker</span>
              </div>
              <div className="answer">
                <p className="title-explanation">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Sequi autem accusamus ex laboriosam porro.
                </p>
              </div>
            </div>
          </div>
          <div className="list-container">
            <div className="feature">
              <div className="title-plus-wrapper">
                <img className="plus-sign" src="../img/plus.svg" alt="" />
                <span className="title">High Speed</span>
              </div>
              <div className="answer">
                <p className="title-explanation">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Sequi autem accusamus ex laboriosam porro.
                </p>
              </div>
            </div>
            <div className="feature">
              <div className="title-plus-wrapper">
                <img className="plus-sign" src="../img/plus.svg" alt="" />
                <span className="title">Kill Switch</span>
              </div>
              <div className="answer">
                <p className="title-explanation">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Sequi autem accusamus ex laboriosam porro.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="img-wrapper">
          <motion.img
            variants={lock}
            animate={controls}
            initial="hidden"
            ref={element}
            className="lock-top"
            id="lock"
            src="../img/lock-top.png"
            alt="lock-top-img"
          />
          <img
            className="lock-bottom"
            src="../img/lock-bottom.png"
            alt="lock-bottom"
          />
        </div>
      </div>
    </section>
  );
}

export default FeaturesSecondPage;
