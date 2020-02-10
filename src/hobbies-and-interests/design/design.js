import React, { Component } from 'react';
import VideoPlayer from '../video-player';
import ImageFrame from '../image-frame'
import VideosAndThumbnails from '../../assets/videos/index.js';
import './design.css';

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
					<div class="tile__element">
						<div className="play_button">  </div>
				        <div className="tile__media" >
				          <img className="tile__img" src= { VideosAndThumbnails[imageName]} alt=""  />
				        </div>
				        

				      
				    </div>
			        <div id="video" className="tile__details" onClick={ 
			        	() => {
			        		console.log(this.convertThumbnailNameToVideoName(imageName))
			    			this.setState({ playingVideo: this.convertThumbnailNameToVideoName(imageName) })	
			    			
			    		}}>
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

	buildImageElement(imageName) {
				return (<div className="tile">
			        <div className="tile__media" >
			          <img className="tile__img" src= { VideosAndThumbnails[imageName]} alt=""  />
			        </div>
			        <div id="image" className="tile__details" onClick={ 
			        	() => {
			        		console.log(this.convertThumbnailNameToVideoName(imageName))
			    			this.setState({ playingVideo: this.convertThumbnailNameToVideoName(imageName) })	
			    			
			    		}}>
			          <div className="tile__title">
			            { this.convertThumbnailNameToVideoName(imageName) }
			          </div>
			        </div>
			      </div>)
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