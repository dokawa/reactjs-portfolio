import React, { Component } from 'react';
import logo from 'logo.svg';
import 'App.css';
import Header from 'header/header';
import Timeline from 'timeline/timeline';
import Background from 'background/background';
import ContactInfo from 'contact-info/contact-info';
import PersonalInfo from 'personal-info/personal-info';
import Experience from 'experience/experience';
import PersonalProjects from 'personal-projects/personal-projects';
import HobbiesAndInterests from 'hobbies-and-interests/hobbies-and-interests';
import Education from 'education/education';
import Footer from 'footer/footer';
import Design from 'hobbies-and-interests/design/design';
import Reading from 'hobbies-and-interests/reading/reading';
import Investing from 'hobbies-and-interests/investing/investing';
import Karate from 'hobbies-and-interests/karate/karate';
import BuildLeague from 'personal-projects/projects/build-league'
import WallpaperLeague from 'personal-projects/projects/wallpaper-league'
import CounterLeague from 'personal-projects/projects/counter-league'
import InstagramPoster from 'personal-projects/projects/instagram-poster'
import KnowledgeAndSkills from 'knowledge-and-skills/knowledge-and-skills'
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
          <Route path="/knowledge-and-skills/" component={ KnowledgeAndSkills } />
          <Route path="/hobbies-and-interests/" component={ HobbiesAndInterests } />
          <Route path="/hobbies-and-interests/design" exact component={ Design } />
          <Route path="/hobbies-and-interests/reading" exact component={ Reading } />
          <Route path="/hobbies-and-interests/investing" exact component={ Investing } />
          <Route path="/hobbies-and-interests/karate" exact component={ Karate } />
          <Route path="/personal-projects/build_league" exact component={ BuildLeague } />
          <Route path="/personal-projects/wallpaper_league" exact component={ WallpaperLeague } />
          <Route path="/personal-projects/counter_league" exact component={ CounterLeague } />
          <Route path="/personal-projects/instagram_poster" exact component={ InstagramPoster } />
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
