import { motion } from "framer-motion";
import { UseScroll } from "./UseScroll.js";
import { titleAnim, leftToRight, photoAnim } from "./../animation";

function thirdPage() {
  const [element, controls] = UseScroll();
  return (
    <section className="our-company">
      <motion.h2
        variants={window.innerWidth < 1024 ? {} : titleAnim}
        animate={controls}
        initial="hidden"
        ref={element}
        className="title"
      >
        Our Company
      </motion.h2>
      <div className="main-wrapper">
        <motion.div
          variants={window.innerWidth < 1024 ? {} : leftToRight}
          animate={controls}
          initial="hidden"
          ref={element}
          className="dummy-text"
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum,
          fugiat ad sint quaerat illo maxime ab nesciunt distinctio deleniti
          quod. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Laboriosam exercitationem tenetur pariatur ullam, quis ipsum molestiae
          quae doloremque iure a. <br /> <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum,
          fugiat ad sint quaerat illo maxime ab nesciunt distinctio deleniti
          quod. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Laboriosam exercitationem tenetur pariatur ullam, quis ipsum molestiae
          quae doloremque iure a.
        </motion.div>
        <div className="img-container">
          <motion.img
            variants={window.innerWidth < 1024 ? {} : photoAnim}
            animate={controls}
            initial="hidden"
            ref={element}
            src="./../img/office-img3.jpg"
            alt="office3"
          />
        </div>
      </div>
    </section>
  );
}
export default thirdPage;
