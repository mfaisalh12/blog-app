import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";

const Footer = () => {
	return (
		<div className="container bg-[var(--dark)]">
			<div className="grid grid-cols-1 text-center md:text-left md:grid-cols-3 text-white py-8 md:py-16">
				<div className="mt-4 md:mt-0">
					<h3 className="text-xl">About Us</h3>
					<hr className="border-0 border-b border-[var(--orange)] opacity-100 w-12 mx-auto md:mx-0" />
					<p className="font-light text-gray-300 text-sm mt-3">
						Lorem ipsum dolor sit amet consectetur. Neque morbi nibh sit bibendum in tincidunt
						suspendisse amet. Pharetra pellentesque a et sagittis id suspendisse at est. Eleifend
						ullamcorper non cursus.
					</p>
				</div>
				<div className="ml-0 md:ml-16 mt-4 md:mt-0">
					<h3 className="text-xl">Quick Links</h3>
					<hr className="border-0 border-b border-[var(--orange)] opacity-100 w-12 mx-auto md:mx-0" />
					<Link to="/" className="font-light text-gray-300 text-sm mt-3 block hover:text-gray-200">
						Home
					</Link>
					<Link to="#" className="font-light text-gray-300 text-sm mt-3 block hover:text-gray-200">
						About
					</Link>
				</div>
				<div className="mt-4 md:mt-0">
					<h3 className="text-xl">Contact Info</h3>
					<hr className="border-0 border-b border-[var(--orange)] opacity-100 w-12 mx-auto md:mx-0" />
					<div className="flex justify-center md:justify-start items-start font-light text-gray-300 text-sm mt-3">
						<Icon icon="ph:map-pin-bold" className="text-[24px]" />
						<p className="ml-0 md:ml-4">
							Jalan Kenangan No.24, Desa Penuh Harapan, Bandung, Jawa Barat{" "}
						</p>
					</div>
					<div className="flex justify-center md:justify-start items-center md:items-start font-light text-gray-300 text-sm mt-3">
						<Icon icon="ic:outline-mail" className="text-[24px]" />
						<p className="ml-0 md:ml-4">blog_maish@gmail.com</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Footer;
