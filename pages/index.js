import React, { useEffect } from 'react';
import About from '../Components/About/About';
import Contact from '../Components/Contacts';
import Home from '../Components/Home';
// import DotRing from '../Components/Mouse/DotRing';
import magnetCurs from '../Components/Mouse/magnetCurs';
import Navbar from '../Components/Navbar';
import Projects from '../Components/Projects/Projects';

export default function Main() {
	useEffect(() => {
		magnetCurs.init({
			click: 3000,
			spacing: 20,
			pointer: true,
		});
	}, []);

	return (
		<div className="bg-Primary w-full h-full text-Secondary px-10vw py-6 relative md:px-28 md:py-12 lg:pt-0 lg:px-80 lg:pb-28">
			{/* <DotRing /> */}
			<Navbar />
			<Home />
			<Projects />
			<About />
			<Contact />
		</div>
	);
}
