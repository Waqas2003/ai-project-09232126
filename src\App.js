import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Home from './Home';
import PowerPlants from './PowerPlants';
import Employees from './Employees';
import News from './News';

function App() {
    return (
        <BrowserRouter>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/power-plants">Power Plants</Link></li>
                    <li><Link to="/employees">Employees</Link></li>
                    <li><Link to="/news">News</Link></li>
                </ul>
            </nav>
            <Route path="/" exact component={Home} />
            <Route path="/power-plants" component={PowerPlants} />
            <Route path="/employees" component={Employees} />
            <Route path="/news" component={News} />
        </BrowserRouter>
    );
}

export default App;