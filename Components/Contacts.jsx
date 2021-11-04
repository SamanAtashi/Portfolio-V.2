import color from '../Assets/color';

const Contact = () => {
	return (
		<section className="font-Montserratss mt-3">
			<article>
				<header className="text-Secondary_Light text-[17vw] font-semibold font-Bodoni">
					<span className="tracking-tighter">Hello.</span>
				</header>
				<div>
					<a href="https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=milady00126@gmail.com">
						Email{color(7)}
						<span>milady00126@gmail{color()}com</span>
					</a>
					<div>
						<a href="https://twitter.com/AtashiSaman">
							Twitter{color(7)}
						</a>

						<a href="https://github.com/SamanAtashi">
							GitHub{color(7)}
						</a>

						<a href="https://www.linkedin.com/in/saman-atashi/">
							LinkedIn{color(7)}
						</a>
					</div>
				</div>
			</article>
		</section>
	);
};

export default Contact;
