import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './header/header';
import Timeline from './timeline/timeline';
import Background from './background/background';
import ContactInfo from './contact-info/contact-info';
import PersonalInfo from './personal-info/personal-info';
import Experience from './experience/experience';
import PersonalProjects from './personal-projects/personal-projects';
import Education from './education/education';
import Footer from './footer/footer';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


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
          <Route path="/" exact component={ Users } />
          <Route path="/experience/" exact component={ Experience } />
          <Route path="/personal-projects/" component={ PersonalProjects } />
          <Route path="/education/" component={ Education } />
          <Route path="/knowledge-and-skills/" component={ Users } />
          <Route path="/hobbies-and-interests/" component={ Users } />
        </div>
      </Router>

      { <ContactInfo/> }
      { <PersonalInfo/> }
      { <Footer/> }
    </div>
  );
  }
}

export default App;
