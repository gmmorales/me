import React from "react";
import { Switch, Route, HashRouter } from "react-router-dom";
import Hero from "./components/Hero";
import About from "./components/About";
import Timeline from "./components/Timeline";
import Education from "./components/Education"
import Portfolio from "./components/Portfolio";
import Contactus from "./components/Contactus";
import Layout from "./components/Layout";
import Error404 from "./components/Error404";

const App = () => {
  return (
    <HashRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component={Hero} />
          <Route exact path="/about" component={About} />
          <Route exact path="/timeline" component={Timeline} />
          <Route exact path="/education" component={Education} />
          <Route exact path="/portfolio" component={Portfolio} />
          <Route exact path="/contact" component={Contactus} />
          <Route path="*" component={Error404} />
        </Switch>
      </Layout>
    </HashRouter>
  );
};

export default App;
