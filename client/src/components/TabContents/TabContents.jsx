import Card from "../Card/Card";

const TabContents = (props) => {
	return (
		<div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-20">
			<Card />
			<Card />
		</div>
	);
};

export default TabContents;
