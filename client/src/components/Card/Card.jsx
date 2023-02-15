import Robot from "../../assets/robot.png";
import Photo from "../../assets/photo.png";

const Card = () => {
	return (
		<div className="bg-white font-normal">
			<img
				src={Robot}
				className="object-cover rounded-lg w-full max-h-[180px] md:max-h-[260px] "
				alt=""
			/>
			<p className="text-blue-800 text-sm mt-2">Science</p>
			<h2 className="font-semibold text-xl">Ini Judul Gays</h2>
			<p className="text-sm mt-1">
				Lorem ipsum dolor sit amet consectetur. Sed elit velit amet dignissim cursus sagittis at.
				Non sed ut consectetur turpis placerat nunc ultricies. Pretium morbi vitae hac dictumst
				fames elit nulla egestas....
			</p>
			<div className="flex justify-between items-center mt-4">
				<div className="flex justify-start items-center">
					<img src={Photo} className="w-[35px] h-[35px] object-cover rounded-full" alt="" />
					<div className="text-xs ml-2">
						<h5 className="font-medium">Hamba Allah</h5>
						<p className="font-light">29 November 2022</p>
					</div>
				</div>
				<div>
					<button className="bg-[var(--dark)] text-white text-sm py-1 px-6 rounded-md hover:bg-zinc-800">
						Read
					</button>
				</div>
			</div>
		</div>
	);
};

export default Card;
