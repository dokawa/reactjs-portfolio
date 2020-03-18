import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Timeline from 'timeline/timeline';
import BuildIcon from 'assets/images/build - 512 x 512.png';
import WallpaperIcon from 'assets/images/wallpaper - 512 x 512.png';
import CounterIcon from 'assets/images/counter - 512 x 512.png';
import InstagramIcon from 'assets/images/instagram.png';
import BuildLeague from 'personal-projects/projects/build-league'
import 'personal-projects/personal-projects.css'


class PersonalProjects extends Component {
	constructor(props) {
  		super(props);

  		this.state = { entries: [
  			{ title: "Build LOL 2019" },
	    	{ title: "Wallpaper LOL 2019" },
  			{ title: "Counter LOL 2019" },
			{ title: "Instagram Poster"}
  		],
  			title: "PROJETOS PESSOAIS" };
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
							<div><img class="icon" src={ BuildIcon }/></div>
						</div>
					</Link>
					<Link to="/personal-projects/wallpaper_league/">
						<div class="project-icon">
							<div class="personal-projects-element-title">{ this.state.entries[1].title }</div>
							<div><img class="icon" src={ WallpaperIcon }/></div>
						</div>
					</Link>
					<Link to="/personal-projects/counter_league/">
						<div class="project-icon">
							<div class="personal-projects-element-title">{ this.state.entries[2].title }</div>
							<div><img class="icon" src={ CounterIcon }/></div>
						</div>
					</Link>
					<Link to="/personal-projects/instagram_poster/">
						<div class="project-icon">
							<div class="personal-projects-element-title">{ this.state.entries[3].title }</div>
							<div><img class="icon" src={ InstagramIcon }/></div>
						</div>
					</Link>
				</div>

			</div>

		);
	}

}

export default PersonalProjects;