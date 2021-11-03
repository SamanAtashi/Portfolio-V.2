import color from '../Assets/color';
const Home = () => {
	return (
		<section className="text-Secondary text-[1.2rem] leading-7 font-Montserratss mt-8">
			<article>
				<header className="mb-3.5">
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
			</article>
		</section>
	);
};

export default Home;
