import color from '../Assets/color';

const Navbar = () => {
	return (
		<div className="flex justify-between items-center font-light text-xs md:fixed md:bottom-0 md:left-4% md:pl-9 md:pr-5% md:rot md:w-100vh text-Secondary_Light lg:left-2.5%">
			<div className="flex items-center w-5/6 md:order-2 md:justify-end">
				<ul className="flex space-x-3 md:space-x-10 mr-4 tracking-0.3 md:order-2">
					<li>LI</li>
					<li>GH</li>
					<li>TW</li>
				</ul>
				<div className="border-Secondary border w-10 md:order-1 md:ml-auto md:mr-14 md:w-32"></div>
			</div>
			<p className="w-1/6 flex items-center justify-end md:order-1 md:justify-start">
				{' '}
				&copy;<span className="colored mx-1">/</span>
				<span className="tracking-wide">21</span>
			</p>
		</div>
	);
};

export default Navbar;
