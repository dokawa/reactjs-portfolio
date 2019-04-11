import React, { Component } from 'react';
import Timeline from '../timeline/timeline'

class Experience extends Component {
	constructor(props) {
  		super(props);

  		this.state = { entries: [
  			{ year: "2018", text: "Implementação de stack ELK (Elastic Search, Logstash e Kibana) para visualização de logs \
			Desenvolvimento de aplicação em Python para gerar dados simulados para teste de carga em arquitetura de processamento de eventos \
			Implementação de arquitetura de processamento de eventos utilizando Apache Flink e Kafka" },
	    	{ year: "2017", text: "Desenvolvimento de aplicação Apache Spark para identificar locais mais visitados utilizando dados de localização de aplicativo \
			Desenvolvimento de aplicação Apache Spark utilizando API em java para clusterizar lugares mais visitados"  },
			{ year: "2016", text: "Participação no desenvolvimento de aplicativo Android de detecção de atividades (andando, correndo, parado, transporte, metrô, aeronave) \
  			utilizando sensores do celular (acelerômetro, proximidade, GPS) \
  			Desenvolvimento de bibliotecas java para a aplicação como módulo para identificação da casa e locais mais visitados, utilizando apenas dados de GPS e localização por Wi-fi" }
  			],
  			title: "EXPERIÊNCIA",
  			subtitle: "Scopus Soluções em TI LTDA"
  		};
  	}


	render() {
		return(
			<Timeline entries = { this.state.entries } title = { this.state.title } subtitle = { this.state.subtitle }/>
		);
	}

}

export default Experience;