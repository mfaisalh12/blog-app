import db from "../db.js";
import jwt from "jsonwebtoken";

export const getPosts = (req, res) => {
	const sql = `WITH cp AS(
							SELECT id_post, GROUP_CONCAT(DISTINCT category) AS categories_group 
									FROM category_post
									INNER JOIN categories ON category_post.id_category = categories.id
									GROUP BY id_post
							)
							SELECT posts.id, title, description, image, posts.created_at, users.name, users.picture AS user_image, cp.categories_group FROM posts 
							JOIN cp ON cp.id_post = posts.id
							INNER JOIN users ON posts.id_user = users.id
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
		if (!data[0]) return res.status(400).json("Data Not Found");

		return res.status(200).json(data[0]);
	});
};

export const addPost = (req, res) => {
	const token = req.cookies.access_token;
	if (!token) return res.status(401).json("Not authenticated!");

	jwt.verify(token, "jwtkey", (err, userInfo) => {
		if (err) return res.status(403).json("Token is not valid!");

		const getIdCategory = "SELECT * FROM categories WHERE category = ?";
		const valueCategory = [req.body.category];
		db.query(getIdCategory, valueCategory, (err, data) => {
			if (!data[0]) return res.status(200).json("Data category not found");
			const sql = "INSERT INTO posts(title, description, image, id_user) VALUES (?)";
			const values = [req.body.title, req.body.desc, req.body.img, userInfo.id];

			db.query(sql, [values], (err, result) => {
				const sql2 = "INSERT INTO category_post(id_post, id_category) VALUES (?)";
				const values2 = [result.insertId, data[0].id];
				db.query(sql2, [values2], (err, result) => {
					if (err) return res.status(500).json(err);
					return res.json("Post has been created.");
				});
			});
		});
	});
};

export const updatePost = (req, res) => {
	const token = req.cookies.access_token;
	if (!token) return res.status(401).json("Not authenticated!");

	jwt.verify(token, "jwtkey", (err, userInfo) => {
		if (err) return res.status(403).json("Token is not valid!");

		const postId = req.params.id;
		const sql = "UPDATE posts SET title=?, description=?,image=? WHERE id = ? AND id_user = ?";
		const values = [req.body.title, req.body.desc, req.body.img];

		db.query(sql, [...values, postId, userInfo.id], (err, data) => {
			if (err) return res.status(500).json(err);
			return res.json("Post has been updated.");
		});
	});
};

export const deletePost = (req, res) => {
	const token = req.cookies.access_token;
	if (!token) return res.status(401).json("Not authenticated!");

	jwt.verify(token, "jwtkey", (err, userInfo) => {
		if (err) return res.status(403).json("Token is not valid!");

		const postId = req.params.id;

		const sql = "DELETE FROM category_post WHERE id_post = ?";
		db.query(sql, [postId], (err, data) => {
			if (err) return res.status(400).json("Post not found");
			const sql2 = "DELETE FROM posts WHERE id = ? AND id_user = ?";
			db.query(sql2, [postId, userInfo.id], (err, data) => {
				if (err) return res.status(403).json("You can delete only your post!");

				return res.json("Post has been deleted!");
			});
		});
	});
};
