import { useState } from "react";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";
import SignLayout from "../Layout/Sign/SignLayout";

const Register = () => {
	const [passwordVisible1, setPasswordVisible1] = useState(false);
	const [passwordVisible2, setPasswordVisible2] = useState(false);
	return (
		<SignLayout>
			<h3 className="mt-4 font-medium text-2xl">Sign Up</h3>
			<form>
				<div className="grid grid-cols-1 md:grid-cols-2 md:gap-10">
					<div className="mt-6 content">
						<label htmlFor="first-name" className="text-lg">
							First Name
						</label>
						<input
							type="text"
							id="first-name"
							name="first-name"
							className="w-full mt-1 py-2 input-sign"
						/>
						<span className="focus-border"></span>
					</div>
					<div className="mt-6 content">
						<label htmlFor="last-name" className="text-lg">
							Last Name
						</label>
						<input
							type="text"
							id="last-name"
							name="last-name"
							className="w-full mt-1 py-2 input-sign"
						/>
						<span className="focus-border"></span>
					</div>
				</div>
				<div className="mt-6 content">
					<label htmlFor="email" className="text-lg">
						Email
					</label>
					<input type="email" name="email" className="w-full mt-1 py-2 input-sign" />
					<span className="focus-border"></span>
				</div>
				<div className="mt-6 content">
					<label htmlFor="password" className="text-lg">
						Password
					</label>
					<input
						id="password"
						name="password"
						type={passwordVisible1 ? "text" : "password"}
						className="w-full mt-1 py-2 input-sign"
					/>
					<Icon
						className="absolute top-10 right-0 text-lg md:text-2xl text-[var(--orange)] cursor-pointer"
						icon={passwordVisible1 ? "bxs:show" : "bxs:hide"}
						onClick={() => setPasswordVisible1(!passwordVisible1)}
					/>
					<span className="focus-border"></span>
				</div>
				<div className="mt-6 content">
					<label htmlFor="confirm-password" className="text-lg">
						Confirm Password
					</label>
					<input
						id="confirm-password"
						name="confirm-password"
						type={passwordVisible2 ? "text" : "password"}
						className="w-full mt-1 py-2 input-sign"
					/>
					<Icon
						className="absolute top-10 right-0 text-lg md:text-2xl text-[var(--orange)] cursor-pointer"
						icon={passwordVisible2 ? "bxs:show" : "bxs:hide"}
						onClick={() => setPasswordVisible2(!passwordVisible2)}
					/>
					<span className="focus-border"></span>
				</div>
				<button className="btn-orange w-[100%]" type="submit">
					Sign Up
				</button>
			</form>
			<p className="font-light text-sm mt-3">
				Already have account?{" "}
				<Link to="/signin" className="text-blue-500 hover:text-blue-700 hover:font-[400]">
					Sign in
				</Link>
			</p>
		</SignLayout>
	);
};

export default Register;
