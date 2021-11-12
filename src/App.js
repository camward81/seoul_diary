import React from "react";
//Styles
import styles from "./styles/app.scss";
//Pages
import Intro from "./pages/Intro";
import Old from "./pages/Old";
import New from "./pages/New";
//Components
import Nav from "./components/Nav";
//Router
import { Switch, Route, useLocation } from "react-router-dom";
//Animation
import { AnimatePresence } from "framer-motion";
//Scroll
import ScrollTop from "./components/ScrollTop";

function App() {
  
  const location = useLocation();

  return (
    <div className="App" styles={styles}>
      <Nav />
      <AnimatePresence exitBeforeEnter>
        <ScrollTop />
        <Switch location={location} key={location.pathname}>
          <Route path="/" exact>
            <Intro />
          </Route>
          <Route path="/old" exact>
            <Old />
          </Route>
          <Route path="/new" exact>
            <New />
          </Route>
        </Switch>
      </AnimatePresence>
    </div>
  );
}

export default App;
