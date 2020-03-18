import React, { Component } from 'react';
import AndroidApp from 'personal-projects/projects/android-app';
import MainScreenScreenshot from 'assets/images/league-apps-screenshots/counter-league-screenshots/counter_league_main_screen.png';
import CharacterCounterScreenshot from 'assets/images/league-apps-screenshots/counter-league-screenshots/counter_league_character_counters.png';

class CounterLeague extends Component {
	constructor(props) {
  		super(props);

		this.state = 
			{ title: "Counter League 2019", year: "2016 - 2019", description: "Participou do desenvolvimento do aplicativo Android \“Counter League 2019\”\nAplicativo que ajuda o jogador a escolher a melhor combinação no jogo “League of Legends”\Criou a infraestrutura de votação utilizando instância EC2 (Elastic Computing Cloud) e RDS\
				(Relational Database Service) \nDetalhes da “Play Store”: 4.14 estrelas de 562 avaliações e 832 usuários ativos" };
		}

	render() {
		return (
				<AndroidApp title = { this.state.title } year = { this.state.year } description = { this.state.description } image_list = { [MainScreenScreenshot, CharacterCounterScreenshot] }/>
		);
	}
}

export default CounterLeague;