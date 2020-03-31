import React from 'react';
import './App.css';
import { BrowserRouter, Route } from "react-router-dom";
import Home from './components/home';
import FlaskApiResult from './components/flask-api-result'
import NavigationBar from './components/navbar';

function App() {
  return (
    <BrowserRouter>
      <div>
        <NavigationBar></NavigationBar>

        <hr />

        <Route exact path="/" component={Home} />
        <Route exact path="/flask-api-result" component={FlaskApiResult} />
      </div>
    </BrowserRouter>
  );
}

export default App;
