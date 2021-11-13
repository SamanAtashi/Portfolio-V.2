import React, { useEffect } from 'react';
import Head from 'next/head';
import About from '../Components/About/About';
import Contact from '../Components/Contacts';
import Home from '../Components/Home';
// import DotRing from '../Components/Mouse/DotRing';
import magnetCurs from '../Components/Mouse/magnetCurs';
import Navbar from '../Components/Navbar';
import Projects from '../Components/Projects/Projects';
import sc from '../public/sc.png';

export default function Main() {
	useEffect(() => {
		magnetCurs.init({
			click: 3000,
			spacing: 20,
			pointer: true,
		});
	}, []);

	return (
		<>
			<Head>
				<title>Saman Atashi</title>
				<meta
					name="description"
					content="Saman Atashi's Portfolio"
				/>

				<meta itemProp="name" content="Saman Atashi" />
				<meta
					itemProp="description"
					content="Saman Atashi's Portfolio"
				/>
				<meta itemProp="image" content={sc} />

				<meta
					property="og:url"
					content="https://samanatashi.netlify.app/"
				/>
				<meta property="og:type" content="website" />
				<meta property="og:title" content="Saman Atashi" />
				<meta
					property="og:description"
					content="Saman Atashi's Portfolio"
				/>
				<meta property="og:image" content={sc} />

				<meta
					name="twitter:card"
					content="summary_large_image"
				/>
				<meta name="twitter:title" content="Saman Atashi" />
				<meta
					name="twitter:description"
					content="Saman Atashi's Portfolio"
				/>
				<meta name="twitter:image" content={sc} />
			</Head>
			<div className="bg-Primary w-full h-full text-Secondary px-10vw pt-6  pb-10 relative md:px-28 md:py-12 lg:pt-0 lg:px-12vw lg:pb-28 xl:px-16vw">
				{/* <DotRing /> */}
				<Navbar />
				<Home />
				<Projects />
				<About />
				<Contact />
			</div>
		</>
	);
}
