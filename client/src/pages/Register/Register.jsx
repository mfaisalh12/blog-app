import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Icon } from "@iconify/react";
import SignLayout from "../Layout/Sign/SignLayout";
import axios from "axios";

const Register = () => {
	const [passwordVisible1, setPasswordVisible1] = useState(false);
	const [passwordVisible2, setPasswordVisible2] = useState(false);
	const [inputs, setInputs] = useState({});
	const [err, setError] = useState(null);

	const navigate = useNavigate();

	const handleChange = (e) => {
		setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			if (Object.keys(inputs).length === 0) {
				throw "Content cannot be empty";
			}
			let name = null;
			if (inputs.first_name && inputs.last_name) name = inputs.first_name + " " + inputs.last_name;
			else throw "Name cannot be empty";
			if (!inputs.email) throw "Email cannot be empty";
			else if (!/^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/.test(inputs.email)) {
				throw "input must be in email format";
			}
			if (!inputs.password || !inputs.confirm_password) throw "Password cannot be empty";
			if (inputs.password !== inputs.confirm_password) throw "Password are not the same";

			const data = {
				name: name,
				email: inputs.email,
				password: inputs.password,
			};

			const status = await axios({
				method: "post",
				url: "auth/register",
				data: data,
			});
			navigate("/signin");
		} catch (err) {
			err.response ? setError(err.response.data) : setError(err);
		}
	};

	return (
		<SignLayout>
			<h3 className="mt-4 font-medium text-2xl">Sign Up</h3>
			<form>
				<div className="grid grid-cols-1 md:grid-cols-2 md:gap-10">
					<div className="mt-6 content">
						<label htmlFor="first_name" className="text-lg">
							First Name
						</label>
						<input
							type="text"
							id="first_name"
							name="first_name"
							className="w-full mt-1 py-2 input-sign"
							onChange={handleChange}
						/>
						<span className="focus-border"></span>
					</div>
					<div className="mt-6 content">
						<label htmlFor="last-name" className="text-lg">
							Last Name
						</label>
						<input
							type="text"
							id="last_name"
							name="last_name"
							className="w-full mt-1 py-2 input-sign"
							onChange={handleChange}
						/>
						<span className="focus-border"></span>
					</div>
				</div>
				<div className="mt-6 content">
					<label htmlFor="email" className="text-lg">
						Email
					</label>
					<input
						type="email"
						name="email"
						className="w-full mt-1 py-2 input-sign"
						onChange={handleChange}
					/>
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
						onChange={handleChange}
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
						id="confirm_password"
						name="confirm_password"
						type={passwordVisible2 ? "text" : "password"}
						className="w-full mt-1 py-2 input-sign"
						onChange={handleChange}
					/>
					<Icon
						className="absolute top-10 right-0 text-lg md:text-2xl text-[var(--orange)] cursor-pointer"
						icon={passwordVisible2 ? "bxs:show" : "bxs:hide"}
						onClick={() => setPasswordVisible2(!passwordVisible2)}
					/>
					<span className="focus-border"></span>
				</div>
				<button className="btn-orange w-[100%]" type="submit" onClick={handleSubmit}>
					Sign Up
				</button>
				{err && <p className="text-red-600 font-normal text-sm">{err}</p>}
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
