import React, { Component } from 'react';
import 'personal-projects/projects/instagram-poster.css';

class InstagramPoster extends Component {
	constructor(props) {
  		super(props);
  	}

	render() {
		return (
			<div class="project-wrapper">
				<div class="project-title">Instagram Poster</div>
				<div class="project-description">A Python project that automates an instagram account. It consists on five modules, scrapper, parser, uploader, poster and interactor</div>
				<div class="project-subtitle">Scrapper</div>
				<div class="project-description">An open-source instagram scrapper that downloads the images and the metadata of an Instagram account</div>
				<div class="project-subtitle">Parser</div>
				<div class="project-description">Parses the image metadata to get the credit of image and saves the image id and the author in a json. Images that doesn't have credit are filtered out</div>
				<div class="project-subtitle">Uploader</div>
				<div class="project-description">Uploads images to s3</div>
				<div class="project-subtitle">Poster</div>
				<div class="project-description">Posts a randomly selected image into the account, keeps track of posted images and choose an image caption
				It runs as a scheduled event on AWS lambda with randomization of time to add a human factor, then it downloads the random selected image from S3 and uploads into the account with 
				a caption randomly selected from a pre-made list
				It works interacting with Instagram private API</div>
				<div class="project-subtitle">Interactor</div>
				<div class="project-description">An open-source bot based on Selenium that like, follow and comment. It was configured to interact with travel accounts
				Result: 948 followers in 5 months decomissioned when instagram deprecated their private API
				Average of 50 likes per post 3 posts per day</div>
			</div>
		);
	}
}

export default InstagramPoster;