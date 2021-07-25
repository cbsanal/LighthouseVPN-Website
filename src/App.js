import Navbar from "./components/Navbar";
import About from "./pages/About";
import Features from "./pages/Features";
import Prices from "./pages/Prices";
import Support from "./pages/Support";
import Footer from "./components/Footer";
import { Route, Switch } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { Helmet } from "react-helmet";

function App() {
  const location = useLocation();
  return (
    <div>
      <Navbar />
      <Switch location={location} key={location.pathname}>
        <Route path="/" exact>
          <About />
          <Helmet>
            <script src="./lightFollow.js"></script>
          </Helmet>
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
      <Helmet>
        <script src="./hamburger.js"></script>
      </Helmet>
    </div>
  );
}

export default App;
