import React from 'react';
import { BrowserRouter as Router, Route,} from "react-router-dom";
import './App.css';
import Navbar from './Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Education from './pages/Education';
import Experience from './pages/Experience';


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Route basename = "/elizabethwseto" exact path="/" component={Home} />
        <Route basename = "/elizabethwseto" exact path="/about" component = {About} />
        <Route basename = "/elizabethwseto" exact path="/education" component = {Education} />
        <Route basename = "/elizabethwseto" exact path="/experience" component = {Experience} />
      </div>
    </Router>
  )
}

export default App;
