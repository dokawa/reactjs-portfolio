import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './header/header';
import Timeline from './timeline/timeline';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function Index() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}

class App extends Component {
  render() {
    return (
    <div>
      <Header></Header>
      <Timeline/>
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about/">About</Link>
              </li>
              <li>
                <Link to="/users/">Users</Link>
              </li>
            </ul>
          </nav>

          <Route path="/" exact component={ Index } />
          <Route path="/about/" component={About} />
          <Route path="/users/" component={Users} />
        </div>
      </Router>
    </div>
  );
  }
}

export default App;
