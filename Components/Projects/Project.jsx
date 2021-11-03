import { ExternalLinkIcon, CodeIcon } from '@heroicons/react/outline';

const Project = (props) => {
	const stacks = () => {
		let newArr = [];
		props.stack.forEach((item) => {
			newArr.push(<span>#{item}</span>);
		});
		return newArr;
	};

	return (
		<article className="bg-Secondary text-Primary p-7 my-8 rounded-lg shadow-md h-80">
			<header className="text-2xl ">{props.name}</header>
			<div className="w-full border border-Primary my-3.5"></div>
			{/* <div> */}
				<p>{props.desc}</p>
				<div>{stacks()}</div>
				<div className="flex justify-start items-center space-x-3">
					<a
						href={props.githubUrl}
						onClick={() =>
							window.open(props.githubUrl, '_blank')
						}
						target="_blank"
						rel="noreferrer"
						className="h-10 w-10  bg-Tertiary rounded flex justify-center items-center p-1"
					>
						<CodeIcon />
					</a>
					<a
						href={props.url}
						onClick={() =>
							window.open(props.githubUrl, '_blank')
						}
						target="_blank"
						rel="noreferrer"
						className="h-10 w-10 p-1 bg-Tertiary rounded flex justify-center items-center "
					>
						<ExternalLinkIcon />
					</a>
				</div>
			{/* </div> */}
		</article>
	);
};

export default Project;
