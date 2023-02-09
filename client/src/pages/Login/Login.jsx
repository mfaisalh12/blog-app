import { Link } from "react-router-dom";
import SignLayout from "../Layout/Sign/SignLayout";

const Login = () => {
	return (
		<SignLayout>
			<h3 className="mt-8 font-medium text-2xl">Sign In</h3>
			<form>
				<div className="mt-6 content">
					<label htmlFor="email" className="text-lg">
						Email
					</label>
					<input type="email" className="w-full mt-1 py-2 input-sign" />
					<span className="focus-border"></span>
				</div>
				<div className="mt-6 content">
					<label htmlFor="password" className="text-lg">
						Password
					</label>
					<input type="text" className="w-full mt-1 py-2 input-sign" />
					<span className="focus-border"></span>
				</div>
				<button className="btn-orange" type="submit">
					Sign in
				</button>
			</form>
			<p className="font-light text-sm mt-3">
				Don't have an account? <Link className="text-blue-500 hover:text-blue-700">Sign-up</Link>
			</p>
		</SignLayout>
	);
};

export default Login;
