import { useState } from "react";
import { NavLink } from "react-router-dom";
import Logo from "../../assets/logo.png";

import "./Navbar.css";

const Navbar = () => {
	const [solidNav, setSolidNav] = useState(false);
	const changeSolidNav = () => {
		if (window.scrollY >= 20) {
			setSolidNav(true);
		} else {
			setSolidNav(false);
		}
	};
	window.addEventListener("scroll", changeSolidNav);
	return (
		<div
			className={
				solidNav
					? "sticky top-0 container bg-transparent z-50 transition-all ease-in duration-200 backdrop-filter backdrop-blur-lg"
					: "sticky top-0 container bg-transparent z-50 transition-all ease-in duration-100"
			}
		>
			<nav className="flex justify-between items-center ">
				<NavLink to="/">
					<img src={Logo} alt="" className="max-w-[60px] md:max-w-[80px]" />
				</NavLink>
				<ul>
					<li>
						<NavLink
							to="/"
							className="mr-6 circleBehind text-[var(--gray-light)] hover:text-[var(--orange)] duration-300"
						>
							Home
						</NavLink>
						<NavLink
							to="/write"
							className="mx-6 circleBehind text-[var(--gray-light)] hover:text-[var(--orange)] duration-300"
						>
							Write
						</NavLink>
						<NavLink to="/signin" className="ml-6 btn-outline-orange ">
							SIgn In
						</NavLink>
					</li>
				</ul>
			</nav>
		</div>
	);
};

export default Navbar;
