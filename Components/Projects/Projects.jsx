import React from 'react';
import color from '../../Assets/color';
import Project from './Project';

class Projects extends React.Component {
	state = {
		myProject: [
			{
				name: 'Instagram Clone',
				status: 'ongoing',
				id: 'num1',
				description:
					'A clone of the Instagram website made with Next and FireBase.',
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
				status: 'ongoing',
				id: 'num2',
				description:
					'A SPA that Displays, Adds, and Removes books from API.',
				stack: ['React', 'Redux', 'API', 'TailWind CSS'],
				url: 'https://github.com/SamanAtashi/BookStore-redux',
				githubUrl:
					'https://github.com/SamanAtashi/BookStore-redux',
			},
			{
				name: 'ToDo List',
				status: 'ongoing',
				id: 'num3',
				description:
					'A To Do List Application made with React that saves all your ToDos locally.',
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
					'iCinema is a SPA that is based on the TVmaze API. Users can comment and like their favorite series.',
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
				key={project.id}
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
			<section>
				<header className=" text-Secondary_Light text-5xl font-semibold font-Bodoni sm:text-10vw lg:text-8vw">
					<span>
						My Work
					</span>
				</header>
				<div className="mt-8 italic font-light lg:mt-10">
					<p>
						<span className="relative inline-flex rounded-full h-3 w-3 bg-red-600">
							<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-300 opacity-75"></span>
						</span>{' '}
						{color(3)} In Progress
					</p>
					<p>
						<span className="relative inline-flex rounded-full h-3 w-3 bg-green-500">
							<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-300 opacity-75"></span>
						</span>{' '}
						{color(3)} Done
					</p>
				</div>
				<div className="md:grid md:grid-cols-2 md:gap-x-5 md:gap-y-7 md:mt-11 lg:gap-x-14 lg:gap-y-11">
					{this.projectsList}
				</div>
			</section>
		);
	}
}

export default Projects;
