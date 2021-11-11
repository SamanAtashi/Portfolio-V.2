// import { useState } from 'react';

const Navbar = () => {
	// const [linkedIn, setLinkedIn] = useState('LI');
	// const lichangeHandler = () => {
	// 	setTimeout(() => {
	// 		setLinkedIn('LinkedIn');
	// 	}, 500);
	// };
	// const liunChangeHandler = () => {
	// 	setTimeout(() => {
	// 		setLinkedIn('LI');
	// 	}, 500);
	// };

	// const [gitHub, setGitHub] = useState('GH');
	// const ghchangeHandler = () => {
	// 	setTimeout(() => {
	// 		setGitHub('GitHub');
	// 	}, 500);
	// };
	// const ghunChangeHandler = () => {
	// 	setTimeout(() => {
	// 		setGitHub('GH');
	// 	}, 500);
	// };

	// const [twitter, setTwitter] = useState('TW');
	// const twchangeHandler = () => {
	// 	setTimeout(() => {
	// 		setTwitter('Twitter');
	// 	}, 500);
	// };
	// const twunChangeHandler = () => {
	// 	setTimeout(() => {
	// 		setTwitter('TW');
	// 	}, 500);
	// };

	return (
		<div className="flex justify-between items-center font-light text-xs md:fixed md:bottom-0 md:left-4% md:pl-9 md:pr-5% md:rot md:w-100vh text-Secondary_Light lg:left-3.5% lg:text-sm lg:font-normal">
			<div className="flex items-center w-5/6 md:order-2 md:justify-end">
				<ul className="flex space-x-3 md:space-x-10 mr-4 tracking-0.3 md:order-2">
					<li className="hover:text-Tertiary_Light cursor-pointer transition duration-700 ease-in-out hover:scale-150">
						<a
							target="_blank"
							href="https://twitter.com/AtashiSaman"
							rel="noreferrer"
						>
							TW
						</a>
					</li>
					<li className="hover:text-Tertiary_Light cursor-pointer transition duration-700 ease-in-out hover:scale-150">
						<a
							target="_blank"
							href="https://www.linkedin.com/in/saman-atashi"
							rel="noreferrer"
						>
							LI
						</a>
					</li>

					<li className="hover:text-Tertiary_Light cursor-pointer transition duration-700 ease-in-out hover:scale-150">
						<a
							target="_blank"
							href="https://github.com/SamanAtashi"
							rel="noreferrer"
						>
							GH
						</a>
					</li>
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
