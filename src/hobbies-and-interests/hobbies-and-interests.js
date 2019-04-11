import React, { Component } from 'react';

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import ContactInfo from '../contact-info/contact-info';

class HobbiesAndInterests extends Component {
  render() {
    return (
    <div>
      <h1><Link to="/hobbies-and-interests/design/" class="anchor">Design</Link></h1>



      { /*<PersonalInfo/> */}
    </div>
  );
  }
}

export default HobbiesAndInterests;
