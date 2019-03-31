import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './header/header';
import Timeline from './timeline/timeline';
import Background from './background/background';
import ContactInfo from './contact-info/contact-info';
import PersonalInfo from './personal-info/personal-info';
// import Footer from './footer/footer';
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
          <Route path="/personal-projetcs/" component={ Users } />
          <Route path="/education/" component={ Users } />
          <Route path="/knowledge-and-skills/" component={ Users } />
          <Route path="/hobbies-and-interests/" component={ Users } />
        </div>
      </Router>
      { /* <Footer/> */ }
      { <ContactInfo/> }
      { <PersonalInfo/> }
    </div>
  );
  }
}

export default App;
