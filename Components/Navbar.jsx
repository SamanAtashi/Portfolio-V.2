const Navbar = () => {
	return (
		<div className="flex justify-between items-center py-3.5 md:fixed md:bottom-0 md:left-0 md:-rotate-90 md:origin-top-left md:w-100vh md:translate-x-11 md:translate-y-14 md:pl-8 md:pr-14">
			<p className="w-1/6"> &copy;/21</p>
			<div className="flex justify-between items-center w-5/6">
				<div className="border-Secondary border w-8/12"></div>
				<ul className="flex space-x-3 mr-4">
					<li>LI</li>
					<li>GH</li>
					<li>TW</li>
				</ul>
			</div>
		</div>
	);
};

export default Navbar;
