import React, { Component } from 'react';
import Timeline from '../timeline/timeline';
import BuildIcon from '../assets/images/build - 512 x 512.png';
import WallpaperIcon from '../assets/images/wallpaper - 512 x 512.png';
import CounterIcon from '../assets/images/counter - 512 x 512.png';
import './personal-projects.css'


class PersonalProjects extends Component {
	constructor(props) {
  		super(props);

  		this.state = { entries: [
  			{ title: "Build LOL 2019", year: "2016 - 2019", text: "Participou do desenvolvimento do aplicativo Android “Build LOL 2018”\
				Aplicativo que guia os jogadores de “League of Legends” ao apresentar uma escolha padrão de\
				itens que eles podem comprar para cada personagem do jogo\
				Detalhes da “Play Store”: 4.66 estrelas de 1862 avaliações e 2673 usuários ativos." },

	    	{ title: "Wallpaper League 2019", year: "2016 - 2019", text: "Participou do desenvolvimento do aplicativo Android \“Wallpaper LOL 2018\”\
				Aplicativo que auxilia os usuários a encontrar e colocar as imagens dos personagens de \“League\
				of Legends\” como wallpaper do smartphone\
				Criou a conexão do aplicativo com a API do jogo com Glide para baixar as imagens\
				Extendeu uma biblioteca Android para edição de imagens utilizando GPU, implementando função\
				de ajuste de cor, saturação e brilho (hue, brightness, saturation)\
				Detalhes da “Play Store”: 4.60 estrelas de 594 avaliações e 985 usuários ativos" },

  			{ title: "Counter LOL 2019", year: "2016 - 2019", text: "Participou do desenvolvimento do aplicativo Android \“Counter LOL 2019\”\
				Aplicativo que ajuda o jogador a escolher a melhor combinação no jogo “League of Legends”\
				Criou a infraestrutura de votação utilizando instância EC2 (Elastic Computing Cloud) e RDS\
				(Relational Database Service) \
				Detalhes da “Play Store”: 4.14 estrelas de 562 avaliações e 832 usuários ativos" }

  		],
  			title: "PROJETOS PESSOAIS" };
  	}


	render() {
		return(
			<div>
				<div>
					<div class="title">{ this.state.title }</div>
				</div>
				<div class="container">
					<div class="project">
						<div>{ this.state.entries[0].title }</div>
						<div><img class="icon" src={ BuildIcon }/></div>
					</div>
					<div class="project">
						<div>{ this.state.entries[1].title }</div>
						<div><img class="icon" src={ WallpaperIcon }/></div>
					</div>
					<div>
						<div>{ this.state.entries[2].title }</div>
						<div><img class="icon" src={ CounterIcon }/></div>
					</div>
				</div>

			</div>

		);
	}

}

export default PersonalProjects;