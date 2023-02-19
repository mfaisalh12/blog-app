import db from "../db.js";
import jwt from "jsonwebtoken";

export const getPosts = (req, res) => {
	const sql = `WITH cp AS(
							SELECT id_post, GROUP_CONCAT(DISTINCT category) AS categories_group 
									FROM category_post
									INNER JOIN categories ON category_post.id_category = categories.id
									GROUP BY id_post
							)
							SELECT id, title, description, image, id_user, categories_group FROM posts 
							JOIN cp ON cp.id_post = posts.id
							GROUP BY categories_group `;
	db.query(sql, (err, data) => {
		if (err) return res.status(500).send(err);

		return res.status(200).json(data);
	});
};

export const getPostById = (req, res) => {
	const sql = `WITH cp AS(
									SELECT id_post, GROUP_CONCAT(DISTINCT category) AS categories_group 
									FROM category_post
									INNER JOIN categories ON category_post.id_category = categories.id
									GROUP BY id_post
							)
							SELECT id, title, description, image, id_user, categories_group FROM posts 
							JOIN cp ON cp.id_post = posts.id
							WHERE id = ?
							GROUP BY categories_group `;
	db.query(sql, [req.params.id], (err, data) => {
		if (err) return res.status(500).json(err);
		if (data[0]) {
			return res.status(200).json(data[0]);
		} else {
			return res.status(400).json("Data Not Found");
		}
	});
};

export const addPost = (req, res) => {
	const token = req.cookies.access_token;
	if (!token) return res.status(401).json("Not authenticated!");

	jwt.verify(token, "jwtkey", (err, userInfo) => {
		if (err) return res.status(403).json("Token is not valid!");

		const q = "INSERT INTO posts(`title`, `desc`, `img`, `cat`, `date`,`uid`) VALUES (?)";

		const values = [
			req.body.title,
			req.body.desc,
			req.body.img,
			req.body.cat,
			req.body.date,
			userInfo.id,
		];

		db.query(q, [values], (err, data) => {
			if (err) return res.status(500).json(err);
			return res.json("Post has been created.");
		});
	});
};

export const deletePost = (req, res) => {
	const token = req.cookies.access_token;
	if (!token) return res.status(401).json("Not authenticated!");

	jwt.verify(token, "jwtkey", (err, userInfo) => {
		if (err) return res.status(403).json("Token is not valid!");

		const postId = req.params.id;
		const q = "DELETE FROM posts WHERE `id` = ? AND `uid` = ?";

		db.query(q, [postId, userInfo.id], (err, data) => {
			if (err) return res.status(403).json("You can delete only your post!");

			return res.json("Post has been deleted!");
		});
	});
};

export const updatePost = (req, res) => {
	const token = req.cookies.access_token;
	if (!token) return res.status(401).json("Not authenticated!");

	jwt.verify(token, "jwtkey", (err, userInfo) => {
		if (err) return res.status(403).json("Token is not valid!");

		const postId = req.params.id;
		const q = "UPDATE posts SET `title`=?,`desc`=?,`img`=?,`cat`=? WHERE `id` = ? AND `uid` = ?";

		const values = [req.body.title, req.body.desc, req.body.img, req.body.cat];

		db.query(q, [...values, postId, userInfo.id], (err, data) => {
			if (err) return res.status(500).json(err);
			return res.json("Post has been updated.");
		});
	});
};
