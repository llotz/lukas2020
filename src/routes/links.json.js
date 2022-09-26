import fs from 'fs';
import path from 'path';
import marked from 'marked';

const getFileContent = () =>
	fs.readFileSync(path.resolve('./src/resources/links.md'), 'utf-8');

export function get(req, res, next) {
	const links = getFileContent();
	//const renderer = new marked.Renderer();
	const html = marked.parse(links);
	if (html) {
		res.writeHead(200, { 'Content-Type': 'application/json' });
		res.end(JSON.stringify(html));
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
