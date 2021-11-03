import About from '../Components/About';
import Home from '../Components/Home';
import Navbar from '../Components/Navbar';
export default function Main() {
	return (
		<div className="bg-Primary w-full h-full text-Secondary px-10vw relative md:px-32 md:py-12">
			<Navbar />
			<Home />
			<About />
		</div>
	);
}
