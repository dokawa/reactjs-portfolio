import React, { Component } from 'react';
import Timeline from '../timeline/timeline'

class Experience extends Component {
	constructor(props) {
  		super(props);

  		this.state = { entries: [
  			{ year: "2019", text: "Criação de cluster Kubernetes utilizando Terraform e Ansible\n Deploy de infraestrutura de processamento de eventos\n Utilização de ferramentas de monitoração"},
  			{ year: "2018", text: "Implementação de stack ELK (Elastic Search, Logstash e Kibana) para visualização de logs\n Desenvolvimento de aplicação em Python para gerar dados simulados para verificação de arquitetura de processamento de eventos\n dImplementação de arquitetura de processamento de eventos utilizando Apache Flink e Kafka" },
	    	{ year: "2017", text: "Desenvolvimento de aplicação Apache Spark para identificar locais mais visitados utilizando dados de localização de aplicativo \n Desenvolvimento de aplicação Apache Spark utilizando API em java para clusterizar lugares mais visitados"  },
			{ year: "2016", text: "Participação no desenvolvimento de aplicativo Android de detecção de atividades (andando, correndo, parado, transporte, metrô, aeronave) \nutilizando sensores do celular (acelerômetro, proximidade, GPS) \nDesenvolvimento de bibliotecas java para a aplicação como módulo para identificação da casa e locais mais visitados, utilizando apenas dados de GPS e localização por Wi-fi" }
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