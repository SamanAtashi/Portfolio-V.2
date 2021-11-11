import color from '../Assets/color';

const Contact = () => {
	return (
		<section className="font-Montserratss">
			<article>
				<header className="text-Secondary_Light text-17vw font-semibold font-Bodoni">
					<span className="tracking-tighter">
						Hello{color()}
					</span>
				</header>
				<div className="sm:text-lg lg:-mt-16 lg:text-xl">
					<div>
						Email{color(7)}{' '}
						<a
							className="hover:text-Tertiary_Light rounded-full button round targetable"
							href="https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=milady00126@gmail.com"
						>
							<span className="highlight">
								milady00126@gmail{color()}com
							</span>
						</a>
					</div>
					<div className="mt-2 lg:text-xl lg:mt-4">
						On the Internet{color(7)}{' '}
						<a
							className="highlight hover:text-Tertiary_Light rounded-full button round targetable"
							href="https://www.linkedin.com/in/saman-atashi/"
						>
							LinkedIn
						</a>{' '}
						{color(4)}{' '}
						<a
							className="highlight hover:text-Tertiary_Light rounded-full button round targetable"
							href="https://twitter.com/AtashiSaman"
						>
							Twitter
						</a>{' '}
						{color(4)}{' '}
						<a
							className="highlight hover:text-Tertiary_Light rounded-full button round targetable"
							href="https://github.com/SamanAtashi"
						>
							GitHub
						</a>
					</div>
				</div>
			</article>
		</section>
	);
};

export default Contact;
