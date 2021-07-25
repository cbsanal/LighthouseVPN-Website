import Navbar from "./components/Navbar";
import About from "./pages/About";
import Features from "./pages/Features";
import Prices from "./pages/Prices";
import Support from "./pages/Support";
import Footer from "./components/Footer";
import { Route, Switch } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Script from "@gumgum/react-script-tag";

function App() {
  const location = useLocation();
  return (
    <div>
      <Navbar />
      <Switch location={location} key={location.pathname}>
        <Route path="/" exact>
          <About />
          <Script src="./lightFollow.js" type="text/javascript" async />
        </Route>
        <Route path="/features" exact>
          <Features />
        </Route>
        <Route path="/prices" exact>
          <Prices />
        </Route>
        <Route path="/support" exact>
          <Support />
        </Route>
      </Switch>
      <Footer />
      <Script src="./hamburger.js" type="text/javascript" async />
    </div>
  );
}

export default App;
