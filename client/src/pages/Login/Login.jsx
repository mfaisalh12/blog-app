import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Icon } from "@iconify/react";

import SignLayout from "../Layout/Sign/SignLayout";
import { AuthContext } from "../../context/AuthContext";

const Login = () => {
	const [passwordVisible, setPasswordVisible] = useState(false);
	const [inputs, setInputs] = useState({});
	const [error, setError] = useState(null);

	const navigate = useNavigate();

	const { login } = useContext(AuthContext);

	const handleChange = (e) => {
		setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			await login(inputs);
			navigate("/");
		} catch (err) {
			setError(err.response.data);
		}
	};
	return (
		<SignLayout>
			<h3 className="mt-6 md:mt-16 font-medium text-2xl">Sign In</h3>
			<form>
				<div className="mt-6 content">
					<label htmlFor="email" className="text-lg">
						Email
					</label>
					<input
						type="email"
						name="email"
						className="w-full mt-1 py-2 input-sign"
						onChange={handleChange}
						required
					/>
					<span className="focus-border"></span>
				</div>
				<div className="mt-6 content">
					<label htmlFor="password" className="text-lg">
						Password
					</label>

					<input
						type={passwordVisible ? "text" : "password"}
						name="password"
						className="w-full mt-1 py-2 input-sign"
						onChange={handleChange}
						required
					/>
					<Icon
						className="absolute top-10 right-0 text-lg md:text-2xl text-[var(--orange)] cursor-pointer"
						icon={passwordVisible ? "bxs:show" : "bxs:hide"}
						onClick={() => setPasswordVisible(!passwordVisible)}
					/>
					<span className="focus-border"></span>
				</div>
				<button className="btn-orange w-[100%]" type="submit" onClick={handleSubmit}>
					Sign in
				</button>
				{error && <p className="text-red-600 font-normal text-sm">{error}</p>}
			</form>
			<p className="font-light text-sm mt-3">
				Don't have an account?{" "}
				<Link to="/signup" className="text-blue-500 hover:text-blue-700 hover:font-[400]">
					Sign up
				</Link>
			</p>
		</SignLayout>
	);
};

export default Login;
