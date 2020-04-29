import React, { Component } from 'react';
import Instagram from 'assets/images/instagram.jpeg';
import 'personal-projects/projects/instagram-poster.css';

class InstagramPoster extends Component {
	constructor(props) {
  		super(props);
  	}

	render() {
		return (
			<div class="project-wrapper">
				<div class="project-title">Instagram Bot</div>
				<div class="project-text">A Python project that automates an instagram account by posting images and interacting with users</div>
				<div class="project-text">948 followers in 5 months decomissioned when instagram declared the war on bots</div>
				<div class="project-text">Average of 60 likes per post 3 posts per day</div>
				<img class="instagram-screenshot" src= { Instagram } />
				<div class="project-text">It consists on five modules, scrapper, parser, uploader, poster and interactor</div>
				<div class="project-text"><b>Scrapper: </b>An open-source instagram scrapper that downloads the images and the metadata (comments, followers, number of likes, etc) of a given Instagram account</div>
				<div class="project-text"><b>Parser: </b>Parses the image metadata to get the credit of image and saves the image id and the author in a json. Images that doesn't have credit are filtered out to prevent problems.</div>
				<div class="project-text"><b>Uploader: </b>Uses the S3 API to upload images to AWS S3</div>
				<div class="project-text"><b>Poster: </b>Posts a randomly selected image into the account, keeps track of posted images and choose an image caption
				It runs as a scheduled event on AWS lambda with randomization of time to add a human factor, then it downloads the random selected image from S3 and uploads into the account with 
				a caption randomly selected from a pre-made list
				It works interacting with Instagram private API</div>
				<div class="project-text"><b>Interactor: </b>An open-source bot based on Selenium that like, follow and comment. It was configured to interact with travel accounts. I started to refactor the code after reading Refactoring by Martin Fowler, Clean Code by Uncle Bob, and TDD by Kent Beck, but Instagram made bots useless and so the code.</div>
			</div>
		);
	}
}

export default InstagramPoster;