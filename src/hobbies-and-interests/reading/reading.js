import React, { Component } from 'react';

import './reading.css';

class Reading extends Component {
	render() {
		return(
			<div class="contain">

			  <div class="row">
			    <div class="row__inner">

			      <div class="tile">
			        <div class="tile__media">
			          <img class="tile__img" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/70390/show-1.jpg" alt=""  />
			        </div>
			        <div class="tile__details">
			          <div class="tile__title">
			            Top Gear
			          </div>
			        </div>
			      </div>
			     </div>
			   </div>

			</div>
		)
	}
}

export default Reading;