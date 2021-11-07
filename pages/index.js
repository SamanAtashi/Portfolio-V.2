import About from '../components/About/About';
import Contact from '../components/Contacts';
import Home from '../components/Home';
import Navbar from '../components/Navbar';
import Projects from '../components/Projects/Projects';

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
