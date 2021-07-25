import { motion } from "framer-motion";
import { UseScroll } from "./UseScroll.js";
import { useLocation } from "react-router-dom";
import { opacity } from "../animation.js";

function Footer() {
  const [element, controls] = UseScroll();
  const { pathname } = useLocation();
  return (
    <footer>
      <motion.div
        variants={window.innerWidth < 1024 ? {} : opacity}
        animate={controls}
        initial="hidden"
        ref={element}
        className="coded-by-text"
      >
        Designed and coded by <br />
        Can Berk
      </motion.div>
      <motion.div
        variants={window.innerWidth < 1024 ? {} : opacity}
        animate={controls}
        initial="hidden"
        ref={element}
        className="credit-list"
        style={pathname === "/" ? {} : { display: "none" }}
      >
        <h3 className="credit-title">Credits to:</h3>
        <ul>
          <li>
            <a href="https://www.vecteezy.com/free-vector/green">
              Green Vectors by Vecteezy
            </a>
          </li>
          <li>
            <a href="https://www.freepik.com/free-photos-vectors/travel">
              Travel vector created by Layerace - www.freepik.com
            </a>
          </li>
          <li>
            <a href="https://www.freepik.com/free-photos-vectors/abstract">
              Abstract vector created by upklyak - www.freepik.com
            </a>
          </li>
          <li>
            <a href="https://www.freepik.com/free-photos-vectors/business">
              Business vector created by jcomp - www.freepik.com
            </a>
          </li>
        </ul>
      </motion.div>
      <motion.div
        variants={window.innerWidth < 1024 ? {} : opacity}
        animate={controls}
        initial="hidden"
        ref={element}
        className="footer-links"
      >
        <ul>
          <li
            className="link"
            style={pathname === "/features" ? { display: "none" } : {}}
          >
            <a href="/features">
              Features
              <img
                className="right-arrow"
                src="./../icon/right-arrow.svg"
                alt="right-arrow-svg"
              />
            </a>
          </li>
          <li
            className="link"
            style={pathname === "/" ? { display: "none" } : {}}
          >
            <a href="/">
              About
              <img
                className="right-arrow"
                src="./../icon/right-arrow.svg"
                alt="right-arrow-svg"
              />
            </a>
          </li>
          <li
            className="link"
            style={pathname === "/prices" ? { display: "none" } : {}}
          >
            <a href="/About">
              Prices
              <img
                className="right-arrow"
                src="./../icon/right-arrow.svg"
                alt="right-arrow-svg"
              />
            </a>
          </li>
          <li
            className="link"
            style={pathname === "/support" ? { display: "none" } : {}}
          >
            <a href="/support">
              Support
              <img
                className="right-arrow"
                src="./../icon/right-arrow.svg"
                alt="right-arrow-svg"
              />
            </a>
          </li>
        </ul>
      </motion.div>
    </footer>
  );
}
export default Footer;
