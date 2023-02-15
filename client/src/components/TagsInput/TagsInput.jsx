import "./TagsInput.css";

const TagsInput = () => {
	return (
		<div className="max-w-2xl ">
			<ul className="ks-cboxtags flex flex-wrap mt-3 text-sm">
				<li className="mr-2 ">
					<input type="checkbox" id="checkboxOne" value="Art" />
					<label
						for="checkboxOne"
						className="bg-zinc-300 text-black rounded-full px-6 py-1 cursor-pointer"
					>
						Art
					</label>
				</li>
				<li className="mx-2">
					<input type="checkbox" id="checkboxTwo" value="Science" />
					<label
						for="checkboxTwo"
						className="bg-zinc-300 text-black rounded-full px-6 py-1 cursor-pointer"
					>
						Science
					</label>
				</li>
				<li className="mx-2">
					<input type="checkbox" id="checkboxThree" value="Cinema" />
					<label
						for="checkboxThree"
						className="bg-zinc-300 text-black rounded-full px-6 py-1 cursor-pointer"
					>
						Cinema
					</label>
				</li>
				<li className="mx-2">
					<input type="checkbox" id="checkboxFour" value="Design" />
					<label
						for="checkboxFour"
						className="bg-zinc-300 text-black rounded-full px-6 py-1 cursor-pointer"
					>
						Design
					</label>
				</li>
				<li className="mx-2">
					<input type="checkbox" id="checkboxFive" value="Food" />
					<label
						for="checkboxFive"
						className="bg-zinc-300 text-black rounded-full px-6 py-1 cursor-pointer"
					>
						Food
					</label>
				</li>
			</ul>
		</div>
	);
};
export default TagsInput;
