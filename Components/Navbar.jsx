const Navbar = () => {
	return (
		<div className="flex justify-between items-center font-light text-sm tracking-[0.2rem] md:fixed md:bottom-0 md:left-0 md:-rotate-90 md:origin-top-left md:w-100vh md:translate-x-11 md:translate-y-14 md:pl-8 md:pr-14">
			<div className="flex items-center w-5/6">
				<ul className="flex space-x-3 mr-4">
					<li>LI</li>
					<li>GH</li>
					<li>TW</li>
				</ul>
				<div className="border-Secondary border w-10"></div>
			</div>
			<p className="w-1/6">
				{' '}
				&copy;/<span className="tracking-wide">21</span>
			</p>
		</div>
	);
};

export default Navbar;
