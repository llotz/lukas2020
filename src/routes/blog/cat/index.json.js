import fs from 'fs';
import path from 'path';

const getFileContent = () =>
	fs.readFileSync('src/resources/categories.json', 'utf-8');

export function get(req, res, next) {
	const categories = getFileContent();

	if (categories) {
		res.writeHead(200, { 'Content-Type': 'application/json' });
		res.end(categories);
	} else {
		res.writeHead(404, {
			'Content-Type': 'application/json',
		});

		res.end(
			JSON.stringify({
				message: `Not found`,
			})
		);
	}
}
