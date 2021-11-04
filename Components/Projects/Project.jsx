import { ExternalLinkIcon, CodeIcon } from '@heroicons/react/outline';
import color from '../../Assets/color';

const Project = (props) => {
	const stacks = () => {
		return props.stack.map((item) => <li className="mr-3">#{item}</li>);
	};
	let circle = (
		<span class="relative inline-flex rounded-full h-3 w-3 bg-yellow-500">
			<span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-500 opacity-75"></span>
		</span>
	);

	if (props.status == 'Done') {
		circle = (
			<span class="relative inline-flex rounded-full h-3 w-3 bg-green-500">
				<span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
			</span>
		);
	}

	return (
		<article className="bg-Secondary text-Primary p-6 my-8 rounded-lg shadow-2xl h-80 font-Montserratss relative flex flex-col justify-between">
			<div>
				<header className="font-semibold text-2xl">
					{props.name}
				</header>
				<div className="w-full border-Primary_Light border-2 my-3.5"></div>
				<p>{props.desc}</p>
			</div>
			<div>
				<ul className="text-Primary_Light font-medium  italic mt-3.5 flex  flex-wrap">
					{stacks()}
				</ul>
				<div className="flex justify-start items-center space-x-3 mt-3.5">
					<a
						href={props.url}
						onClick={() =>
							window.open(props.githubUrl, '_blank')
						}
						target="_blank"
						rel="noreferrer"
						className="h-9 w-9 p-1 bg-Primary_Light text-Secondary rounded flex justify-center items-center "
					>
						<ExternalLinkIcon />
					</a>
					<a
						href={props.githubUrl}
						onClick={() =>
							window.open(props.githubUrl, '_blank')
						}
						target="_blank"
						rel="noreferrer"
						className="h-9 w-9  bg-Primary_Light text-Secondary rounded flex justify-center items-center p-1"
					>
						<CodeIcon />
					</a>
				</div>
			</div>
			<span class="absolute -top-0.5 -right-0.5 flex h-3 w-3">
				{circle}
			</span>{' '}
		</article>
	);
};

export default Project;
