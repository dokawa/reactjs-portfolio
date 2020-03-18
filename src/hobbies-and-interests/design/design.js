import React, { Component } from 'react';
import VideoPlayer from 'hobbies-and-interests/video-player';
import ImageFrame from 'hobbies-and-interests/image-frame'
import VideosAndThumbnails from 'assets/videos/index.js';
import 'hobbies-and-interests/design/design.css';

class Design extends Component {

	 constructor (props) {
	 	super(props)
	    this.state = {
	      playingVideo: "",
	      showingImage: ""
	    };
	 }


	buildThumbnailElement(imageName) {
		return (<div className="tile">
					<div class="tile__element" onClick={ 
			        	() => {
			        		console.log(this.convertThumbnailNameToVideoName(imageName))
			    			this.setState({ playingVideo: this.convertThumbnailNameToVideoName(imageName) })	
			    			
			    		}}>
						<div className="play_button">
							<svg version="1.1" id="play" x="0px" y="0px" height="60px" width="60spx" viewBox="0 0 100 100">
  								<path class="stroke-solid" fill="none" stroke="#ffffff" d="M49.9,2.5C23.6,2.8,2.1,24.4,2.5,50.4C2.9,76.5,24.7,98,50.3,97.5c26.4-0.6,47.4-21.8,47.2-47.7C97.3,23.7,75.7,2.3,49.9,2.5"/>
 								<path class="icon" fill="#ffffff" d="M38,69c-1,0.5-1.8,0-1.8-1.1V32.1c0-1.1,0.8-1.6,1.8-1.1l34,18c1,0.5,1,1.4,0,1.9L38,69z"/>
							</svg>
						</div>
				        <div className="tile__media" >
				            <img className="tile__img" src= { VideosAndThumbnails[imageName]} alt=""  />
				        </div>
				    </div>
			        <div id="video" className="tile__details">
			            <div className="tile__title">
			                { this.convertThumbnailNameToVideoName(imageName) }
			            </div>
			        </div>
			     </div>)
	}

	buildImageElement(imageName) {
		return (<div className="tile">
					<div class="tile__element" onClick={ 
			        	() => {
			        		console.log(this.convertThumbnailNameToVideoName(imageName))
			    			this.setState({ playingVideo: this.convertThumbnailNameToVideoName(imageName) })	
			    			
			    		}}>
						<div className="play_button">
							<svg version="1.1" id="play" x="0px" y="0px" height="60px" width="60spx" viewBox="0 0 100 100">
							</svg>
						</div>
				        <div className="tile__media" >
				            <img className="tile__img" src= { VideosAndThumbnails[imageName]} alt=""  />
				        </div>
				    </div>
			        <div id="image" className="tile__details">
				        <div className="tile__title">
				            { this.convertThumbnailNameToVideoName(imageName) }
				        </div>
			        </div>
				</div>)
	}
	
	convertThumbnailNameToVideoName(imageName) {
		return this.upperCaseFirstLetter(imageName.replace("Thumbnail", ""))
	}

	upperCaseFirstLetter(name) {
		return name.charAt(0).toUpperCase() + name.slice(1);
	}


	buildVideo() {
		return (<div>{ <VideoPlayer resetPlayer={ () => this.setState({ playingVideo: "" })} videoName={ this.state.playingVideo }  /> }</div>)
	}


	buildImage() {
		return (<div>{ <ImageFrame resetPlayer={ () => this.setState({ showingImage: "" })} imageName={ this.state.showingImage }  /> }</div>)
	}


	render() {
		if (this.state.playingVideo) {
			return( this.buildVideo() )
		}
		else {

		return(
			<div className="contain">

			  <div className="row">
			    <div className="row__inner">

			      { this.buildThumbnailElement("DicedThumbnail") }
			      { this.buildThumbnailElement("N0ughtThumbnail") }
				  { this.buildThumbnailElement("SpeakerThumbnail") }
				  { this.buildImageElement("NeverBeGameOver") }
				  { this.buildImageElement("N0ughtBf3") }
			    
			    </div>
			  </div>

			</div>
		)
		}
	}
}



export default Design;