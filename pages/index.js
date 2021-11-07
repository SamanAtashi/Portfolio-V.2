import About from '../Components/About/About';
import Contact from '../Components/Contacts';
import Home from '../Components/Home';
import Navbar from '../Components/Navbar';
import Projects from '../Components/Projects/Projects';

export default function Main() {
	return (
		<div className="bg-Primary w-full h-full text-Secondary px-10vw
py-6 relative md:px-32 md:py-12">
			<Navbar />
			<Home />
			<Projects />
			<About />
			<Contact />
		</div>
	);
}
