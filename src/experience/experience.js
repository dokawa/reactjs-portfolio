import React, { Component } from 'react';
import Timeline from 'timeline/timeline'

class Experience extends Component {
	constructor(props) {
  		super(props);

  		this.state = { entries: [
  			{ year: "2019 - Banco Bradesco SA", text: "Kubernetes cluster creation using Terraform and Ansible\nDeploy of Event Processing infrastructure to Kubernetes cluster\nDeploy of monitoring tools (Prometheus, Graphana, Istio) to Kubernetes cluster"},
  			{ year: "2018 - Scopus Soluções em TI LTDA", text: "Implementation of ELK stack (Elastic Search, Logstash and Kibana) for log visualization\nImplemented Event Processing and Complex Event Processing architecture using Apache Flink and Kafka" },
	    	{ year: "2017 - Scopus Soluções em TI LTDA", text: "Developed Apache Spark appllication to identify most visited places using smartphone app location data\nDeveloped Apache Spark application using java API to cluter most visited places"  },
			  { year: "2016 - Scopus Soluções em TI LTDA", text: "Co-developed an app to identify activities (walking, running, idle, in transportation, subway, airplane) using smartphone sensors (accelerometer, proximity, GPS)\nDeveloped java library to identify house and most visited places using only GPS and Wi-fi location data" }
  			],
  			title: "EXPERIENCE",
  			subtitle: "",
  		};
  	}


	render() {
		return(
			<Timeline entries = { this.state.entries } title = { this.state.title } subtitle = { this.state.subtitle }/>
		);
	}



}

export default Experience;