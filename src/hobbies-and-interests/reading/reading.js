import React, { Component } from 'react';

import 'hobbies-and-interests/reading/reading.css';
import Book from 'hobbies-and-interests/reading/book';

class Reading extends Component {

	render() {
		return(
			<div class="contain">
				{ [
					 { book_title: "Clean Code", book_link: "Clean-Code-Handbook-Software-Craftsmanship-ebook/dp/B001GSTOAM" },
					 { book_title: "Clean Architecture", book_link: "Clean-Architecture-Craftsmans-Software-Structure-ebook/dp/B075LRM681/" },
					 { book_title: "TDD by Example", book_link: "Test-Driven-Development-Kent-Beck/dp/0321146530" },
					 { book_title: "Refactoring", book_link: "Refactoring-Improving-Design-Existing-Code/dp/0134757599" },
					 { book_title: "Building Microsservices Designing Fine Grained Systems", book_link: "Building-Microservices-Designing-Fine-Grained-Systems-ebook/dp/B00T3N7XB4/" },
					 { book_title: "Head First Statistics", book_link: "Head-First-Statistics-Brain-Friendly-English-ebook/dp/B00B797ELQ/" },
					 { book_title: "Head First Design Patterns", book_link: "Head-First-Design-Patterns-Freeman/dp/0596007124" },
					 { book_title: "The Phoenix Project", book_link: "Phoenix-Project-Helping-Business-English-ebook/dp/B078Y98RG8/" },
					 { book_title: "The Unicorn Project", book_link: "Unicorn-Project-Developers-Disruption-Thriving-ebook/dp/B07QT9QR41" },
					 { book_title: "Storytelling with Data", book_link: "Storytelling-Data-Visualization-Business-Professionals-ebook/dp/B016DHQSM2/" },
					 { book_title: "Don't Make Me Think", book_link: "Dont-Make-Think-Revisited-Usability-ebook/dp/B00HJUBRPG" },
					 { book_title: "Algorithms to Live By", book_link: "Algorithms-Live-Computer-Science-Decisions-ebook/dp/B015CKNWJI" },
					 { book_title: "Investimentos", book_link: "Investimentos-Mauro-Halfeld/dp/8576761599" },
					 { book_title: "The Intelligent Investor", book_link: "Intelligent-Investor-REV-Ed/dp/0060555661" },
					 { book_title: "O Jeito Peter Lynch de Investir", book_link: "jeito-Peter-Lynch-investir-estrat%C3%A9gias/dp/8557173148" },
					 { book_title: "The Four Hour Workweek", book_link: "4-Hour-Workweek-Expanded-Updated-Cutting-Edge-ebook/dp/B002WE46UW" },
					 { book_title: "Thinking Fast and Slow", book_link: "Thinking-Fast-Slow-Daniel-Kahneman/dp/0374533555" },
					 { book_title: "The Power of Habit", book_link: "Power-Habit-What-Life-Business/dp/081298160X" },
					 { book_title: "Smarter Faster Better", book_link: "Smarter-Faster-Better-Transformative-Productivity/dp/0812983599" },
					 { book_title: "The Art of War", book_link: "Art-War-Sun-Tzu/dp/0877735379" },
					 { book_title: "The Book of Five Rings", book_link: "Book-Five-Rings-Musashi-Miyamoto/dp/1590309847" },
					 { book_title: "The Prince", book_link: "PRINCE-Wisehouse-Classics-English-ebook/dp/B019YZVHUI" },
					 { book_title: "The Tipping Point", book_link: "Tipping-Point-Little-Things-Difference/dp/0316346624" },
					 { book_title: "Blink", book_link: "Blink-Power-Thinking-Without/dp/0316172324" },
					 { book_title: "Mindset", book_link: "Mindset-Carol-S-Dweck/dp/8547000240" },
					 { book_title: "Grit", book_link: "Grit-Power-Passion-Perseverance-English-ebook/dp/B019CGY2ZG" },
					 { book_title: "The Art of Happiness", book_link: "Art-Happiness-Handbook-Living/dp/1594488894" },
				     { book_title: "The Art of Happiness in a Troubled World", book_link: "Art-Happiness-Troubled-World/dp/0340794399" },
					 { book_title: "The Power of Myth", book_link: "Power-Myth-Joseph-Campbell/dp/0385418868" }
					].map((book_config, index) =>  <Book book_title = { book_config.book_title } book_link = { "https://www.amazon.com.br/" + book_config.book_link } key = { index } />) }
			</div>
		)
	}

}

export default Reading;