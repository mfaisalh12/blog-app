import "./SignLayout.css";

import imageSign from "../../../assets/image-sign.png";
import logo from "../../../assets/logo.png";

const SignLayout = (props) => {
	return (
		<div className="grid grid-cols-1 md:grid-cols-2 h-full">
			<div className="bg-orange h-full md:block hidden">
				<div className="container mx-auto h-full flex justify-center align-middle ">
					<img src={imageSign} className="self-center lg:max-w-xl" alt="sign" />
				</div>
			</div>
			<div>
				<div className="container mx-auto h-full lg:py-14">
					<img src={logo} className="self-center max-w-[60px] md:max-w-[91px]" alt="logo" />
					{props.children}
				</div>
			</div>
		</div>
	);
};

export default SignLayout;
