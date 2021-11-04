import React from 'react';

import Project from './Project';

class Projects extends React.Component {
	state = {
		myProject: [
			{
				name: 'Instagram Clone',
				status: 'ongoing',
				id: 'num1',
				description:
					'A clone of the Instagram website made with Next.',
				stack: [
					'Next',
					'FireBase v9',
					'Recoil',
					'TailWind CSS',
				],
				url: 'https://github.com/SamanAtashi/instagram-clone',
				githubUrl:
					'https://github.com/SamanAtashi/instagram-clone',
			},
			{
				name: 'Book Store',
				status: 'Done',
				id: 'num2',
				description:
					'An SPA that displays the list of books and has the functionality to Add/Remove books from API.',
				stack: ['React', 'Redux', 'API'],
				url: 'https://github.com/SamanAtashi/BookStore-redux',
				githubUrl:
					'https://github.com/SamanAtashi/BookStore-redux',
			},
			{
				name: 'ToDo List',
				status: 'Done',
				id: 'num3',
				description: 'To Do List Application made with React.',
				stack: ['React', 'LocalStorage'],
				url: 'https://samanatashi.github.io/Todo_list_react/',
				githubUrl:
					'https://github.com/SamanAtashi/Todo_list_react',
			},
			{
				name: 'iCinema',
				status: 'Done',
				id: 'num4',
				description:
					'The iCinema is a SPA that is based on the TVmaze API. With the use of the Involvement API to POST and GET the likes and comments, users can comment and like a certain series.',
				stack: ['JS', 'API'],
				url: 'https://samanatashi.github.io/JS-Capstone-project/dist/',
				githubUrl:
					'https://github.com/SamanAtashi/JS-Capstone-project',
			},
		],
	};

	projectsList = this.state.myProject.map((project) => {
		return (
			<Project
				name={project.name}
				desc={project.description}
				status={project.status}
				stack={project.stack}
				url={project.url}
				githubUrl={project.githubUrl}
			/>
		);
	});

	render() {
		return (
			<section className="mt-12">
				<header className="text-Secondary_Light text-5xl font-semibold font-Bodoni">
					<span>
						My Work
					</span>
				</header>
				{this.projectsList}
			</section>
		);
	}
}

export default Projects;
