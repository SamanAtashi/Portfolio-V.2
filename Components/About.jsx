const About = () => {
	return (
		<section className="font-Montserratss">
			<header className="text-Secondary_Light text-3xl font-semibold font-Bodoni">
				<span className="highlight">About</span>
			</header>
			<article>
				<p>
					Studied medicine for four years, problem-solver,
					energetic, from Iran, based in Russia.{' '}
				</p>
			</article>
			<div className="sm:flex sm:justify-between">
				<article className="my-4 ">
					<header className="font-Bodoni text-xl tracking-widest  text-Secondary_Light font-bold">
						Skills
					</header>
					<ul>
						<li>JavaScript</li>
						<li>React,Redux</li>
						<li>HTML,CSS</li>
						<li>Ruby</li>
						<li>Git,Github</li>
						<li>TDD,RSpec</li>
						<li>Responsive Design</li>
					</ul>
				</article>
				
			</div>
		</section>
	);
};

export default About;
