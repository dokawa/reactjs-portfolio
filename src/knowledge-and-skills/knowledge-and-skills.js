import React, { Component } from 'react';
import SVG from 'react-inlinesvg'
import './knowledge-and-skills.css'
import AfterEffects from '../assets/images/knowledge-and-skills/after_effects.png';
import PremierePro from '../assets/images/knowledge-and-skills/premiere_pro.png';
import Photoshop from '../assets/images/knowledge-and-skills/photoshop.png';
import Python from '../assets/images/knowledge-and-skills/python.png';
import Java from '../assets/images/knowledge-and-skills/java.png';
import Kubernetes from '../assets/images/knowledge-and-skills/kubernetes.png';
import ELKStack from '../assets/images/knowledge-and-skills/elk.png';
import Terraform from '../assets/images/knowledge-and-skills/terraform.png';
import Git from '../assets/images/knowledge-and-skills/git.png';
import Grafana from '../assets/images/knowledge-and-skills/grafana.png';
import Prometheus from '../assets/images/knowledge-and-skills/prometheus.png';
import Flink from '../assets/images/knowledge-and-skills/flink.png';
import Kafka from '../assets/images/knowledge-and-skills/kafka.png';
import Istio from '../assets/images/knowledge-and-skills/istio.png';
import Spark from '../assets/images/knowledge-and-skills/spark.png';
import GitlabCI from '../assets/images/knowledge-and-skills/gitlab.png';
import Android from '../assets/images/knowledge-and-skills/android.png';
import Docker from '../assets/images/knowledge-and-skills/docker.png';
import Ansible from '../assets/images/knowledge-and-skills/ansible.png';
import AWS from '../assets/images/knowledge-and-skills/aws.png';


class KnowledgeAndSkills extends Component {
	render() {
		return(
			<div class="knowledge-and-skills-wrapper">
				{ this.buildKnowledgeAndSkillsGroup('Infraestructure as Code', [Terraform, Ansible]) }
				{ this.buildKnowledgeAndSkillsGroup('Nuvem', [AWS]) }
				{ this.buildKnowledgeAndSkillsGroup('Orchestração de containeres', [Kubernetes, Docker])}
				{ this.buildKnowledgeAndSkillsGroup('Monitoração', [Istio, Grafana, Prometheus, ELKStack])}
				{ this.buildKnowledgeAndSkillsGroup('DevOps', [GitlabCI, Git])}
				{ this.buildKnowledgeAndSkillsGroup('Processamento de Eventos', [Flink, Kafka])}
				{ this.buildKnowledgeAndSkillsGroup('Processamento distribuído', [Spark])}
				{ this.buildKnowledgeAndSkillsGroup('Linguagens de Programação', [Python, Java])}
								{ this.buildKnowledgeAndSkillsGroup('Front-end', [Android])}
				{ this.buildKnowledgeAndSkillsGroup('Design', [AfterEffects, PremierePro, Photoshop])}
			</div>
		)
	}

	buildKnowledgeAndSkillsGroup(title, image_list) {
		console.log(this.props.entries);
			return 	(<div class="knowledge-and-skills-element">
						<div class="knowledge-and-skills-title">{ title }</div>
						{ image_list.map((img, i) => <img class="knowledge-and-skills-icon" key={ i } src={ img } />) }
					</div>
			);
	}
}

export default KnowledgeAndSkills;