import db from "../db.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const register = (req, res) => {
	// CHECK EXISTING USER
	if (Object.keys(req.body).length === 0) {
		return res.status(400).json("Content cannot be empty");
	}

	const sql = "SELECT * FROM users WHERE email = ?";
	db.query(sql, [req.body.email], (err, data) => {
		if (err) return res.json(err);
		if (data.length) return res.status(409).json("Email already exist");

		// Hash the password and create a user
		const salt = bcrypt.genSaltSync(10);
		const hash = bcrypt.hashSync(req.body.password, salt);

		const sql = "INSERT INTO users(`name`,`email`,`password`) VALUES (?)";
		const values = [req.body.name, req.body.email, hash];

		db.query(sql, [values], (err, data) => {
			if (err) return res.json(err);
			return res.status(200).json("User has been created.");
		});
	});
};

export const login = (req, res) => {
	// CHECK USER
	const sql = "SELECT * FROM users WHERE email = ?";

	db.query(sql, [req.body.email], (err, data) => {
		if (err) return res.json(err);
		if (data.length === 0) return res.status(404).json("User Not Found!");

		// Check Password
		const isPasswordCorrect = bcrypt.compareSync(req.body.password, data[0].password);

		if (!isPasswordCorrect) return res.status(404).json("Wrong email or password!");

		const token = jwt.sign({ id: data[0].id }, "jwtkey");
		const { password, ...other } = data[0];

		res
			.cookie("access_token", token, {
				httpOnly: true,
			})
			.status(200)
			.json({
				access_token: token,
			});
	});
};

export const logout = (req, res) => {
	res
		.clearCookie("access_token", {
			sameSite: "none",
			secure: true,
		})
		.status(200)
		.json("User has been logged out.");
};
