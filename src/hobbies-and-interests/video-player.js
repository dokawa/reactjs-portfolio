import React, { Component } from 'react';


import VideosAndThumbnails from 'assets/videos/index.js';
import 'hobbies-and-interests/video-player.css';


class VideoPlayer extends Component {
  render() {
    return (
	    <div class="container">
		    <div id="videoModal" class="modal hide fade in" tabindex="-1" role="dialog" aria-labelledby="videoModalLabel" aria-hidden="false">
				  <div class="modal-header">
				    <button type="button" class="close full-height" data-dismiss="modal" aria-hidden="true" onClick={ this.props.resetPlayer }>X</button>
				    <h3>{ this.props.imageName }</h3>
				  </div>
				  <div class="modal-body"><iframe width="870" height="489" src={ VideosAndThumbnails[ this.props.videoName ] } frameborder="0" allowfullscreen=""></iframe></div>
				  <div class="modal-footer"></div>
			</div>
	    </div>
  	);
  }

}

export default VideoPlayer;
