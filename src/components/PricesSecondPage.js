import { motion } from "framer-motion";
import { titleAnim, rightToLeft, leftToRight } from "./../animation";
import { UseScroll } from "./UseScroll.js";

function secondPage() {
  const [element, controls] = UseScroll();
  return (
    <section id="prices-list" className="price-list">
      <div className="list-wrapper">
        <motion.div
          initial="hidden"
          animate={controls}
          variants={window.innerWidth < 1024 ? {} : leftToRight}
          ref={element}
          className="card right-border"
        >
          <div className="card-title">Free</div>
          <div className="card-price">0 €</div>
          <div className="card-desc">
            <ul>
              <li>17 servers in 3 countries</li>
              <li>1 VPN connection</li>
              <li>Medium speed</li>
              <li>Strict no-logs policy</li>
              <li>Access blocked content</li>
            </ul>
          </div>
          <div className="btn-wrapper">
            <a className="card-btn" href="/prices">
              Get Free
            </a>
          </div>
        </motion.div>
        <motion.div
          initial="hidden"
          animate={controls}
          variants={window.innerWidth < 1024 ? {} : titleAnim}
          ref={element}
          className="card right-border"
        >
          <div className="card-title">Basic</div>
          <div className="card-price">3 €</div>
          <div className="card-desc">
            <ul>
              <li>33 servers in 6 countries</li>
              <li>2 VPN connection</li>
              <li>High speed</li>
              <li>Strict no-logs policy</li>
              <li>Access blocked content</li>
            </ul>
          </div>
          <div className="btn-wrapper">
            <a className="card-btn" href="/prices">
              Get Basic
            </a>
          </div>
        </motion.div>
        <motion.div
          initial="hidden"
          animate={controls}
          variants={window.innerWidth < 1024 ? {} : rightToLeft}
          ref={element}
          className="card"
        >
          <div className="card-title">Plus</div>
          <div className="card-price">6 €</div>
          <div className="card-desc">
            <ul>
              <li>1200+ servers in 68 countries</li>
              <li>3 VPN connection</li>
              <li>Highest speed</li>
              <li>Strict no-logs policy</li>
              <li>Access blocked content</li>
            </ul>
          </div>
          <div className="btn-wrapper">
            <a className="card-btn" href="/prices">
              Get Plus
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default secondPage;
