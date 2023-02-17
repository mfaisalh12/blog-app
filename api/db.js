import mysql from "mysql";

const db = mysql.createConnection({
	host: "localhost",
	user: "root",
	password: "",
	database: "blog",
	port: 3306,
});

db.connect((err) => {
	if (err) throw err;
	console.log("DB Connected");
});

export default db;
