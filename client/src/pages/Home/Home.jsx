import { Link } from "react-router-dom";

import "./Home.css";

const Home = () => {
	return (
		<div className="container text-center text-white text-xl jumbotron">
			<h2 className="pt-64 text-4xl font-normal mb-2">Welcome In The World Of</h2>
			<h1 className="text-6xl font-semibold mb-14">
				Blog <span className="italic text-transparent stroke">Writing</span>
			</h1>
			<Link className="btn-orange text-amber-900 py-2">Write A Blog</Link>
		</div>
	);
};

export default Home;
