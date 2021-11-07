import color from '../Assets/color';
import { FaArrowDown } from 'react-icons/fa';
// import resume from '../Assets/Resume/resume.pdf';

const Home = () => {
	return (
		<section className="text-Secondary text-1.2rem leading-7 font-Montserratss mt-8">
			<article>
				<header className="mb-3.5">
					{/* <span className="text-red-500 colored">
						.
					</span> */}
					Hey{color(1)} I{color(2)}m{' '}
					<span className="text-Secondary_Light font-semibold">
						Saman
					</span>
					{color()}
				</header>
				<p>
					I{color(2)}m a{' '}
					<span className="text-Secondary_Light font-semibold">
						FrontEnd
					</span>{' '}
					developer who loves solving everyday life
					{color(2)}s problems with code
					{color()}
				</p>
				<p className="text-sm my-3.5">
					Currently a student at{' '}
					<span className="text-Secondary_Light font-semibold">
						Microverse
					</span>
					{color()}
				</p>
				<div className="mt-8 -mb-2 flex items-center justify-center ">
					<button className="animate-pulse   bg-Tertiary hover:bg-Tertiary_Light text-Primary hover:text-Primary_Light font-bold py-2 px-4 rounded-full flex items-center justify-center font-Montserratss">
						{/* <FaArrowDown className="animate-bounce inline-block w-5 h-5 mx-1" /> */}
						<a
							// href={resume}
							download="SamanAtashi-resume"
						>
							Resume
						</a>
					</button>
				</div>
			</article>
		</section>
	);
};

export default Home;
