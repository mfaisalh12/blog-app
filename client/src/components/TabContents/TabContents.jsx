import Card from "../Card/Card";

const TabContents = (props) => {
	const { posts, title: Tab } = props;
	const displayData = (str) => {
		const arr = str.split(",");
		for (let i = 0; i < arr.length; i++) {
			if (arr[i] === Tab) {
			}
		}
	};
	return (
		<div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-20 mt-10">
			{posts.map((item, key) => (
				<Card
					key={key}
					idPost={item.id}
					title={item.title}
					desc={item.description}
					img={item.image}
					name={item.name}
					userImage={item.user_image}
					category={item.categories_group.split(",")}
					createdAt={item.created_at}
				/>
			))}
		</div>
	);
};

export default TabContents;
