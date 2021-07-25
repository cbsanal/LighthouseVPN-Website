import { motion } from "framer-motion";
import { UseScroll } from "./UseScroll.js";
import { titleAnim, leftToRight, upToDown } from "./../animation";

function secondPage() {
  const [element, controls] = UseScroll();
  return (
    <section className="about-us">
      <motion.h2
        variants={window.innerWidth < 1024 ? {} : titleAnim}
        animate={controls}
        initial="hidden"
        ref={element}
        className="title"
      >
        About Us
      </motion.h2>
      <div className="main-wrapper">
        <motion.div
          variants={window.innerWidth < 1024 ? {} : leftToRight}
          animate={controls}
          initial="hidden"
          ref={element}
          className="img-text-wrapper-left"
        >
          <div className="img-wrapper">
            <img src="./../img/office-img1.jpg" alt="office1" />
          </div>
          <div className="text-left">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. In nihil
              ducimus sint harum voluptatibus iste esse soluta quod odio illum.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque,
              accusamus. Lorem, ipsum dolor sit amet consectetur adipisicing
              elit. Quia provident adipisci tenetur eaque, quo iusto ipsa sequi
              alias hic harum. Repudiandae corrupti deleniti enim rerum mollitia
              sapiente iste quidem maiores.
            </p>
          </div>
        </motion.div>
        <motion.div
          variants={window.innerWidth < 1024 ? {} : upToDown}
          animate={controls}
          initial="hidden"
          ref={element}
          className="img-text-wrapper-right"
        >
          <div className="img-wrapper-right">
            <img src="./../img/office-img2.jpg" alt="office2" />
          </div>
          <div className="text-right">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. In nihil
              ducimus sint harum voluptatibus iste esse soluta quod odio illum.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque,
              accusamus.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default secondPage;
