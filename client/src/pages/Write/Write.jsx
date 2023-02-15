import { useState } from "react";
import TagsInput from "../../components/TagsInput/TagsInput";

const Write = () => {
	const [image, setImage] = useState();
	const handleChange = (e) => {
		setImage(URL.createObjectURL(e.target.files[0]));
	};
	return (
		<div className="container mt-24 mb-4">
			<form action="">
				<div className="bg-slate-200 relative h-[200px] md:h-[350px]">
					<input
						onChange={handleChange}
						type="file"
						multiple
						className="cursor-pointer relative opacity-0 block w-full h-full p-20 z-10"
					/>
					<div className={`text-center absolute ${image ? "top-0" : "top-1/3"} right-0 left-0 `}>
						{(image && (
							<div>
								<img
									src={image}
									alt=""
									className="w-full h-[200px] md:h-[350px] object-cover hover:bg-gradient-to-r"
								/>
							</div>
						)) || (
							<>
								<h4>
									Drop files here to upload
									<br />
									or
								</h4>
								<p>Select Files</p>
							</>
						)}
					</div>
				</div>
				<div className="mt-3 grid grid-cols-1 md:grid-cols-2 gap-12">
					<div className="block">
						<input
							type="text"
							className="px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded text-sm focus:ring-1"
							placeholder="Title..."
						/>
						<textarea
							name=""
							id=""
							className="mt-3 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full h-40 rounded text-sm focus:ring-1"
							placeholder="Type your content..."
						></textarea>
					</div>
					<div className="block">
						<div className="py-4 px-8 border w-full bg-white">
							<h3 className="text-xl font-medium text-[var(--dark)]">Category</h3>
							<TagsInput />
						</div>
						<div className="mt-3 py-4 px-8 border w-full bg-white">
							<h3 className="text-xl font-medium text-[var(--dark)]">Publish</h3>
							<p className="font-light text-sm mt-2">
								<span className="font-medium">Status :</span> Draft
							</p>
							<p className="font-light text-sm">
								<span className="font-medium">Visibility :</span> Public
							</p>
							<div className="flex mt-4">
								<button className="btn-outline-tosca">Save as a draft</button>
								<button className="btn-tosca ml-4">Publish</button>
							</div>
						</div>
					</div>
				</div>
			</form>
		</div>
	);
};

export default Write;
