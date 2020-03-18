import React, { Component } from 'react';

import 'hobbies-and-interests/reading/reading.css';

class Book extends Component {
	convert_title_to_cover_name(title) {
		return title.toLowerCase().replace('\'', '').split(' ').join('_');
		// return('BR');
	}

	get_path(title) {
	  	try {
	   		return require('assets/images/book-covers/' + this.get_jpg_name(title));
	  	} 
	  	catch (jpg_not_found_err) {
	  		try {
	   			return require('assets/images/book-covers/' + this.get_jpeg_name(title));
	   		}
	   		catch(no_image_err) {
	   			console.log('Image not found')
	   			return '';
	   		}
	   		// return require('assets/images/book-covers/blink.jpeg')
	  	}
	};

	get_jpg_name(title) {
		return this.convert_title_to_cover_name(this.props.book_title) + '.jpg';
	}

	get_jpeg_name() {
		return this.convert_title_to_cover_name(this.props.book_title) + '.jpeg';
	}

	render() {
		return(
			<div class="contain">
				<a href={ this.props.book_link }>
					<img src={ this.get_path(this.props.book_title) } />
				</a>
			</div>
		)
	}


}

export default Book;