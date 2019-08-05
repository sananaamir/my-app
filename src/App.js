import React from 'react';
import './App.css';
import { BrowserRouter, Route } from "react-router-dom";
import Home from './components/home';
import NavigationBar from './components/navbar';

function App() {
  return (
    <BrowserRouter>
      <div>
        <NavigationBar></NavigationBar>

        <hr />

        <Route exact path="/" component={Home} />
      </div>
    </BrowserRouter>
  );
}

export default App;
