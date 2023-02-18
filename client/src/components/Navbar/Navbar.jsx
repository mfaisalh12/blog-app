import { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import Logo from "../../assets/logo.png";
import { AuthContext } from "../../context/AuthContext";
import Dashboard from "../../pages/Dashboard/Dashboard";

import "./Navbar.css";

const Navbar = () => {
	const { currentUser, logout } = useContext(AuthContext);
	const [dropDown, setDropDown] = useState(false);
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
						{currentUser ? (
							<div className="relative ml-6 cursor-pointer inline">
								{currentUser.picture ? (
									<img
										src={currentUser.picture}
										className="rounded-full w-12 inline"
										onClick={() => setDropDown(!dropDown)}
									/>
								) : (
									<img
										src={`https://ui-avatars.com/api/?name=${currentUser.name}`}
										className="rounded-full w-12 inline"
										onClick={() => setDropDown(!dropDown)}
									/>
								)}
								{dropDown && (
									<ul className="absolute bg-white right-0 mt-2 rounded-md">
										<li className="px-5 py-2 hover:bg-orange-100 hover:rounded-t-md">
											<NavLink to="/dashboard">Dashboard</NavLink>
										</li>
										<li className="px-5 py-2 border-t-2 text-red-600 font-medium hover:bg-orange-100 hover:rounded-b-md">
											<NavLink onClick={logout}>Logout</NavLink>
										</li>
									</ul>
								)}
							</div>
						) : (
							<NavLink to="/signin" className="ml-6 btn-outline-orange ">
								SIgn In
							</NavLink>
						)}
					</li>
				</ul>
			</nav>
		</div>
	);
};

export default Navbar;
