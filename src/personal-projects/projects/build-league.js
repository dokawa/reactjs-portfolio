import React, { Component } from 'react';
import AndroidApp from './android-app';
import MainScreenScreenshot from '../../assets/images/league-apps-screenshots/build-league-screenshots/build_league_main_screen.png';
import CharacterBuildScreenshotPartOne from '../../assets/images/league-apps-screenshots/build-league-screenshots/build_league_character_build_1.png';
import CharacterBuildScreenshotPartTwo from '../../assets/images/league-apps-screenshots/build-league-screenshots/build_league_character_build_2.png';
import CharacterBuildScreenshotPartThree from '../../assets/images/league-apps-screenshots/build-league-screenshots/build_league_character_build_3.png';

class BuildLeague extends Component {
	constructor(props) {
  		super(props);

		this.state = 
  			{ title: "Build LOL 2019", year: "2016 - 2019", description: "Participou do desenvolvimento do aplicativo Android \“Build LOL 2019\”\
				Aplicativo que guia os jogadores de “League of Legends” ao apresentar uma escolha padrão de\
				itens que eles podem comprar para cada personagem do jogo\
				Detalhes da “Play Store”: 4.66 estrelas de 1862 avaliações e 2673 usuários ativos." };
	}

	render() {
		return (
			<div>
				<AndroidApp title = { this.state.title } year = { this.state.year } description = { this.state.description }/>
				<img src={ MainScreenScreenshot } />
				<img src={ CharacterBuildScreenshotPartOne } />
				<img src={ CharacterBuildScreenshotPartTwo } />
				<img src={ CharacterBuildScreenshotPartThree } />
			</div>
		);
	}
}

export default BuildLeague;