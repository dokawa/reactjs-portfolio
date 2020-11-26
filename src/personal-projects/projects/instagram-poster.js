import React, { Component } from 'react';
import Instagram from 'assets/images/personal-projects/instagram.jpeg';
import 'personal-projects/projects/instagram-poster.css';

class InstagramPoster extends Component {

	render() {
		return (
			<div class="project-wrapper">
				<div class="project-title">Instagram Bot</div>
				<div class="project-text">A Python project that automates an instagram account by posting images and interacting with users.</div>
				<div class="project-text">948 followers in 5 months decomissioned when instagram declared the war on bots. 
				Retaken with 790 followers after one year, with the possibility of using smartphone automation instead of Selenium. (it's easier to evade detection with the app than in browser)</div>
				<img class="instagram-screenshot" src= { Instagram } alt="Instagram screenshot" />
				<div class="project-text">It consists on five modules, scrapper, parser, fetch relationship, filter users and smartphone automator. </div>
				<div class="project-text"><b>Scrapper: </b>an open-source instagram scrapper that downloads the images and the metadata 
				(comments, followers, number of likes, etc) of a given Instagram account</div>
				<div class="project-text"><b>Parser: </b>parses the image metadata to get the credit of image and saves the image id and 
				the author in a json. Images that doesn't have credit are filtered out to prevent authorship problems. It works interacting with Instagram private API</div>
				<div class="project-text"><b>Fetch relationship: </b>fetch the following, followers and active users of a given account using Selenium. It uses a disposable account in case it gets blocked. 
				It uses some code from old "Interactor" module.</div>
				<div class="project-text"><b>Filter users: </b>filter users by many settings mainly followers/following ratio.</div>
				<div class="project-text"><b>Smartphone automator: </b>uses uiautomator library to automate smartphone. It follows filtered users by 'Filter users' module,
				unfollow non followers and post images.</div>
				<div class="project-text"><b>Decomissioned modules</b></div>
				<div class="project-text"><b>Interactor: </b>an open-source bot based on Selenium that like, follow and comment. It was configured to interact with travel accounts. 
				I started to refactor the code after reading Refactoring by Martin Fowler, Clean Code by Uncle Bob, and TDD by Kent Beck. Decomissioned when any of these actions would trigger a block.</div>
				<div class="project-text"><b>Uploader: </b>uses the S3 API to upload images to AWS S3. Decomissioned when instagram deprecated their API.</div>
				<div class="project-text"><b>Poster: </b>posts a randomly selected image into the account, keeps track of posted images and choose an image caption
				It runs as a scheduled event on AWS lambda with randomization of time to add a human factor, then it downloads the random selected image from S3 and uploads into the account with 
				a caption randomly selected from a pre-made list. Decomissioned when Instagram deprecated their API.</div>
			</div>
		);
	}
}

export default InstagramPoster;