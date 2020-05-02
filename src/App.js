import React from 'react';
import { HashRouter as Router, Route } from "react-router-dom";
import Index from './pages/Index';
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact"

function App() {
  return (
    <Router>
        <Route exact path= "/" component={Index}></Route>
        <Route exact path= "/about" component={About}></Route>
        <Route exact path= "/portfolio" component={Portfolio}></Route>
        <Route exact path= "/Contact" component={Contact}></Route>
    </Router>
  );
}

export default App;
