import color from '../Assets/color';

const Home = () => {
	return (
		<section className="text-Secondary text-1.2rem leading-7 font-Montserratss h-100vh min-h-screen flex flex-col justify-center items-center space-y-6 md:space-y-0 lg:flex-row">
			<div className="contain lg:order-1 hover:bg-Secondary_Light transition duration-700 ease-in-out">
				<div className="rotate-small">
					<div className="small hover:bg-Secondary_Light transition duration-700 ease-in-out"></div>
				</div>
				<div className="rotate-big">
					<div className="big hover:bg-Secondary_Light transition duration-700 ease-in-out"></div>
				</div>
			</div>
			<article className="lg:w-4/6">
				<header className="mb-3.5 sm:text-2xl">
					Hey{color(1)} I{color(2)}m{' '}
					<span className="text-Secondary_Light font-semibold">
						Saman
					</span>
					{color()}
				</header>
				<p className="sm:text-2xl">
					I{color(2)}m a{' '}
					<span className="text-Secondary_Light font-semibold">
						FrontEnd
					</span>{' '}
					developer who loves solving everyday life
					{color(2)}s problems with code
					{color()}
				</p>
				<p className="text-sm my-3.5 sm:text-base">
					Currently a student at{' '}
					<span className="text-Secondary_Light font-semibold">
						Microverse
					</span>
					{color()}
				</p>
				<div className="mt-8 -mb-2 flex items-center justify-center ">
					<button className="animate-pulse   bg-Tertiary hover:bg-Tertiary_Light text-Primary hover:text-Primary_Light font-bold py-2 px-4 rounded-full flex items-center justify-center font-Montserratss transition duration-700 ease-in-out button round targetable">
						<a href="https://docs.google.com/document/d/1Ck2K1ICxGUEMJvEP9YxDFYIofHL8M5XQ5mCXDRnNVbk/export?format=pdf">
							Resume
						</a>
					</button>
				</div>
			</article>
		</section>
	);
};

export default Home;
