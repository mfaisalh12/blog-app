import { NavLink } from "react-router-dom";
import Logo from "../../assets/logo.png";

import "./Navbar.css";

const Navbar = () => {
	return (
		<div className="fixed top-0 container bg-transparent z-50 backdrop-filter backdrop-blur-lg backdrop-brightness-50">
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
