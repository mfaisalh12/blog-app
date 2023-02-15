import { Link } from "react-router-dom";
import TabContents from "../../components/TabContents/TabContents";
import { Tabs, Tab } from "../../components/Tabs/Tabs";

import "./Home.css";

const tabs = [
	{
		title: "All",
		link: "all",
	},
	{
		title: "Art",
		link: "art",
	},
	{
		title: "Science",
		link: "science",
	},
	{
		title: "Cinema",
		link: "cinema",
	},
	{
		title: "Design",
		link: "design",
	},
	{
		title: "Food",
		link: "food",
	},
];

const Home = () => {
	return (
		<>
			<div className="container text-center text-white text-xl jumbotron">
				<h2 className="pt-64 text-4xl font-normal mb-2">Welcome In The World Of</h2>
				<h1 className="text-6xl font-semibold mb-14">
					Blog <span className="italic text-transparent stroke">Writing</span>
				</h1>
				<Link className="btn-orange text-amber-900 py-2">Write A Blog</Link>
			</div>
			<div className="container mb-10">
				<Tabs>
					{tabs.map((item, key) => (
						<Tab key={key} component={<TabContents />}>
							{item.title}
						</Tab>
					))}
				</Tabs>
			</div>
		</>
	);
};

export default Home;
