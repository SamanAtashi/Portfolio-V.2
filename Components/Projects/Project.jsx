import { ExternalLinkIcon, CodeIcon } from '@heroicons/react/outline';

const Project = (props) => {
	const stacks = () => {
		return props.stack.map((item) => (
			<li key={item + 'Id'} className="mr-3">
				#{item}
			</li>
		));
	};
	let circle = (
		<span className="relative inline-flex rounded-full h-3 w-3 bg-red-600">
			<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-300 opacity-75"></span>
		</span>
	);

	if (props.status == 'Done') {
		circle = (
			<span className="relative inline-flex rounded-full h-3 w-3 bg-green-500">
				<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-300 opacity-75"></span>
			</span>
		);
	}

	return (
		<article className="bg-Secondary text-Primary p-6 my-8 rounded-lg shadow-2xl h-80 font-Montserratss relative flex flex-col justify-between w-full md:m-0 lg:py-7 lg:px-9">
			<div>
				<header className="font-semibold text-2xl lg:text-3xl">
					{props.name}
				</header>
				<div className="w-full border-Primary_Light border-2 my-3.5 "></div>
				<p className="lg:text-lg">{props.desc}</p>
			</div>
			<div>
				<ul className="text-Primary_Light font-medium  italic mt-3.5 flex  flex-wrap">
					{stacks()}
				</ul>
				<div className="flex justify-start items-center space-x-3 mt-3.5 md:space-x-6 lg:space-x-8 lg:mt-5 ">
					<a
						href={props.url}
						onClick={() =>
							window.open(props.githubUrl, '_blank')
						}
						target="_blank"
						rel="noreferrer"
						className="h-9 w-9 md:h-11 md:w-11 lg:h-12 lg:w-12 p-1 bg-Primary_Light text-Secondary rounded flex justify-center items-center  button targetable round hover:text-Primary hover:bg-Tertiary_Light transition duration-500 ease-in-out"
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
						className="h-9 w-9 md:h-11 md:w-11 lg:h-12 lg:w-12  bg-Primary_Light text-Secondary rounded flex justify-center items-center p-1 button targetable round hover:text-Primary hover:bg-Tertiary_Light transition duration-500 ease-in-out"
					>
						<CodeIcon />
					</a>
				</div>
			</div>
			<span className="absolute -top-0.5 -right-0.5 flex h-3 w-3">
				{circle}
			</span>{' '}
		</article>
	);
};

export default Project;
