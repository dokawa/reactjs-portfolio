import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect, Link } from "react-router-dom";
import BuildIcon from 'assets/images/build - 512 x 512.png';
import WallpaperIcon from 'assets/images/wallpaper - 512 x 512.png';
import CounterIcon from 'assets/images/counter - 512 x 512.png';
import InstagramIcon from 'assets/images/instagram.png';
import BuildLeague from 'personal-projects/projects/build-league'
import WallpaperLeague from 'personal-projects/projects/wallpaper-league'
import CounterLeague from 'personal-projects/projects/counter-league'
import InstagramPoster from 'personal-projects/projects/instagram-poster'
import 'personal-projects/personal-projects.css'


class PersonalProjects extends Component {
	constructor(props) {
  		super(props);

  		this.state = { entries: [
  			{ title: "Build League 2019" },
	    	{ title: "Wallpaper League 2019" },
  			{ title: "Counter League 2019" },
			{ title: "Instagram Bot"}
  		],
  			title: "PERSONAL PROJECTS" };
  	}


	render() {
		return(
			<div>
				<div>
					<div class="title">{ this.state.title }</div>
				</div>
				<div class="personal-projects-wrapper">
					<Link to="/personal-projects/build_league/">
						<div class="project-icon">
							<div class="personal-projects-element-title">{ this.state.entries[0].title }</div>
							<div><img class="icon" src={ BuildIcon } alt="Build icon"/></div>
						</div>
					</Link>
					<Link to="/personal-projects/wallpaper_league/">
						<div class="project-icon">
							<div class="personal-projects-element-title">{ this.state.entries[1].title }</div>
							<div><img class="icon" src={ WallpaperIcon } alt="Wallpaper icon"/></div>
						</div>
					</Link>
					<Link to="/personal-projects/counter_league/">
						<div class="project-icon">
							<div class="personal-projects-element-title">{ this.state.entries[2].title }</div>
							<div><img class="icon" src={ CounterIcon } alt="Counter icon"/></div>
						</div>
					</Link>
					<Link to="/personal-projects/instagram_poster/">
						<div class="project-icon">
							<div class="personal-projects-element-title">{ this.state.entries[3].title }</div>
							<div><img class="icon" src={ InstagramIcon } alt="Instagram icon"/></div>
						</div>
					</Link>
				</div>


				<Router>
				    <Route path="/personal-projects/build_league" exact component={ BuildLeague } />
		            <Route path="/personal-projects/wallpaper_league" exact component={ WallpaperLeague } />
		            <Route path="/personal-projects/counter_league" exact component={ CounterLeague } />
		            <Route path="/personal-projects/instagram_poster" exact component={ InstagramPoster } />
		            <Redirect to="/personal-projects/build_league"/> 
		        </Router>
			</div>

		);
	}

}

export default PersonalProjects;