import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

function Navbar() {
  const { pathname } = useLocation();
  return (
    <nav className="navbar">
      <Link className="logo-wrapper" to="/">
        <img id="logo-img" src="./icon/logo.svg" alt="logo-img" />
        <h3 className="head-line">LighthouseVPN</h3>
      </Link>
      <div className="links-wrapper">
        <ul className="links">
          <li
            style={pathname === "/" ? { borderBottom: "2px solid white" } : {}}
          >
            <Link to="/">About</Link>
          </li>
          <li
            style={
              pathname === "/features"
                ? { borderBottom: "2px solid white" }
                : {}
            }
          >
            <Link to="/features">Features</Link>
          </li>
          <li
            style={
              pathname === "/prices" ? { borderBottom: "2px solid white" } : {}
            }
          >
            <Link to="/prices">Prices</Link>
          </li>
          <li
            style={
              pathname === "/support" ? { borderBottom: "2px solid white" } : {}
            }
          >
            <Link to="/support">Support</Link>
          </li>
        </ul>
      </div>
      <div className="hamburger-wrapper">
        <span className="menu">MENU</span>
        <div className="hamburger">
          <span className="line1 line"></span>
          <span className="line2 line"></span>
          <span className="line3 line"></span>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
