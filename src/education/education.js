import React, { Component } from 'react';
import Timeline from '../timeline/timeline'

class Education extends Component {
	constructor(props) {
  		super(props);

  		this.state = { entries: [
  			{ year: "2018", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. \
				    Nulla et nulla non velit sagittis molestie sed a tellus. \
				    Etiam dui odio, tristique ac ornare id, dignissim et ex. \
				    Etiam mattis consequat ultrices. Curabitur lorem purus, \
				    faucibus sit amet faucibus at, aliquet ut leo. Fusce tempus mi vel nibh interdum,  \
	    			vitae vulputate mi accumsan. Nunc scelerisque ut nulla quis porta. In porttitor erat eget lacinia porta. " },
	    	{ year: "2019", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. \
				    Nulla et nulla non velit sagittis molestie sed a tellus. \
				    Etiam dui odio, tristique ac ornare id, dignissim et ex. \
				    Etiam mattis consequat ultrices. Curabitur lorem purus, \
				    faucibus sit amet faucibus at, aliquet ut leo. Fusce tempus mi vel nibh interdum,  \
	    			vitae vulputate mi accumsan. Nunc scelerisque ut nulla quis porta. In porttitor erat eget lacinia porta. "  },
	    	{ year: "2020", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. \
				    Nulla et nulla non velit sagittis molestie sed a tellus. \
				    Etiam dui odio, tristique ac ornare id, dignissim et ex. \
				    Etiam mattis consequat ultrices. Curabitur lorem purus, \
				    faucibus sit amet faucibus at, aliquet ut leo. Fusce tempus mi vel nibh interdum,  \
	    			vitae vulputate mi accumsan. Nunc scelerisque ut nulla quis porta. In porttitor erat eget lacinia porta. " }

  		] };
  	}


	render() {
		return(
			<Timeline entries = { this.state.entries }/>
		);
	}
}

export default Education;