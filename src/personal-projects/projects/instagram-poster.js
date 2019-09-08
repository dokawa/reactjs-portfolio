import React, { Component } from 'react';
import AndroidApp from './android-app';
import './android-app.css'

class InstagramPoster extends Component {
	constructor(props) {
  		super(props);

		this.state = 
			{ title: "InstagramPoster", year: "2019", description: "Participou do desenvolvimento do aplicativo Android \“Counter LOL 2019\”\nAplicativo que ajuda o jogador a escolher a melhor combinação no jogo “League of Legends”\nCriou a infraestrutura de votação utilizando instância EC2 (Elastic Computing Cloud) e RDS\n(Relational Database Service) \nDetalhes da “Play Store”: 4.14 estrelas de 562 avaliações e 832 usuários ativos" };

			}

	render() {
		return (
			<div class="android-app-wrapper">
				<AndroidApp title = { this.state.title } year = { this.state.year } description = { this.state.description }/>
			</div>
		);
	}
}

export default InstagramPoster;