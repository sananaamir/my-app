import React from 'react';
import './App.css';
import { BrowserRouter, Route, Link } from "react-router-dom";
import Home from './components/home';
import About from './components/about';
import ContactMe from './components/contact-me'
import NavigationBar from './components/navbar';

function App() {
  return (
    <BrowserRouter>
      <div>
        <NavigationBar></NavigationBar>

        <hr />

        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact-me" component={ContactMe} />
      </div>
    </BrowserRouter>
  );
}

export default App;
