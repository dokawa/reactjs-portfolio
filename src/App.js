import React, { Component } from 'react';
import 'App.css';
import Header from 'header/header';
import Background from 'background/background';
import ContactInfo from 'contact-info/contact-info';
import Experience from 'experience/experience';
import PersonalProjects from 'personal-projects/personal-projects';
import HobbiesAndInterests from 'hobbies-and-interests/hobbies-and-interests';
import Education from 'education/education';
import Footer from 'footer/footer';
import KnowledgeAndSkills from 'knowledge-and-skills/knowledge-and-skills'
import { BrowserRouter as Router, Route, Link, Redirect } from "react-router-dom";


class App extends Component {
  render() {
    return (
    <div>
      <Background/>
      <Router>
        <Header></Header>
        <div>
          <Route path="/" exact component={ Experience } />
          <Route path="/experience/" exact component={ Experience } />
          <Route path="/personal-projects/" component={ PersonalProjects } />
          <Route path="/education/" component={ Education } />
          <Route path="/knowledge-and-skills/" component={ KnowledgeAndSkills } />
          <Route path="/hobbies-and-interests/" component={ HobbiesAndInterests } />
        </div>
      </Router>

      { <ContactInfo/> }
      { /*<PersonalInfo/> */}
      { <Footer/> }
    </div>
  );
  }
}

export default App;
