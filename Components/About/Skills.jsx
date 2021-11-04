import React from 'react';

import {
	SiBootstrap,
	SiCss3,
	SiFirebase,
	SiGit,
	SiGithub,
	SiHtml5,
	SiJavascript,
	SiJest,
	SiNextdotjs,
	SiReact,
	SiRedux,
	SiRuby,
	SiStyledcomponents,
	SiTailwindcss,
} from 'react-icons/si';

const Skills = () => {
	let list = [
		[SiJavascript, 'JavaScript'],
		[SiReact, 'React'],
		[SiNextdotjs, 'Next.js'],
		[SiRedux, 'Redux'],
		[SiStyledcomponents, 'Styled Components'],
		[SiTailwindcss, 'TailWind CSS'],
		[SiBootstrap, 'BootStrap'],
		[SiHtml5, 'HTML'],
		[SiCss3, 'CSS'],
		[SiJest, 'Jest'],
		[SiRuby, 'Ruby'],
		[SiGit, 'Git'],
		[SiGithub, 'GitHub'],
		[SiFirebase, 'FireBase'],
	];

	const maker = () => {
		return list.map((item) => (
			<li className="w-full sm:w-1/3 lg:w-1/6 items-center flex justify-start p-0 flex-col h-28 sm:h-auto mb-3 ">
				{React.createElement(item[0], {
					className:
						'w-16 sm:w-24 h-16 sm:h-24 group transition-all duration-200 ease-in-out transform translate-y-0 group hover:-translate-y-1 translate-x-0 hover:drop-shadow-3xl',
				})}
				<p className="mt-4 text-sm sm:text-base font-semibold tracking-wide opacity-100 normal-case text-center ">
					{item[1]}
				</p>
			</li>
		));
	};

	return (
		<article>
			<ul className="grid grid-cols-3 sm:flex sm:flex-wrap sm:justify-evenly space-x-1 sm:space-x-0 font-Montserratss  ">
				{maker()}
			</ul>
		</article>
	);
};

export default Skills;
