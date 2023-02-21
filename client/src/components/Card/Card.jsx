import Robot from "../../assets/robot.png";
import Photo from "../../assets/photo.png";
import { NavLink } from "react-router-dom";

const Card = (props) => {
	const limit = (str = "", limit = 0) => {
		if (str.length > limit) {
			return str.substring(0, limit) + "...";
		} else {
			return str;
		}
	};
	const capitalize = (str = "") => {
		const arr = str.split(" ");
		for (let i = 0; i < arr.length; i++) {
			arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
		}
		return arr.join(" ");
	};

	const dateFormat = (date) => {
		return new Date(date).toISOString().replace(/T.*$/, " ");
	};

	return (
		<div className="bg-white font-normal">
			<img
				src={props.img}
				className="object-cover rounded-lg w-full max-h-[180px] md:max-h-[260px] "
				alt={props.img}
			/>
			{props.category.map((item, key) => (
				<p className="text-blue-800 text-sm mt-2 mr-3 inline">{item}</p>
			))}
			<h2 className="font-semibold text-xl">{props.title}</h2>
			<p className="text-sm mt-1">{limit(props.desc, 150)}</p>
			<div className="flex justify-between items-center mt-4">
				<div className="flex justify-start items-center">
					<img
						src={
							props.userImage ? props.userImage : `https://ui-avatars.com/api/?name=${props.name}`
						}
						className="w-[35px] h-[35px] object-cover rounded-full"
						alt=""
					/>
					<div className="text-xs ml-2">
						<h5 className="font-medium">{capitalize(props.name)}</h5>
						<p className="font-light">{dateFormat(props.createdAt)}</p>
					</div>
				</div>
				<div>
					<NavLink
						to={`/posts/${props.idPost}`}
						className="bg-[var(--dark)] text-white text-sm py-1 px-6 rounded-md hover:bg-zinc-800"
					>
						Read
					</NavLink>
				</div>
			</div>
		</div>
	);
};

export default Card;
