import Project from './Project';
class Projects extends React.Component {
	state = {};

	projectsList = this.state.done.map((project, idx) => {
		return (
			<Project
				name={project.name}
				desc={project.description}
				status={project.status}
				src={project.img_src}
				stack={project.stack}
				url={project.url}
				githubUrl={project.githubUrl}
			/>
		);
	});

	render() {
		return <section>{this.projectsList}</section>;
	}
}

export default Projects;
