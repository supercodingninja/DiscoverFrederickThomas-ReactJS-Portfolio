import "./App.css";
import React, { useState, useEffect } from "react";
import Preloader from "./components/Preloader";
// import Navbar from "";
import Home from "./components/Home/Home.tsx";
// import About from "";
// import Projects from "";
// import Footer from "";
// import Resume from "";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./index.scss";
import "bootstrap/dist/css/bootstrap.min.css";
// import Scroll from "";
function App() {
  const [load, upadateLoad] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      upadateLoad(false);
    }, 1200);
  }, []);
  return (
    <Router>
      <Preloader load={load} />
      <div className="App" id={load ? "no-scroll" : "scroll"}>
        <Navbar />
        <ScrollToTop />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="#project" component={Projects} />
          <Route path="#about" component={About} />
          <Route path="#resume" component={Resume} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;