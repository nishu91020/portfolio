import React from 'react';
import Home from '../src/screens/Home';
import Projects from '../src/screens/Projects';
import Skills from '../src/screens/Skills';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
const app = () => {
    return (
        <Router>
            <Route exact path="/">
                <Home />
            </Route>
            <Route exact path="/projects">
                <Projects />
            </Route>
            <Route exact path="/Skills">
                <Skills />
            </Route>
        </Router>
    );
};

export default app;
