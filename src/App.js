import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Index from './pages/Index';
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact"

function App() {
  return (
    <Router>
        <Route exact path= "/portfolioreact/" component={Index}></Route>
        <Route exact path= "/portfolioreact/about" component={About}></Route>
        <Route exact path= "/portfolioreact/portfolio" component={Portfolio}></Route>
        <Route exact path= "/portfolioreact/Contact" component={Contact}></Route>
    </Router>
  );
}

export default App;
