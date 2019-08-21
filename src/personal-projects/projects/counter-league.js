import React, { Component } from 'react';
import AndroidApp from './android-app';
import MainScreenScreenshot from '../../assets/images/league-apps-screenshots/counter-league-screenshots/counter_league_main_screen.png';
import CharacterCounterScreenshot from '../../assets/images/league-apps-screenshots/counter-league-screenshots/counter_league_character_counters.png';

class CounterLeague extends Component {
	constructor(props) {
  		super(props);

		this.state = 
			{ title: "Counter LOL 2019", year: "2016 - 2019", text: "Participou do desenvolvimento do aplicativo Android \“Counter LOL 2019\”\
				Aplicativo que ajuda o jogador a escolher a melhor combinação no jogo “League of Legends”\
				Criou a infraestrutura de votação utilizando instância EC2 (Elastic Computing Cloud) e RDS\
				(Relational Database Service) \
				Detalhes da “Play Store”: 4.14 estrelas de 562 avaliações e 832 usuários ativos" };

	}

	render() {
		return (
			<div>
				<AndroidApp title = { this.state.title } year = { this.state.year } description = { this.state.description }/>
				<img src={ MainScreenScreenshot } />
				<img src={ CharacterCounterScreenshot } />
			</div>
		);
	}
}

export default CounterLeague;