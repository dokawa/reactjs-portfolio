import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './header/header';
import Timeline from './timeline/timeline';
import Background from './background/background';
import Footer from './footer/footer';
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
      <Background/>

      <Router>
        <Header></Header>
        <div>
          <Route path="/" exact component={ Index } />
          <Route path="/experience/" exact component={ Timeline } />
          <Route path="/users/" component={Users} />
        </div>
      </Router>
      <Footer/>
    </div>
  );
  }
}

export default App;
