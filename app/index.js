import express from 'express';
import mysql from 'mysql2/promise';

const app = express();
const port = 3000;

const dbConfig = {
	host: 'mysql-db',
	user: 'test',
	password: 'test',
	database: 'test_db',
};

app.get('/', async (req, res) => {
	try {
		const connection = await mysql.createConnection(dbConfig);
		const [rows] = await connection.execute('SELECT * FROM users');
		await connection.end();

		let html = '<h1>Usuarios</h1><ul>';
		rows.forEach((row) => {
			html += `<li>${row.name} (${row.email})</li>`;
		});
		html += '</ul>';

		res.send(html);
	} catch (err) {
		res.status(500).send(
			'Error al conectar con la base de datos: ' + err.message
		);
	}
});

app.listen(port, () => {
	console.log(`App escuchando en http://localhost:${port}`);
});
