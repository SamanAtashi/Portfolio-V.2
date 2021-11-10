import color from '../Assets/color';

const Contact = () => {
	return (
		<section className="font-Montserratss">
			<article>
				<header className="text-Secondary_Light text-17vw font-semibold font-Bodoni">
                <span className="tracking-tighter">Hello{color()}</span>
				</header>
				<div className="sm:text-lg lg:-mt-16">
					<a href="https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=milady00126@gmail.com">
						Email{color(7)}{' '}
						<span className="highlight">
							milady00126@gmail{color()}com
						</span>
					</a>
					<div className="mt-2">
						On the Internet{color(7)}{' '}
						<a className="highlight" href="https://www.linkedin.com/in/saman-atashi/">
							LinkedIn
						</a>{' '}
						{color(4)}{' '}
						<a className="highlight" href="https://twitter.com/AtashiSaman">
							Twitter
						</a>{' '}
						{color(4)}{' '}
						<a className="highlight" href="https://github.com/SamanAtashi">
							GitHub
						</a>
					</div>
				</div>
			</article>
		</section>
	);
};

export default Contact;
