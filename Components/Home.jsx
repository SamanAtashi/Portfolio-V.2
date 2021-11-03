const Home = () => {
	return (
		<section className="text-Secondary text-[1.2rem] leading-7 font-Montserratss">
			<article className="md:p-16">
				<header className="my-3.5">
					Hey, I'm{' '}
					<span className="text-Secondary_Light font-semibold">
						Saman
					</span>
					.
				</header>
				<p>
					I'm a{' '}
					<span className="text-Secondary_Light font-semibold">
						Full-Stack
					</span>{' '}
					developer who loves solving everyday life's
					problems with code.
				</p>
				<p className="text-sm my-3.5">
					Currently a student at{' '}
					<span className="text-Secondary_Light font-semibold">
						Microverse
					</span>
					.
				</p>
			</article>
		</section>
	);
};

export default Home;
