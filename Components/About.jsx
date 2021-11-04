import color from '../Assets/color';
import { ImQuotesLeft, ImQuotesRight } from 'react-icons/im/';

const About = () => {
	return (
		<section className="font-Montserratss">
			<header className="text-Secondary_Light text-5xl font-semibold font-Bodoni">
				<span>About</span>
			</header>
			<article className="my-8 font-Montserratss">
				<p>
					<div className="inline-block">
						<ImQuotesLeft className="text-Tertiary text-xl" />
					</div>{' '}
					I{color(2)}m a{' '}
					<span className="font-bold text-Secondary_Light my_underline">
						Software Developer
					</span>{' '}
					based in Russia
					{color()} I started my coding journey almost{' '}
					<span className="font-bold text-Secondary_Light my_underline">
						1{color(1)}5
					</span>{' '}
					years ago{color()}
				</p>
				<p className="my-3.5">
					I love both the{' '}
					<span className="font-bold text-Secondary_Light my_underline">
						creative
					</span>{' '}
					and{' '}
					<span className="font-bold text-Secondary_Light my_underline">
						analytical
					</span>{' '}
					sides of development{color()} You may have noticed
					from my portfolio that I{color(2)}m obsessed with{' '}
					<span className="font-bold text-Secondary_Light my_underline">
						unique
					</span>
					{color(1)}{' '}
					<span className="font-bold text-Secondary_Light my_underline">
						simple
					</span>
					{color(1)} and{' '}
					<span className="font-bold text-Secondary_Light my_underline">
						user-friendly
					</span>{' '}
					functionality{color()}
				</p>
				<p>
					I am passionate about real-life projects{color(1)}{' '}
					and in an age of digital{color(1)} I believe
					solving problems with code is essential{color()}{' '}
					So
					{color(1)} I specialize in a multi-disciplined
					approach to my work{color(1)} incorporating
					{color(7)}{' '}
					<span className="font-bold text-Secondary_Light my_underline">
						Troubleshooting
					</span>
					{color(1)}{' '}
					<span className="font-bold text-Secondary_Light my_underline">
						Relentless Debugging
					</span>
					{color(1)}{' '}
					<span className="font-bold text-Secondary_Light my_underline">
						Adaptability
					</span>
					{color(1)}{' '}
					<span className="font-bold text-Secondary_Light my_underline">
						Analytic
					</span>
					{color(1)} and{' '}
					<span className="font-bold text-Secondary_Light my_underline">
						Proactivity
					</span>
					{color()}{' '}
					<div className="inline-block">
						<ImQuotesRight className="text-Tertiary text-xl" />
					</div>
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
